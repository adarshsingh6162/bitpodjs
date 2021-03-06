<template>
  <div>
    <template v-if="!!error">
      <div>
        <component :is="errorTemplate || null" :error="error" />
      </div>
    </template>
    <v-snackbar v-model="snackbar" :timeout="timeout" :top="true">
      <div class="text-center">{{ snackbarText }}</div>
    </v-snackbar>
    <div v-if="!error" :key="error">
      <div class="grid-actions-container mt-lg-n11 mt-md-n11 mt-sm-n11 mt-xs-0">
        <div class="d-flex">
          <template v-if="selectedItems.length > 0">
            <component
              :is="actionTemplates['row-select'] || null"
              :content="content"
              :view-name="viewName"
              :on-update-item="onUpdateItem"
              :on-delete-item="onDeleteItem"
              :items="selectedItems"
              :refresh="refresh"
              :context="context"
              class="d-flex"
            />
          </template>
          <component
            :is="actionTemplates['grid'] || null"
            :content="content"
            :view-name="viewName"
            :on-new-item-save="onNewItemSave"
            :refresh="refresh"
            :context="context"
          />
        </div>
        <div v-if="hideFilter">
          <slot name="filter">
            <FieldsFilter
              v-model="filters"
              :is-filter-applied="isFilterApplied"
              :fields="filterableFields"
            />
          </slot>
        </div>
        <div v-if="!hideSearch" class="grid-search-section">
          <slot name="search">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              hide-details
              class="grid-search-input ml-2"
              outlined
              dense
            ></v-text-field>
          </slot>
        </div>
      </div>
      <v-skeleton-loader :loading="loading" type="table">
        <v-data-table
          v-model="selectedItems"
          dense
          :headers="headers"
          :items="tableData.items"
          :single-select="singleSelect"
          :loading="loading"
          :options.sync="options"
          :server-items-length="tableData.total"
          :hide-default-header="hideDefaultHeader"
          :hide-default-footer="isHideDefaultFooter"
          :show-expand="showExpand"
          :single-expand="singleExpand"
          item-key="id"
          class="elevation-0"
          :class="hideDefaultHeader ? 'px-0 pt-0 istemplate' : 'px-2 pt-1'"
          :show-select="showSelect"
          @update:options="updatePagination"
          @click:row="onRowClick"
          @input="onItemSelected"
        >
          <template v-if="!!slotTemplates.item" v-slot:item="props">
            <component
              :is="slotTemplates.item || null"
              :item="props.item"
              :headers="props.headers"
              :is-selected="props.isSelected"
              :context="contentContext"
              :items="tableData.items"
              :content="content"
              :refresh="refresh"
            />
          </template>
          <template
            v-for="(column, index) in headers"
            v-slot:[`item.${column.value}`]="props"
          >
            <component
              :is="component[index] || null"
              :key="column.value"
              :item="props.item"
              :value="props.value"
              :context="contentContext"
              :items="tableData.items"
              :column="column"
              :content="content"
              :refresh="refresh"
            />
          </template>
          <template
            v-if="!!slotTemplates['expanded-item']"
            v-slot:expanded-item="props"
          >
            <component
              :is="slotTemplates['expanded-item'] || null"
              :item="props.item"
              :headers="props.headers"
            />
          </template>
          <template v-if="!!slotTemplates.body" v-slot:body="props">
            <component
              :is="slotTemplates.body || null"
              :pagination="props.pagination"
              :items="props.items"
              :options="props.options"
              :expand="props.expand"
              :select="props.select"
              :refresh="refresh"
            />
          </template>
          <template v-if="!!slotTemplates.header" v-slot:header="props">
            <component
              :is="slotTemplates.header || null"
              :props="props.props"
              :on="props.on"
            />
          </template>
          <template v-if="!!slotTemplates.footer" v-slot:footer="props">
            <component
              :is="slotTemplates.footer || null"
              :props="props.props"
              :on="props.on"
              :headers="props.headers"
            />
          </template>
        </v-data-table>
      </v-skeleton-loader>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import format from 'date-fns/format'
