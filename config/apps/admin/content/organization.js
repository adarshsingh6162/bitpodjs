import businessUnit from '../gql/businessUnit.gql'
import generalConfiguration from '~/config/apps/event/gql/registrationStatusOptions.gql'
import contactList from '~/config/apps/event/gql/contact.gql'
import crmActivity from '~/config/apps/event/gql/eventTasks.gql'
import { getCustomData } from '~/config/apps/event/rest'

export default {
  views: {
    organizationBusinessUnit: {
      ui: {
        hideDefaultHeader: false,
        hideDefaultFooter: false,
        showExpand: false,
        singleExpand: false,
        showSelect: false,
        hideFilter: false,
        hideSearch: true,
      },
      itemTitle: 'Business Unit',
      default: false,
      fields: {
        Name: {
          form: {
            caption: 'Name *',
            displayOrder: 1,
          },
          displayOrder: 2,
          caption: 'Name',
          searchEnable: true,
          sortEnable: true,
          columnWidth: '180px',
          type: 'string',
          cssClasses: 'col-12 col-md-12',
          newForm: true,
          editForm: true,
          rules: [
            (v) => {
              return !!v || 'Name is required'
            },
          ],
        },
        Description: {
          form: {
            caption: 'Description',
            displayOrder: 2,
          },
          displayOrder: 3,
          caption: 'Description',
          searchEnable: true,
          sortEnable: true,
          columnWidth: '180px',
          type: 'richtext',
          cssClasses: 'col-12 col-md-12',
          hidden: true,
          newForm: true,
          editForm: true,
        },
        'child.Name': {
          displayOrder: 3,
          caption: 'Parent BU',
          searchEnable: true,
          sortEnable: true,
          columnWidth: '180px',
          type: 'string',
          newForm: false,
          editForm: false,
        },
        'contacts.FullName': {
          displayOrder: 3,
          caption: 'Primary Contact',
          searchEnable: true,
          sortEnable: true,
          columnWidth: '180px',
          type: 'string',
          newForm: false,
          editForm: false,
        },
        '_CurrentAddress.AddressLine': {
          form: {
            caption: 'Address *',
            displayOrder: 3,
          },
          displayOrder: 5,
          caption: 'Address Line',
          searchEnable: true,
          sortEnable: true,
          columnWidth: '160px',
          type: 'string',
          cssClasses: 'col-12 col-md-12',
          newForm: true,
          editForm: true,
          rules: [
            (v) => {
              return !!v || 'Address is required'
            },
          ],
        },
        '_CurrentAddress.Country': {
          form: {
            caption: 'Country',
            displayOrder: 6,
          },
          displayOrder: 6,
          caption: 'Country',
          searchEnable: true,
          sortEnable: true,
          columnWidth: '130px',
          type: 'string',
          cssClasses: 'col-6 col-md-6',
          newForm: true,
          editForm: true,
        },
        '_CurrentAddress.City': {
          form: {
            caption: 'City',
            displayOrder: 4,
          },
          displayOrder: 6,
          caption: 'City',
          searchEnable: true,
          sortEnable: true,
          columnWidth: '130px',
          type: 'string',
          hidden: true,
          cssClasses: 'col-6 col-md-6',
          newForm: true,
          editForm: true,
        },
        '_CurrentAddress.State': {
          form: {
            caption: 'State',
            displayOrder: 5,
          },
          displayOrder: 6,
          caption: 'State',
          searchEnable: true,
          sortEnable: true,
          columnWidth: '130px',
          type: 'string',
          hidden: true,
          cssClasses: 'col-6 col-md-6',
          newForm: true,
          editForm: true,
        },
        '_CurrentAddress.PostalCode': {
          form: {
            caption: 'Zip Code',
            displayOrder: 7,
          },
          displayOrder: 7,
          caption: 'Zip Code',
          searchEnable: true,
          sortEnable: true,
          columnWidth: '130px',
          type: 'string',
          hidden: true,
          cssClasses: 'col-6 col-md-6',
          newForm: true,
          editForm: true,
        },
        Email: {
          form: {
            caption: 'Email',
            displayOrder: 9,
          },
          displayOrder: 7,
          caption: 'Email',
          searchEnable: true,
          sortEnable: true,
          columnWidth: '130px',
          type: 'string',
          cssClasses: 'col-6 col-md-6',
          newForm: true,
          editForm: true,
          rules: [
            function (value, data) {
              return /.+@.+\..+/.test(value) || 'E-mail must be valid'
            },
          ],
        },
        Phone: {
          form: {
            caption: 'Phone',
            displayOrder: 8,
          },
          displayOrder: 8,
          caption: 'Phone',
          searchEnable: true,
          sortEnable: true,
          columnWidth: '130px',
          type: 'string',
          cssClasses: 'col-6 col-md-6',
          newForm: true,
          editForm: true,
          rules: [
            function (value, data) {
              return /^[0-9]\d*$|^$/.test(value) || 'Number must be valid'
            },
          ],
        },
        Type: {
          form: {
            caption: 'Type *',
            displayOrder: 10,
          },
          searchEnable: true,
          sortEnable: true,
          columnWidth: '150px',
          type: 'lookup',
          cssClasses: 'col-6 col-md-6',
          hidden: true,
          inlineEdit: true,
          newForm: true,
          editForm: true,
          rules: [
            (v) => {
              return !!v || 'Type should be selected'
            },
          ],
          dataSource: {
            query: generalConfiguration,
            itemText: 'value',
            itemValue: 'key',
            filter(data) {
              return {
                type: 'BusinessTypeLocation',
              }
            },
          },
        },
        ParentId: {
          form: {
            caption: 'Parent Business Unit',
            displayOrder: 11,
          },
          searchEnable: true,
          sortEnable: true,
          columnWidth: '150px',
          type: 'lookup',
          cssClasses: 'col-6 col-md-6',
          hidden: true,
          inlineEdit: true,
          newForm: true,
          editForm: true,
          dataSource: {
            query: businessUnit,
            itemText: 'Name',
            itemValue: 'id',
          },
        },
        PrimeContactId: {
          form: {
            caption: 'Contact',
            displayOrder: 12,
          },
          searchEnable: true,
          sortEnable: true,
          columnWidth: '150px',
          type: 'lookup',
          cssClasses: 'col-6 col-md-6',
          hidden: true,
          inlineEdit: true,
          newForm: true,
          editForm: true,
          dataSource: {
            query: contactList,
            itemText: 'FullName',
            itemValue: 'id',
          },
        },
        Default: {
          displayOrder: 9,
          caption: 'Default',
          searchEnable: true,
          sortEnable: true,
          columnWidth: '180px',
          type: 'string',
          newForm: false,
          editForm: false,
        },
      },
      template: {
        name: 'organizationBussinessUnit-grid',
        context: {
          basePath: '/organization',
        },
      },
      dataSource: {
        query: businessUnit,
        defaultSort: 'createdDate DESC',
        type: 'graphql',
        model: 'Location',
        filter(ctx) {
          return {
            where: {},
          }
        },
      },
      title: 'organizationBusinessUnit',
      type: 'list',
    },
    organizationProductSubscription: {
      ui: {
        hideDefaultHeader: false,
        hideDefaultFooter: false,
        showExpand: false,
        singleExpand: false,
        showSelect: false,
        hideFilter: false,
        hideSearch: true,
      },
      default: false,
      fields: {
        'SubProduct.DisplayName': {
          displayOrder: 2,
          caption: 'Product',
          searchEnable: true,
          sortEnable: true,
          columnWidth: '200px',
          type: 'string',
        },
        StartDate: {
          displayOrder: 3,
          caption: 'Start Date',
          searchEnable: true,
          sortEnable: true,
          columnWidth: '180px',
          type: 'datetime',
        },
        EndDate: {
          displayOrder: 4,
          caption: 'End Date',
          searchEnable: true,
          sortEnable: true,
          columnWidth: '180px',
          type: 'datetime',
        },
        Cost: {
          displayOrder: 5,
          caption: 'Price',
          searchEnable: true,
          sortEnable: true,
          columnWidth: '130px',
          type: 'string',
        },
        Unit: {
          displayOrder: 6,
          caption: 'Unit',
          searchEnable: true,
          sortEnable: true,
          columnWidth: '120px',
          type: 'string',
        },
        isActive: {
          displayOrder: 7,
          caption: 'Active',
          searchEnable: true,
          sortEnable: true,
          columnWidth: '120px',
          type: 'string',
        },
        AutoRenew: {
          displayOrder: 8,
          caption: 'Auto Renew',
          searchEnable: true,
          sortEnable: true,
          columnWidth: '150px',
          type: 'string',
        },
      },
      template: {
        name: 'organizationSubscription-grid',
        context: {
          basePath: '/organization',
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
        getData: (ctx) => getCustomData(`OrganizationInfos/getSubscription`),
      },
      title: 'organizationProductSubscription',
      type: 'list',
    },
    organizationTasks: {
      ui: {
        hideDefaultHeader: false,
        hideDefaultFooter: false,
        showExpand: false,
        singleExpand: false,
        showSelect: true,
        hideFilter: false,
        hideSearch: true,
      },
      default: false,
      fields: {
        Title: {
          displayOrder: 2,
          caption: 'Title',
          searchEnable: true,
          sortEnable: true,
          columnWidth: '180px',
          type: 'string',
        },
        Status: {
          displayOrder: 3,
          caption: 'Status',
          searchEnable: true,
          sortEnable: true,
          columnWidth: '180px',
          type: 'string',
        },
        Action: {
          displayOrder: 4,
          caption: 'Wait For',
          searchEnable: true,
          sortEnable: true,
          columnWidth: '180px',
          type: 'string',
        },
        Category: {
          displayOrder: 5,
          caption: 'Category',
          searchEnable: true,
          sortEnable: true,
          columnWidth: '180px',
          type: 'string',
        },
        Type: {
          displayOrder: 6,
          caption: 'Type',
          searchEnable: true,
          sortEnable: true,
          columnWidth: '180px',
          type: 'string',
        },
        TemplateName: {
          displayOrder: 7,
          caption: 'Template Name',
          searchEnable: true,
          sortEnable: true,
          columnWidth: '180px',
          type: 'string',
        },
        createdBy: {
          displayOrder: 8,
          caption: 'Created By',
          searchEnable: true,
          sortEnable: true,
          columnWidth: '180px',
          type: 'string',
        },
        createdDate: {
          displayOrder: 9,
          caption: 'Created Date',
          searchEnable: true,
          sortEnable: true,
          columnWidth: '180px',
          type: 'date',
        },
        DueDate: {
          displayOrder: 10,
          caption: 'Due Date',
          searchEnable: true,
          sortEnable: true,
          columnWidth: '180px',
          type: 'datetime',
        },
      },
      template: {
        name: 'organizationTask-grid',
        context: {
          basePath: '/organization',
        },
      },
      dataSource: {
        query: crmActivity,
        type: 'graphql',
        model: 'CRMActivity',
        filter(ctx) {
          return {
            where: {
              Type: 'Template',
            },
          }
        },
      },
      title: 'Tasks',
      type: 'list',
    },
    organizationIntegration: {
      ui: {
        hideDefaultHeader: false,
        hideDefaultFooter: false,
        showExpand: false,
        singleExpand: false,
        showSelect: false,
        hideFilter: false,
        hideSearch: true,
      },
      default: false,
      fields: {
        'MetaData.Category': {
          displayOrder: 2,
          caption: 'Category',
          searchEnable: true,
          sortEnable: true,
          columnWidth: '180px',
          type: 'string',
        },
        ServiceId: {
          displayOrder: 3,
          caption: 'App Name',
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
          columnWidth: '120px',
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
      },
      template: {
        name: 'eventIntegration-grid',
        context: {
          basePath: '/organization',
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
        getData: (ctx) => getCustomData(`OrganizationInfos/getMyConnections`),
      },
      title: 'organizationIntegration',
      type: 'list',
    },
  },
}
