import { getCustomData } from '../rest'
export default {
  views: {
    integrations: {
      ui: {
        hideDefaultHeader: false,
        hideDefaultFooter: false,
        showExpand: false,
        singleExpand: false,
        showSelect: false,
        hideFilter: false,
        hideSearch: true,
      },
      hidden: true,
      fields: {
        'MetaData.Category': {
          displayOrder: 2,
          caption: 'Category',
          searchEnable: true,
          sortEnable: true,
          columnWidth: '120px',
          type: 'string',
        },
        ServiceId: {
          displayOrder: 3,
          caption: 'App Name',
          searchEnable: true,
          sortEnable: true,
          columnWidth: '80px',
          type: 'string',
        },
        Integrate: {
          displayOrder: 5,
          caption: 'Action',
          searchEnable: true,
          sortEnable: true,
          columnWidth: '180px',
          type: 'string',
        },
        Status: {
          displayOrder: 4,
          caption: 'Status',
          searchEnable: true,
          sortEnable: true,
          columnWidth: '180px',
          type: 'string',
        },
      },
      template: {
        name: 'eventIntegration-grid',
        context: {
          basePath: '/event',
        },
        actions: {
          new: {
            hidden: true,
            caption: 'new field',
          },
          edit: {
            hidden: true,
          },
          delete: {
            hidden: true,
          },
        },
      },
      dataSource: {
        type: 'rest',
        getData: (ctx) =>
          getCustomData(
            `OrganizationInfos/getMyConnections?filter={"where":{"MetaData.eventId": {"like": "${ctx.$route.query.event}", "options": "i"}}}`
          ),
      },
      title: 'Integrations',
      type: 'list',
    },
  },
}