import FieldsFilter from './FieldsFilter.vue'
import {
  templateLoaderMixin,
  getOrderQuery,
  buildQueryVariables,
} from '~/utility'

const DEFAULT_GRID_PROPS = {
  hideDefaultHeader: false,
  hideDefaultFooter: false,
  showExpand: false,
  singleExpand: false,
  showSelect: false,
  hideFilter: false,
  hideSearch: false,
}
const ACTION_TYPES = ['grid', 'row', 'row-select']
const TEMPLATE_SLOTS = ['item', 'body', 'header', 'footer', 'expanded-item']

function getTableHeader(content, viewName) {
  const fields = getGridFields(content, viewName)

  const headers = []
  for (const fieldName in fields) {
    const {
      caption,
      sortEnable,
      displayOrder,
      columnWidth,
      template,
      hidden = false,
      type,
    } = fields[fieldName]
    if (!hidden) {
      headers.push({
        text: caption,
        type,
        value: fieldName,
        sortable: sortEnable,
        width: columnWidth,
        displayOrder,
        template,
      })
    }
  }
  headers.sort((col1, col2) => col1.displayOrder - col2.displayOrder)
  return headers
}

function getGridFields(content, viewName) {
  const view = content.views[viewName]
  return view.fields
}

function getViewDataSource(content, viewName) {
  const view = content.views[viewName]
  return view.dataSource
}

function getViewQuery(content, viewName) {
  return getViewDataSource(content, viewName).query
}

function getGridTemplateInfo(content, viewName) {
  const view = content.views[viewName]
  return view.template || {}
}

function formatResult(content, viewName, data, modelName) {
  if (!data[modelName]) return []
  const [modelApi] = Object.getOwnPropertyNames(data[modelName])
  let { edges } = data[modelName][`${modelApi}`]
  const fields = getGridFields(content, viewName)
  edges = edges.map(({ node }) => {
    const formattedRecord = {}
    for (const field in node) {
      const { type } = fields[field] || {}
      const fieldValue = node[field]
      if (type === 'date' || type === 'datetime')
        formattedRecord[field] = fieldValue
          ? format(new Date(fieldValue), 'PPp')
          : ''
      else formattedRecord[field] = node[field]
    }

    formattedRecord.id = getIdFromAtob(node.id)
    return formattedRecord
  })
  return edges
}

function formatCountData(data, modelName) {
  const count = data[modelName][`${modelName}Count`]
  return count
}

function getGridsProps(content, viewName) {
  const view = content.views[viewName]
  return { ...DEFAULT_GRID_PROPS, ...view.ui }
}

function getIdFromAtob(encodedId) {
  if (!encodedId) {
    return ''
  }
  const decodedStr = atob(encodedId)
  if (decodedStr.split(':')[1]) {
    return decodedStr.split(':')[1]
  }
  return encodedId
}

function buildMutationCreateQuery(modelName) {
  return `mutation($Inputs : ${modelName}CreateInput!){ ${modelName} { ${modelName}Create(input:$Inputs){ clientMutationId obj{ id } } } }`
}

function getModelName(content, viewName) {
  const view = content.views[viewName]
  const dataSource = view.dataSource
  return dataSource.model
}

function buildMutationDeleteQuery(modelName) {
  return `mutation($Inputs: ${modelName}DestroyAllInput!){ ${modelName} { ${modelName}DestroyAll(input:$Inputs){ clientMutationId } } }`
}

function buildMutationUpsertQuery(modelName) {
  return `mutation($Inputs : ${modelName}UpsertWithWhereInput!){ ${modelName}{ ${modelName}UpsertWithWhere(input:$Inputs){ clientMutationId obj{ id } } } }`
}

