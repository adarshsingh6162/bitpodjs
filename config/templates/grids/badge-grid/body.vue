<template>
  <div>
    <v-flex
      class="d-flex flex-wrap greybg pa-0 justify-center justify-md-start"
    >
      <v-card
        v-for="item in items"
        :key="item.id"
        class="ma-3 ml-0 mt-0 greybg elevation-0 badge-view positionRelative"
      >
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-html="item.Template" />
        <div class="positionAbsolute box-actions">
          <v-btn
            icon
            small
            v-bind="attrs"
            v-on="on"
            @click="
              editTemplate = true
              selected = item
            "
          >
            <v-icon class="fs-16">fa-pencil</v-icon>
          </v-btn>
          <v-btn
            icon
            small
            v-bind="attrs"
            v-on="on"
            @click="deleteBadge(item.id)"
          >
            <v-icon class="fs-16">fa-trash</v-icon>
          </v-btn>
        </div>
      </v-card>
    </v-flex>
    <div v-if="editTemplate">
      <editBadgeTemplate
        :edit-template.sync="editTemplate"
        :selected="selected"
        :refresh="refresh"
      />
    </div>
  </div>
</template>

<script>
import editBadgeTemplate from '~/pages/apps/_app/organization/_id/editBadgeTemplate.vue'
export default {
  components: {
    editBadgeTemplate,
  },
  props: {
    items: { type: Array, default: () => [] },
    refresh: {
      type: Function,
      required: false,
      default: null,
    },
  },
  data() {
    return {
      editTemplate: false,
      selected: {},
    }
  },
  methods: {
    async deleteBadge(id) {
      const url = this.$bitpod.getApiUrl()

      const check = confirm('Are you sure you want to delete this badge?')
      let res = null
      if (check === true) {
        try {
          res = await this.$axios.$delete(`${url}Badges/${id}`)
        } catch (e) {
          console.error(
            `Error in badge-grid while DELETE a Badge context: badgeid:- ${id} baseUrl: ${url} error: ${e}`,
            e
          )
        }
        if (res) {
          this.refresh()
        }
      }
    },
  },
}
</script>

<style>
.badge-view > div > div {
  background: #fff;
  margin: 0 !important;
  padding: 0 !important;
  padding-top: 20px !important;
  overflow: hidden !important;
}
.badge-view img {
  max-width: 90px !important;
}
.box-actions {
  top: 2px;
  right: 2px;
  display: none !important;
}
.positionRelative:hover .box-actions {
  display: block !important;
}
</style>
