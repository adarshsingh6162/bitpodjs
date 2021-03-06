<template>
  <v-col class="px-0">
    <v-btn text small v-bind="attrs" v-on="on" @click="openPrintForm">
      <v-icon left>mdi-printer</v-icon>Print Badges
    </v-btn>
  </v-col>
</template>
<script>
import gql from 'graphql-tag'
import badge from '~/config/apps/event/gql/badge.gql'
import organizationInfo from '~/config/apps/event/gql/organizationInfo.gql'
import nuxtconfig from '~/nuxt.config'
import { formatGQLResult } from '~/utility/gql.js'
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
      required: false,
    },
    context: {
      type: Object,
      default: () => {},
      required: false,
    },
  },
  data() {
    return {
      data: {
        event: {},
      },
      eventBadge: {},
      Template: '',
      logoId: '',
    }
  },
  methods: {
    openPrintForm() {
      const myWindow = window.open('', '', 'width=900,height=900')
      this.items.map((ele) => {
        const template = this.context.badge.Template
          ? this.context.badge.Template
          : this.Template
        const str = this.getBadge(template, ele)
        myWindow.document.write(`${str}`)
      })
      myWindow.document.close()
      myWindow.focus()
      myWindow.print()
      setTimeout(function () {
        myWindow.close()
      }, 1000)
    },
    getBadge(str, items) {
      const logoUrl =
        nuxtconfig.publicRuntimeConfig.cdnUri +
        'admin-default-template-logo.png'
      if (str) {
        str = str
          .replace('{{ FullName }}', `${items.FullName}`)
          .replace(
            '{{ Category }}',
            `${(items.regType && items.regType.Name) || 'Guest'}`
          )
          .replace('{{ Organization }}', `${items.CompanyName}`)
          .replace(logoUrl, this.getAttachmentLink(this.logoId, true))
        if (this.context.event && this.context.event.Title) {
          str = str.replace('{{ EventName }}', `${this.context.event.Title}`)
        }
      }
      return str
    },
    getAttachmentLink(id, isDownloadLink) {
      const url = this.$bitpod.getApiUrl()
      const attachmentUrl = `${url}Attachments${
        isDownloadLink ? '/download' : ''
      }${id ? '/' + id : ''}`
      return attachmentUrl
    },
    async getOrgInfo() {
      try {
        const result = await this.$apollo.query({
          query: gql`
            ${organizationInfo}
          `,
          variables: {
            filters: {
              where: {},
            },
          },
        })
        if (result) {
          const orgInfo = formatGQLResult(result.data, 'OrganizationInfo')
          this.logoId = orgInfo[0].Image[0]
        }
      } catch (e) {
        console.error(
          'Error while fetching data using gql in print-badges.vue using the organizationInfo gql in method getOrgInfo',
          e
        )
      }
    },
  },
  apollo: {
    data: {
      query() {
        return gql`
          ${badge}
        `
      },
      variables() {
        return {
          filters: {
            where: {
              or: [
                {
                  EventId: {
                    inq: [this.$route.params.id],
                  },
                },
                {
                  EventId: {
                    exists: false,
                  },
                },
              ],
            },
          },
        }
      },
      update(data) {
        const badge = formatGQLResult(data, 'Badge')
        this.eventBadge = badge.length > 0 ? badge : {}
        this.eventBadge.filter((e) => {
          if (e.EventId === this.$route.params.id) {
            this.Template = e.Template
          }
        })
        this.getOrgInfo()
        return {
          badge: badge.length > 0 ? badge : {},
        }
      },
      result({ data, loading, networkStatus }) {},
      error(error) {
        this.error = error
        this.loading = 0
        console.error(
          'Error while fetching data using gql in eventAttendees/actions/row-select/print-badges.vue using the badge gql in apollo data query section',
          error
        )
      },
      prefetch: false,
      loadingKey: 'loading',
      skip: false,
      pollInterval: 0,
    },
  },
}
</script>