export default {
  components: {
    FieldsFilter,
  },
  mixins: [templateLoaderMixin],
  props: {
    viewName: {
      type: String,
      required: true,
    },
    search: {
      type: String,
      default: '',
    },
    filter: {
      type: Object,
      default: () => null,
    },
    content: {
      type: Object,
      required: true,
    },
    context: {
      type: Object,
      required: false,
      default: () => {},
    },
    value: {
      type: Array,
      default: () => [],
    },
    singleSelect: {
      type: Boolean,
      default: false,
    },
    serveritemslength: {
      type: null,
      default: null,
    },
  },
  data() {
    const headers = getTableHeader(this.content, this.viewName)
    const gridProps = getGridsProps(this.content, this.viewName)
    return {
      headers,
      tableData: {
        items: [],
        total: 0,
      },
      loading: true,
      totalCount: 0,
      options: {},
      isFilterApplied: false,
      filterFields: {},
      filters: { rules: [], ruleCondition: 'and' },
      component: [],
      slotTemplates: {},
      hideDefaultHeader: gridProps.hideDefaultHeader,
      hideDefaultFooter: gridProps.hideDefaultFooter,
      showExpand: gridProps.showExpand,
      singleExpand: gridProps.singleExpand,
      showSelect: gridProps.showSelect,
      hideFilter: gridProps.hideFilter,
      hideSearch: gridProps.hideSearch,
      selectedItems: [],
      actionTemplates: [],
      triggerChange: 0,
      error: '',
      errorTemplate: null,
      snackbar: false,
      timeout: 1000,
      snackbarText: '',
    }
  },
  computed: {
    filterableFields() {
      const fields = getGridFields(this.content, this.viewName)
      const filterEnableFields = {}
      for (const field in fields) {
        const { filterEnable = true } = fields[field]
        if (filterEnable) {
          filterEnableFields[field] = fields[field]
        }
      }
      return filterEnableFields
    },
    contentContext() {
      const contentContext =
        getGridTemplateInfo(this.content, this.viewName).context || {}
      return {
        ...contentContext,
        ...this.context,
      }
    },
    _components() {
      return {
        errorTemplate: {
          locations: [
            `templates/grids/${this.templateFolderName}/error.vue`,
            `common/templates/grid/error.vue`,
          ],
        },
      }
    },
    isHideDefaultFooter() {
      const isLessItems = this.tableData.total > this.options.itemsPerPage
      return !isLessItems || this.hideDefaultFooter
    },
  },
  watch: {
    filters() {
      // call rest
      this.loadRestData()
    },
    search() {
      // call rest
      this.loadRestData()
    },
    value() {
      this.selectedItems = this.$props.value
    },
  },
  mounted() {
    this.selectedItems = this.value
    this.headers.forEach(async (column, index) => {
      const columnFileName = column && column.value.toLowerCase()
      this.component[index] = await this.loadTemplate([
        `templates/grids/${this.templateFolderName}/column-${columnFileName}.vue`,
        `templates/grids/${this.templateFolderName}/column-${index}.vue`,
        `common/templates/grid/column.vue`,
      ])
    })
    TEMPLATE_SLOTS.forEach(async (slot) => {
      this.slotTemplates[slot] = await this.loadTemplate(
        [`templates/grids/${this.templateFolderName}/${slot}.vue`],
        false
      )
    })
    const templateName = this.templateFolderName
    ACTION_TYPES.forEach(async (actionType) => {
      this.actionTemplates[actionType] = await this.loadTemplate([
        `templates/grids/${templateName}/actions/${actionType}/index.vue`,
        `common/templates/grid/actions/${actionType}/index.vue`,
      ])
    })
  },
  created() {
    const dataSource = getViewDataSource(this.content, this.viewName)
    const dataSourceType = dataSource.type || 'graphql'
    if (dataSourceType === 'graphql') {
      this.$apollo.queries.tableData.skip = false
    }
    this.loadRestData()
  },

  methods: {
    updatePagination(pagination) {
      // call rest
      this.loadRestData()
    },
    onFilterClick(e) {
      this.isFilterApplied = true
    },
    onRowClick(item, props) {
      if (!this.showSelect) {
        this.selectedItems = [item]
      }
    },
    onItemSelected(items) {
      this.selectedItems = items
      this.$emit('onSelectedListChange', this.selectedItems)
    },
    async onNewItemSave(data) {
      const modelName = getModelName(this.content, this.viewName)
      const newItemMutation = buildMutationCreateQuery(modelName)
      const userCreated = await this.$apollo.mutate({
        mutation: gql(newItemMutation),
        variables: {
          Inputs: {
            data,
            clientMutationId: `${modelName} list item updated successfully.`,
          },
        },
      })
      this.$apollo.queries.tableData.refresh()
      return userCreated
    },
    async onUpdateItem(data) {
      const modelName = getModelName(this.content, this.viewName)
      const where = {
        id: data.id,
      }
      const editItemMutation = buildMutationUpsertQuery(modelName)
      const itemUpdated = await this.$apollo.mutate({
        mutation: gql(editItemMutation),
        variables: {
          Inputs: {
            where,
            data,
            clientMutationId: `${modelName} list item updated successfully.`,
          },
        },
      })
      this.refresh()
      this.snackbarText = 'Record Updated Successfully'
      this.snackbar = true
      return itemUpdated
    },
    async onDeleteItem(ids) {
      const modelName = getModelName(this.content, this.viewName)
      const deleteItemMutation = buildMutationDeleteQuery(modelName)
      const itemDeleted = await this.$apollo.mutate({
        mutation: gql(deleteItemMutation),
        variables: {
          Inputs: {
            where: {
              id: {
                inq: ids,
              },
            },
            clientMutationId: `${modelName} list item updated successfully.`,
          },
        },
      })
      this.refresh()
      this.snackbarText = 'Record deleted Successfully'
      this.snackbar = true
      return itemDeleted
    },
    refresh() {
      const dataSource = getViewDataSource(this.content, this.viewName)
      const dataSourceType = dataSource.type || 'graphql'
      if (dataSourceType === 'graphql') {
        this.$apollo.queries.tableData.refresh()
      }
      if (dataSourceType === 'rest') {
        this.loadRestData()
      }
      this.selectedItems = []
    },
    async loadRestData() {
      const dataSource = getViewDataSource(this.content, this.viewName)
      const dataSourceType = dataSource.type || 'graphql'
      if (dataSourceType === 'rest') {
        const { search, filters } = this
        const options = {
          ...this.options,
          search,
          filters,
        }

        const getDataFunc = dataSource.getData.call(this, this)
        this.tableData = await getDataFunc.call(this, options)
        this.loading = false
      }
    },
  },
  apollo: {
    tableData: {
      query() {
        return gql`
          ${getViewQuery(this.content, this.viewName)}
        `
      },
      variables() {
        const { content, viewName, search, filters } = this
        const sortBy = this.options.sortBy
        const sortDesc = this.options.sortDesc
        const order = getOrderQuery(content, viewName, sortBy, sortDesc)
        const where = buildQueryVariables({
          viewName,
          search,
          filters,
          filter: this.filter,
          content,
          ctx: this,
        })
        const page = this.options.page || 1
        const itemsPerPage = this.options.itemsPerPage || 10
        const skip = (page - 1) * (itemsPerPage || 10)
        const limit = itemsPerPage === -1 ? 0 : itemsPerPage
        return {
          filters: { limit, skip, order, where },
          where,
        }
      },
      update(data) {
        const { content, viewName } = this
        const modelName =
          getModelName(content, viewName) || content.general.name
        const tableData =
          Object.keys(data).length > 0
            ? {
                items: formatResult(content, viewName, data, modelName),
                total: formatCountData(data, modelName),
              }
            : {}
        if (Object.keys(data).length > 0) this.error = ''
        return tableData
      },
      result({ data, loading, networkStatus }) {
        this.loading = false
      },
      error(error) {
        this.error = error
        this.loading = false
      },
      prefetch: false,
      loadingKey: 'loading',
      skip: true,
      pollInterval: 0,
    },
  },
  // axios: {
  //   tableData: {
  //     query(){

  //     },
  //     update(){

  //     }
  //   }
  // },
}
</script>

<style>
.grid-search-section {
  display: flex;
  justify-content: flex-end;
}
.grid-search-input {
  display: flex;
  max-width: 150px;
  padding: 0 10px;
}
.grid-actions-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
