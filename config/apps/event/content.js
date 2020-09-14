import registrationStatusOptions from './gql/registrationStatusOptions.gql'
import registrationList from './gql/registrationList.gql'
import discountCodes from './gql/discountCodes.gql'
import eventList from './gql/eventlist.gql'
import eventNames from './gql/eventNames.gql'
import contactList from './gql/contactList.gql'
import memberList from './gql/memberList.gql'
import eventAttendees from './gql/eventAttendees.gql'
import eventInvites from './gql/eventInvites.gql'
import eventTickets from './gql/eventTickets.gql'
import eventDiscountCodes from './gql/eventDiscountCodes.gql'
import eventSession from './gql/eventSession.gql'
import eventRecurringSession from './gql/eventRecurringSession.gql'
import eventTasks from './gql/eventTasks.gql'
import registrationType from './gql/registrationType.gql'
import eventRegistrationTickets from './gql/eventRegistrationTickets.gql'
import { getData, getLookupData } from './rest'
import marketingTemplates from '~/config/apps/admin/gql/marketingTemplates.gql'

export default {
  Event: {
    DataSource: {
      Type: 'List',
      URL: 'Event',
    },
    general: {
      caption: 'Events',
      name: 'Event',
    },
    views: {
      'All Events': {
        ui: {
          hideDefaultHeader: false,
          hideDefaultFooter: false,
          showExpand: false,
          singleExpand: false,
          showSelect: true,
          hideFilter: false,
          hideSearch: false,
        },
        default: false,
        fields: {
          Title: {
            displayOrder: 2,
            caption: 'Title',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '250px',
            type: 'string',
          },
          Timezone: {
            displayOrder: 3,
            caption: 'Timezone',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'timezone',
          },
          StartDate: {
            displayOrder: 3,
            caption: 'Start Date',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'datetime',
          },
          EndDate: {
            displayOrder: 3,
            caption: 'End Date',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'datetime',
          },
          Privacy: {
            displayOrder: 4,
            caption: 'Privacy',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          Tags: {
            displayOrder: 5,
            caption: 'Tags',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          VenueName: {
            displayOrder: 6,
            caption: 'Venue',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          '_VenueAddress.AddressLine': {
            displayOrder: 7,
            caption: 'Address',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          '_VenueAddress.City': {
            displayOrder: 8,
            caption: 'City',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          '_VenueAddress.State': {
            displayOrder: 9,
            caption: 'State',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          '_VenueAddress.PostalCode': {
            displayOrder: 10,
            caption: 'Postal Code',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          '_VenueAddress.Country': {
            displayOrder: 11,
            caption: 'Country',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          Currency: {
            displayOrder: 12,
            caption: 'Currency',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          createdDate: {
            displayOrder: 13,
            caption: 'Created Date',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'date',
          },
        },
        template: {
          name: 'allEvents-grid',
          context: {
            basePath: '/event',
          },
        },
        dataSource: {
          query: eventList,
          defaultSort: 'createdDate DESC',
          type: 'graphql',
          model: 'Event',
        },
        title: 'All Events',
        type: 'list',
      },
      Past: {
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
            columnWidth: '250px',
            type: 'string',
          },
          StartDate: {
            displayOrder: 3,
            caption: 'Start Date',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'datetime',
          },
          EndDate: {
            displayOrder: 3,
            caption: 'End Date',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'datetime',
          },
          Privacy: {
            displayOrder: 4,
            caption: 'Privacy',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          Tags: {
            displayOrder: 5,
            caption: 'Tags',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          VenueName: {
            displayOrder: 6,
            caption: 'Venue',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          '_VenueAddress.AddressLine': {
            displayOrder: 7,
            caption: 'Address',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          '_VenueAddress.City': {
            displayOrder: 8,
            caption: 'City',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          '_VenueAddress.State': {
            displayOrder: 9,
            caption: 'State',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          '_VenueAddress.PostalCode': {
            displayOrder: 10,
            caption: 'Postal Code',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          '_VenueAddress.Country': {
            displayOrder: 11,
            caption: 'Country',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          Currency: {
            displayOrder: 12,
            caption: 'Currency',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          createdDate: {
            displayOrder: 13,
            caption: 'Created Date',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'date',
          },
        },
        template: {
          name: 'pastEvents-grid',
          context: {
            basePath: '/event',
          },
        },
        dataSource: {
          query: eventList,
          defaultSort: 'createdDate DESC',
          type: 'graphql',
          model: 'Event',
          filter: {
            where: {
              and: [{ EndDate: { lte: new Date() } }],
            },
          },
        },
        title: 'Past',
        type: 'list',
      },
      eventAttendees: {
        ui: {
          hideDefaultHeader: false,
          hideDefaultFooter: false,
          showExpand: false,
          singleExpand: false,
          showSelect: true,
          hideFilter: true,
          hideSearch: true,
        },
        hidden: true,
        fields: {
          FullName: {
            displayOrder: 2,
            caption: 'Full Name',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            hidden: false,
            inlineEdit: true,
            newForm: false,
            editForm: false,
          },
          Email: {
            displayOrder: 3,
            caption: 'Email',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            form: {
              caption: 'Email *',
              displayOrder: 4,
            },
            cssClasses: 'col-6 col-md-6',
            hidden: false,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            rules: [
              (v) => {
                return !!v || 'Email is required'
              },
              function (value, data) {
                return /.+@.+\..+/.test(value) || 'E-mail must be valid'
              },
            ],
          },
          'registration.FullName': {
            displayOrder: 3,
            caption: 'Register By',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            hidden: false,
            inlineEdit: true,
            newForm: false,
            editForm: false,
          },
          TicketAmount: {
            displayOrder: 4,
            caption: 'Ticket Amount',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            hidden: false,
            inlineEdit: true,
            newForm: false,
            editForm: false,
          },
          CompanyName: {
            displayOrder: 5,
            caption: 'Organization',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            form: {
              caption: 'Organization',
              displayOrder: 5,
            },
            cssClasses: 'col-6 col-md-6',
            hidden: false,
            inlineEdit: true,
            newForm: true,
            editForm: true,
          },
          'attendeeTicket.Code': {
            displayOrder: 6,
            caption: 'Ticket',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            hidden: false,
            inlineEdit: true,
            newForm: false,
            editForm: false,
          },
          SeatNumber: {
            displayOrder: 7,
            caption: 'Seat Number',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            hidden: false,
            inlineEdit: true,
            newForm: false,
            editForm: false,
          },
          'regType.Name': {
            displayOrder: 8,
            caption: 'Category',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            hidden: false,
            inlineEdit: true,
            newForm: false,
            editForm: false,
          },
          CheckIn: {
            displayOrder: 9,
            caption: 'Check In',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '250px',
            type: 'string',
            hidden: false,
            inlineEdit: true,
            newForm: false,
            editForm: false,
          },
          createdDate: {
            displayOrder: 10,
            caption: 'Created Date',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'date',
            hidden: false,
            inlineEdit: true,
            newForm: false,
            editForm: false,
          },
          Status: {
            displayOrder: 11,
            caption: 'Status',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            hidden: false,
            inlineEdit: true,
            newForm: false,
            editForm: false,
          },
          Action: {
            displayOrder: 12,
            caption: 'Action',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            hidden: false,
            inlineEdit: true,
            newForm: false,
            editForm: false,
          },
          FirstName: {
            form: {
              caption: 'First Name *',
              displayOrder: 1,
            },
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            cssClasses: 'col-6 col-md-6',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            rules: [
              (v) => {
                return !!v || 'First Name is required'
              },
            ],
          },
          LastName: {
            form: {
              caption: 'Last Name *',
              displayOrder: 2,
            },
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            cssClasses: 'col-6 col-md-6',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            rules: [
              (v) => {
                return !!v || 'Last Name is required'
              },
            ],
          },
          Phone: {
            form: {
              caption: 'Phone *',
              displayOrder: 3,
            },
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            cssClasses: 'col-6 col-md-6',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            rules: [
              (v) => {
                return !!v || 'Phone is required'
              },
              function (value, data) {
                return /^[0-9]\d*$|^$/.test(value) || 'Number must be valid'
              },
            ],
          },
          '_CurrentAddress.AddressLine': {
            form: {
              caption: 'Address',
              displayOrder: 6,
            },
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            cssClasses: 'col-6 col-md-6',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
          },
          '_CurrentAddress.City': {
            form: {
              caption: 'City',
              displayOrder: 7,
            },
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            cssClasses: 'col-6 col-md-6',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
          },
          '_CurrentAddress.State': {
            form: {
              caption: 'State',
              displayOrder: 8,
            },
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            cssClasses: 'col-6 col-md-6',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
          },
          '_CurrentAddress.PostalCode': {
            form: {
              caption: 'Zip',
              displayOrder: 9,
            },
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            cssClasses: 'col-6 col-md-6',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
          },
          '_CurrentAddress.Country': {
            form: {
              caption: 'Country',
              displayOrder: 10,
            },
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            cssClasses: 'col-6 col-md-6',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
          },
          TicketId: {
            form: {
              caption: 'Tickets *',
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
            rules: [
              (v) => {
                return !!v || 'Ticket should be selected'
              },
            ],
            dataSource: {
              query: eventTickets,
              itemText: 'Code',
              itemValue: 'id',
              filter(data) {
                return {
                  Events: this.$route.params.id,
                }
              },
            },
          },
          categoryId: {
            form: {
              caption: 'Registration Type',
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
              query: registrationType,
              itemText: 'Name',
              itemValue: 'id',
              filter(data) {
                return {
                  EventId: this.$route.params.id,
                }
              },
            },
          },
        },
        template: {
          name: 'eventAttendees-grid',
          context: {
            basePath: '/registration',
          },
        },
        dataSource: {
          query: eventAttendees,
          defaultSort: 'createdDate DESC',
          type: 'graphql',
          model: 'Attendee',
          filter(ctx) {
            return {
              where: {
                EventId: ctx.$route.params.id,
              },
            }
          },
          mutation(ctx, data) {
            return {
              new: {
                EventId: ctx.$route.params.id,
                Status: 'Success',
              },
              edit: {},
            }
          },
        },
        title: 'eventAttendees',
        type: 'list',
      },
      eventRegistrations: {
        ui: {
          hideDefaultHeader: false,
          hideDefaultFooter: false,
          showExpand: false,
          singleExpand: false,
          showSelect: true,
          hideFilter: true,
          hideSearch: true,
        },
        hidden: true,
        fields: {
          FullName: {
            displayOrder: 2,
            caption: 'Full Name',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            hidden: false,
            inlineEdit: true,
            newForm: false,
            editForm: false,
          },
          Email: {
            displayOrder: 3,
            caption: 'Email',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            form: {
              caption: 'Email *',
              displayOrder: 4,
            },
            cssClasses: 'col-6 col-md-6',
            hidden: false,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            rules: [
              (v) => {
                return !!v || 'Email is required'
              },
              function (value, data) {
                return /.+@.+\..+/.test(value) || 'E-mail must be valid'
              },
            ],
          },
          Phone: {
            form: {
              caption: 'Phone *',
              displayOrder: 3,
            },
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            cssClasses: 'col-6 col-md-6',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            rules: [
              (v) => {
                return !!v || 'Phone is required'
              },
              function (value, data) {
                return /^[0-9]\d*$|^$/.test(value) || 'Number must be valid'
              },
            ],
          },
          CompanyName: {
            displayOrder: 5,
            caption: 'Organization',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            form: {
              caption: 'Organization',
              displayOrder: 5,
            },
            cssClasses: 'col-6 col-md-6',
            hidden: false,
            inlineEdit: true,
            newForm: true,
            editForm: true,
          },
          TicketId: {
            form: {
              caption: 'Tickets *',
              displayOrder: 6,
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
            multiple: true,
            rules: [
              (v) => {
                return !!v || 'Ticket is required'
              },
            ],
            dataSource: {
              query: eventRegistrationTickets,
              itemText: 'CodeAmount',
              itemValue: 'id',
              filter(data) {
                return {
                  Events: this.$route.params.id,
                }
              },
            },
          },
          TotalAmount: {
            displayOrder: 6,
            caption: 'Amount',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            hidden: false,
            inlineEdit: true,
            newForm: false,
            editForm: false,
          },
          TicketQuantity: {
            displayOrder: 7,
            caption: 'Attendees',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            hidden: false,
            inlineEdit: true,
            newForm: false,
            editForm: false,
          },
          Status: {
            displayOrder: 8,
            caption: 'Status',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'lookup',
            cssClasses: 'col-6 col-md-6',
            hidden: false,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            form: {
              caption: 'Status *',
              displayOrder: 7,
            },
            dataSource: {
              query: registrationStatusOptions,
              itemText: 'value',
              itemValue: 'key',
              filter(data) {
                return {
                  type: 'RegistrationStatus',
                }
              },
            },
            rules: [
              (v) => {
                return !!v || 'Status is required'
              },
            ],
          },
          createdDate: {
            displayOrder: 9,
            caption: 'Created Date',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'date',
            hidden: false,
            inlineEdit: true,
            newForm: false,
            editForm: false,
          },
          FirstName: {
            form: {
              caption: 'First Name *',
              displayOrder: 1,
            },
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            cssClasses: 'col-6 col-md-6',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            rules: [
              (v) => {
                return !!v || 'First Name is required'
              },
            ],
          },
          LastName: {
            form: {
              caption: 'Last Name *',
              displayOrder: 2,
            },
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            cssClasses: 'col-6 col-md-6',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            rules: [
              (v) => {
                return !!v || 'Last Name is required'
              },
            ],
          },
          '_CurrentAddress.AddressLine': {
            form: {
              caption: 'Address *',
              displayOrder: 8,
            },
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            cssClasses: 'col-12 col-md-12',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            rules: [
              (v) => {
                return !!v || 'Address is required'
              },
            ],
          },
          '_CurrentAddress.City': {
            form: {
              caption: 'City',
              displayOrder: 9,
            },
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            cssClasses: 'col-12 col-md-12',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
          },
          '_CurrentAddress.State': {
            form: {
              caption: 'State',
              displayOrder: 10,
            },
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            cssClasses: 'col-12 col-md-12',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
          },
          '_CurrentAddress.PostalCode': {
            form: {
              caption: 'Zip',
              displayOrder: 11,
            },
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            cssClasses: 'col-12 col-md-12',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
          },
          '_CurrentAddress.Country': {
            form: {
              caption: 'Country',
              displayOrder: 12,
            },
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            cssClasses: 'col-12 col-md-12',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
          },
        },
        template: {
          name: 'event-grid',
          context: {
            basePath: '/registration',
          },
        },
        dataSource: {
          query: registrationList,
          defaultSort: 'createdDate DESC',
          type: 'graphql',
          model: 'Registration',
          filter(ctx) {
            return {
              where: {
                EventId: ctx.$route.params.id,
              },
            }
          },
          mutation(ctx) {
            return {
              new: {
                EventId: ctx.$route.params.id,
              },
              edit: {},
            }
          },
        },
        title: 'eventRegistrations',
        type: 'list',
      },
      eventInvites: {
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
          'getContact.FullName': {
            displayOrder: 2,
            caption: 'Name',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          isRegistered: {
            displayOrder: 3,
            caption: 'Registered',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          'getContact.Email': {
            displayOrder: 4,
            caption: 'Email',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          Sent: {
            displayOrder: 5,
            caption: 'Sent/Bounce',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          Click: {
            displayOrder: 6,
            caption: 'Click',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          Open: {
            displayOrder: 7,
            caption: 'Open',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          Delivered: {
            displayOrder: 8,
            caption: 'Delivered',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          Unsubscribed: {
            displayOrder: 9,
            caption: 'Unsubscribed',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          SpamReport: {
            displayOrder: 10,
            caption: 'Spam',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          createdDate: {
            displayOrder: 11,
            caption: 'Date',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'date',
          },
        },
        template: {
          name: 'eventInvites-grid',
          context: {
            basePath: '/event',
          },
        },
        dataSource: {
          query: eventInvites,
          defaultSort: 'createdDate DESC',
          type: 'graphql',
          model: 'EmailAnalytic',
          filter(ctx) {
            return {
              where: {
                EventId: ctx.$route.params.id,
              },
            }
          },
        },
        title: 'eventInvites',
        type: 'list',
      },
      eventTickets: {
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
          Code: {
            form: {
              caption: 'Title *',
              displayOrder: 1,
            },
            displayOrder: 2,
            caption: 'Title',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            cssClasses: 'col-12 col-md-12',
            hidden: false,
            inlineEdit: false,
            newForm: true,
            editForm: true,
            required: true,
            default: 'General admission',
            rules: [
              (v) => {
                return !!v || 'Title is required'
              },
            ],
          },
          Amount: {
            form: {
              caption: 'Price *',
              displayOrder: 5,
            },
            displayOrder: 4,
            caption: 'Amount',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'number',
            cssClasses: 'col-6 col-md-6',
            hidden: false,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            minimumValue: '1',
            default: 0,
            readonly(value, data) {
              const type = data.Type
              return type === 'Free' || type === ''
            },
            rules: [
              (v) => {
                return !!v || 'Price is required'
              },
              function (value, data) {
                return (
                  /^[0-9]\d*$|^$/.test(value) || 'Price should not be negative'
                )
              },
            ],
          },
          Type: {
            form: {
              caption: 'Type *',
              displayOrder: 4,
            },
            displayOrder: 3,
            caption: 'Type',
            label: 'Ticket Type',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'lookup',
            cssClasses: 'col-6 col-md-6',
            hidden: false,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            default: 'Free',
            dataSource: {
              query: registrationStatusOptions,
              itemText: 'value',
              itemValue: 'key',
              filter(data) {
                return {
                  type: 'TicketType',
                }
              },
            },
            rules: [
              (v) => {
                return !!v || 'Type is required'
              },
            ],
          },
          TicketCount: {
            form: {
              caption: 'Ticket Count',
              displayOrder: 6,
            },
            displayOrder: 5,
            caption: 'Max Qty',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'number',
            cssClasses: 'col-6 col-md-6',
            hidden: false,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            minimumValue: '1',
            rules: [
              (v) => {
                return !!v || 'Total Count is required'
              },
            ],
          },
          Group: {
            form: {
              caption: 'Group Name',
              displayOrder: 7,
            },
            displayOrder: 5,
            caption: 'Group Name',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            cssClasses: 'col-6 col-md-6',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
          },
          Attendee: {
            form: {
              caption: 'Registration Type',
              displayOrder: 8,
            },
            displayOrder: 5,
            caption: 'Registration Type',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'lookup',
            multiple: true,
            cssClasses: 'col-6 col-md-6',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            dataSource: {
              query: registrationType,
              itemText: 'Name',
              itemValue: 'id',
              filter(data) {
                return {
                  EventId: this.$route.params.id,
                }
              },
            },
          },
          DisplayOrder: {
            form: {
              caption: 'Display Order',
              displayOrder: 9,
            },
            displayOrder: 6,
            caption: 'Display Order',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'number',
            cssClasses: 'col-6 col-md-6',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            minimumValue: '1',
            rules: [
              (v) => {
                return !!v || 'Display Order is required'
              },
              function (value, data) {
                return (
                  /^[1-9]\d*$|^$/.test(value) ||
                  'Display Order should not be negative'
                )
              },
            ],
          },
          AvailableCount: {
            displayOrder: 6,
            caption: 'Available Qty',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            cssClasses: 'col-6 col-md-6',
            hidden: false,
            inlineEdit: true,
            newForm: false,
            editForm: false,
          },
          StartDate: {
            form: {
              caption: 'Start Date *',
              displayOrder: 2,
            },
            displayOrder: 7,
            caption: 'Start Date',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'datetime',
            cssClasses: 'col-6 col-md-6',
            hidden: false,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            rules: [
              (v) => {
                return !!v || 'Start is required'
              },
              (v, data) => {
                return (
                  (!!v && data.EndDate > new Date(v)) ||
                  'Start Date should be less than End Date'
                )
              },
            ],
          },
          EndDate: {
            form: {
              caption: 'End Date *',
              displayOrder: 3,
            },
            displayOrder: 8,
            caption: 'End Date',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'datetime',
            cssClasses: 'col-6 col-md-6',
            hidden: false,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            rules: [
              (v) => {
                return !!v || 'EndDate is required'
              },
              (v, data) => {
                return (
                  (!!v && data.StartDate < new Date(v)) ||
                  'EndDate should be greater than StartDate'
                )
              },
            ],
          },
          ValidateQty: {
            form: {
              caption: 'Validate Quantity',
              displayOrder: 10,
            },
            displayOrder: 8,
            caption: 'Validate Quantity',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'checkbox',
            cssClasses: 'col-6 col-md-6',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
          },
          CheckGroupDiscount: {
            form: {
              caption: 'Check Group Discount',
              displayOrder: 11,
            },
            displayOrder: 8,
            caption: 'Check Group Discount',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'checkbox',
            cssClasses: 'col-6 col-md-6',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
          },
        },
        template: {
          name: 'eventTickets-grid',
          context: {
            basePath: '/event',
          },
        },
        dataSource: {
          query: eventTickets,
          defaultSort: 'createdDate DESC',
          type: 'graphql',
          model: 'Ticket',
          filter(ctx) {
            return {
              where: {
                Events: ctx.$route.params.id,
              },
            }
          },
          mutation(ctx) {
            return {
              new: {
                Events: ctx.$route.params.id,
                AvailableCount: ctx.formData.TicketCount,
              },
              edit: {},
            }
          },
        },
        title: 'eventTickets',
        type: 'list',
      },
      eventDiscountCodes: {
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
          codeTitle: {
            form: {
              caption: 'Code *',
              displayOrder: 1,
            },
            displayOrder: 2,
            caption: 'Code',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            cssClasses: 'col-12 col-md-12',
            inlineEdit: true,
            newForm: true,
            editForm: true,
            rules: [
              (v) => {
                return !!v || 'Code is required'
              },
            ],
          },
          maxUsageCount: {
            form: {
              caption: 'Max Usage Count',
              displayOrder: 2,
            },
            displayOrder: 2,
            caption: 'Max Usage Count',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
            type: 'number',
            cssClasses: 'col-6 col-md-6',
            inlineEdit: true,
            newForm: true,
            editForm: true,
            hidden: true,
          },
          minApplicableOrderAmount: {
            form: {
              caption: 'Min Applicable Order Amount',
              displayOrder: 3,
            },
            displayOrder: 2,
            caption: 'Min Applicable Amount',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '220px',
            type: 'number',
            inlineEdit: true,
            newForm: true,
            editForm: true,
            hidden: true,
          },
          offerValue: {
            form: {
              caption: 'Offer Value',
              displayOrder: 4,
            },
            displayOrder: 3,
            caption: 'Amount',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '120px',
            type: 'number',
            cssClasses: 'col-6 col-md-6',
            inlineEdit: true,
            newForm: true,
            editForm: true,
            hidden: false,
            minimumValue: '1',
            rules: [
              (v) => {
                return !!v || 'Offer Value is required'
              },
              function (value, data) {
                return (
                  /^[1-9]\d*$|^$/.test(value) ||
                  'Offer Value should not be negative'
                )
              },
            ],
          },
          validTill: {
            form: {
              caption: 'Valid Till',
              displayOrder: 6,
            },
            displayOrder: 4,
            caption: 'Valid Till',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'datetime',
            cssClasses: 'col-6 col-md-6',
            inlineEdit: true,
            newForm: true,
            editForm: true,
            hidden: false,
          },
          isActive: {
            displayOrder: 5,
            caption: 'Active',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'checkbox',
            inlineEdit: true,
            newForm: false,
            editForm: false,
            hidden: false,
          },
          isPercent: {
            form: {
              caption: 'Is Percent',
              displayOrder: 6,
            },
            displayOrder: 5,
            caption: 'Is Percent',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'checkbox',
            inlineEdit: true,
            newForm: true,
            editForm: true,
            hidden: true,
          },
          maxApplicableAmount: {
            form: {
              caption: 'Max Applicable Amount',
              displayOrder: 7,
            },
            displayOrder: 5,
            caption: 'Max Applicable Amount',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
            type: 'number',
            cssClasses: 'col-6 col-md-6',
            inlineEdit: true,
            newForm: true,
            editForm: true,
            hidden: true,
          },
          description: {
            form: {
              caption: 'Description',
              displayOrder: 8,
            },
            displayOrder: 5,
            caption: 'Description',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
            type: 'richtext',
            hidden: true,
            cssClasses: 'col-12 col-md-12',
            inlineEdit: true,
            newForm: true,
            editForm: true,
          },
        },
        template: {
          name: 'eventDiscountCode-grid',
          context: {
            basePath: '/event',
          },
        },
        dataSource: {
          query: eventDiscountCodes,
          defaultSort: 'createdDate DESC',
          type: 'graphql',
          model: 'OfferCode',
          filter(ctx) {
            return {
              where: {
                EventId: ctx.$route.params.id,
              },
            }
          },
          mutation(ctx) {
            return {
              new: {
                EventId: ctx.$route.params.id,
              },
              edit: {},
            }
          },
        },
        title: 'eventDiscountCodes',
        type: 'list',
      },
      eventRegistrationQuestion: {
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
          Question: {
            displayOrder: 2,
            caption: 'Question',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          ControlType: {
            displayOrder: 3,
            caption: 'Control',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          Options: {
            displayOrder: 4,
            caption: 'Options',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          DisplayOrder: {
            displayOrder: 5,
            caption: 'Display Order',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          TicketName: {
            displayOrder: 6,
            caption: 'Tickets',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
        },
        template: {
          name: 'eventRegistrationQuestion-grid',
          context: {
            basePath: '/event',
          },
        },
        dataSource: {
          type: 'rest',
          getData: (ctx) => getData(`/Events/${ctx.$route.params.id}/Survey`),
        },
        title: 'eventRegistrationQuestion',
        type: 'list',
      },
      eventSession: {
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
          Name: {
            form: {
              caption: 'Name *',
              displayOrder: 1,
            },
            displayOrder: 2,
            caption: 'Name',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            cssClasses: 'col-12 col-md-12',
            hidden: false,
            inlineEdit: true,
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
            displayOrder: 2,
            caption: 'Description',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'richtext',
            cssClasses: 'col-12 col-md-12',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
          },
          StartDate: {
            form: {
              caption: 'Start Date *',
              displayOrder: 3,
            },
            displayOrder: 3,
            caption: 'Start Date',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '220px',
            type: 'datetime',
            cssClasses: 'col-6 col-md-6',
            hidden: false,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            rules: [
              (v) => {
                return !!v || 'Start is required'
              },
              (v, data) => {
                return (
                  (!!v && data.EndDate > new Date(v)) ||
                  'Start Date should be less than End Date'
                )
              },
            ],
          },
          EndDate: {
            form: {
              caption: 'End Date *',
              displayOrder: 4,
            },
            displayOrder: 4,
            caption: 'End Date',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '220px',
            type: 'datetime',
            cssClasses: 'col-6 col-md-6',
            hidden: false,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            rules: [
              (v) => {
                return !!v || 'EndDate is required'
              },
              (v, data) => {
                return (
                  (!!v && data.StartDate < new Date(v)) ||
                  'EndDate should be greater than StartDate'
                )
              },
            ],
          },
          Timezone: {
            form: {
              caption: 'Timezone *',
              displayOrder: 5,
            },
            displayOrder: 5,
            caption: 'Timezone',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'timezone',
            cssClasses: 'col-6 col-md-6',
            hidden: false,
            inlineEdit: true,
            newForm: true,
            editForm: true,
          },
          Type: {
            form: {
              caption: 'Type *',
              displayOrder: 7,
            },
            displayOrder: 6,
            caption: 'Type',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'lookup',
            cssClasses: 'col-6 col-md-6',
            hidden: false,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            dataSource: {
              query: registrationStatusOptions,
              itemText: 'value',
              itemValue: 'key',
              filter(data) {
                return {
                  type: 'SessionType',
                }
              },
            },
            rules: [
              (v) => {
                return !!v || 'Type is required'
              },
            ],
          },
          MySpeaker: {
            form: {
              caption: 'Speaker',
              displayOrder: 8,
            },
            displayOrder: 7,
            caption: 'Speaker',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'lookup',
            cssClasses: 'col-6 col-md-6',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            multiple: true,
            dataSource: {
              type: 'rest',
              itemText: 'FirstName',
              itemValue: 'id',
              getData: (ctx) => {
                const path = `/Events/${ctx.$route.params.id}/EventSpeakers`
                return getLookupData(path)
              },
            },
          },
          Speaker: {
            displayOrder: 7,
            caption: 'Speaker',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            cssClasses: 'col-6 col-md-6',
            hidden: false,
            inlineEdit: true,
            newForm: false,
            editForm: false,
          },
          Location: {
            form: {
              caption: 'Location',
              displayOrder: 6,
            },
            displayOrder: 8,
            caption: 'Location',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            cssClasses: 'col-6 col-md-6',
            hidden: false,
            inlineEdit: true,
            newForm: true,
            editForm: true,
          },
          SessionTicket: {
            displayOrder: 9,
            caption: 'Ticket',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'lookup',
            multiple: true,
            cssClasses: 'col-6 col-md-6',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            dataSource: {
              query: eventTickets,
              itemText: 'Code',
              itemValue: 'id',
              filter(data) {
                return {
                  Events: this.$route.params.id,
                }
              },
            },
            rules: [
              (v) => {
                return !!v || 'Tickets is required'
              },
            ],
          },
          TicketName: {
            displayOrder: 9,
            caption: 'Ticket',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            cssClasses: 'col-6 col-md-6',
            hidden: false,
            inlineEdit: true,
            newForm: false,
            editForm: false,
          },
        },
        template: {
          name: 'eventSession-grid',
          context: {
            basePath: '/event',
          },
        },
        dataSource: {
          query: eventSession,
          defaultSort: 'createdDate DESC',
          type: 'graphql',
          model: 'Session',
          filter(ctx) {
            return {
              where: {
                EventId: ctx.$route.params.id,
              },
            }
          },
          mutation(ctx, data) {
            return {
              new: {
                EventId: ctx.$route.params.id,
              },
              edit: {
                EventId: ctx.$route.params.id,
              },
            }
          },
        },
        title: 'eventSession',
        type: 'list',
      },
      eventSpeakers: {
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
          Title: {
            form: {
              caption: 'Title',
              displayOrder: 5,
            },
            displayOrder: 2,
            caption: 'Title',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            hidden: false,
            inlineEdit: true,
            newForm: true,
            editForm: true,
          },
          FirstName: {
            form: {
              caption: 'First Name *',
              displayOrder: 1,
            },
            displayOrder: 3,
            caption: 'First Name',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            hidden: false,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            rules: [
              (v) => {
                return !!v || 'First Name is required'
              },
            ],
          },
          LastName: {
            form: {
              caption: 'Last Name *',
              displayOrder: 2,
            },
            displayOrder: 4,
            caption: 'Last Name',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            hidden: false,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            rules: [
              (v) => {
                return !!v || 'Last Name is required'
              },
            ],
          },
          Email: {
            form: {
              caption: 'Email *',
              displayOrder: 4,
            },
            displayOrder: 5,
            caption: 'Email',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            hidden: false,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            rules: [
              (v) => {
                return !!v || 'Email is required'
              },
              function (value, data) {
                return /.+@.+\..+/.test(value) || 'E-mail must be valid'
              },
            ],
          },
          Phone: {
            form: {
              caption: 'Phone *',
              displayOrder: 3,
            },
            displayOrder: 6,
            caption: 'Phone',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            hidden: false,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            rules: [
              (v) => {
                return !!v || 'Phone is required'
              },
            ],
          },
          Linkdin: {
            form: {
              caption: 'LinkedIn',
              displayOrder: 7,
            },
            displayOrder: 7,
            caption: 'Linkdin',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            hidden: false,
            inlineEdit: true,
            newForm: true,
            editForm: true,
          },
          Twitter: {
            form: {
              caption: 'Twitter',
              displayOrder: 8,
            },
            displayOrder: 8,
            caption: 'Twitter',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            hidden: false,
            inlineEdit: true,
            newForm: true,
            editForm: true,
          },
          Facebook: {
            form: {
              caption: 'Facebook',
              displayOrder: 6,
            },
            displayOrder: 8,
            caption: 'Facebook',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
          },
          Description: {
            form: {
              caption: 'Description',
              displayOrder: 9,
            },
            cssClasses: 'col-12 col-md-12',
            displayOrder: 8,
            caption: 'Description',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
          },
          MyImage: {
            form: {
              caption: 'Image',
              displayOrder: 10,
            },
            cssClasses: 'col-6 col-md-6',
            displayOrder: 8,
            caption: 'MyImage',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'file',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
          },
        },
        template: {
          name: 'eventSpeakers-grid',
          context: {
            basePath: '/event',
          },
        },
        dataSource: {
          model: 'Speaker',
          type: 'rest',
          getData: (ctx) =>
            getData(`/Events/${ctx.$route.params.id}/EventSpeakers`),
          mutation(ctx) {
            return {
              new: {
                EventId: ctx.$route.params.id,
              },
              edit: {},
            }
          },
        },
        title: 'eventSpeakers',
        type: 'list',
      },
      eventTasks: {
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
          Title: {
            form: {
              caption: 'Enter Title *',
              displayOrder: 1,
            },
            displayOrder: 2,
            caption: 'Title',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            cssClasses: 'col-12 col-md-12',
            hidden: false,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            rules: [
              (v) => {
                return !!v || 'Title is required'
              },
            ],
          },
          Category: {
            form: {
              caption: 'Category *',
              displayOrder: 2,
            },
            displayOrder: 5,
            caption: 'Category',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'lookup',
            cssClasses: 'col-6 col-md-6',
            hidden: false,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            rules: [
              (v) => {
                return !!v || 'Category is required'
              },
            ],
            dataSource: {
              query: registrationStatusOptions,
              itemText: 'value',
              itemValue: 'key',
              filter(data) {
                return {
                  type: 'Event_TaskCategory',
                }
              },
            },
          },
          Status: {
            form: {
              caption: 'Status *',
              displayOrder: 3,
            },
            displayOrder: 3,
            caption: 'Status',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'lookup',
            cssClasses: 'col-6 col-md-6',
            hidden: false,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            readonly(value, data) {
              const category = data.Category
              return (
                category === 'Registration Email' ||
                category === 'Calendar Invite'
              )
            },
            rules: [
              (v) => {
                return !!v || 'Status is required'
              },
            ],
            dataSource: {
              query: registrationStatusOptions,
              itemText: 'value',
              itemValue: 'key',
              filter(data) {
                return {
                  type: 'Event_TaskStatus',
                }
              },
            },
          },
          Action: {
            form: {
              caption: 'Action *',
              displayOrder: 4,
            },
            displayOrder: 4,
            caption: 'Wait For',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'lookup',
            cssClasses: 'col-6 col-md-6',
            hidden: false,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            readonly(value, data) {
              const category = data.Category
              return (
                category === 'Registration Email' ||
                category === 'Calendar Invite'
              )
            },
            visible(value, data) {
              const category = data.Category
              const status = data.Status
              if (
                category === 'Registration Email' ||
                category === 'Calendar Invite'
              ) {
                data.Status = 'Wait for an Action'
                data.Action = 'New Registration'
                return (
                  category === 'Registration Email' ||
                  category === 'Calendar Invite'
                )
              } else {
                return (
                  (category === 'Survey Invite' || category === 'Email') &&
                  status === 'Wait for an Action'
                )
              }
            },
            rules: [
              (v) => {
                return !!v || 'Action is required'
              },
            ],
            dataSource: {
              query: registrationStatusOptions,
              itemText: 'value',
              itemValue: 'key',
              filter(data) {
                return {
                  type: 'Event_TaskAction',
                }
              },
            },
          },
          SurveyId: {
            form: {
              caption: 'Survey List',
              displayOrder: 7,
            },
            cssClasses: 'col-12 col-md-12',
            caption: 'Survey List',
            searchEnable: true,
            sortEnable: true,
            type: 'string',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            rules: [
              (v) => {
                return !!v || 'Survey is required'
              },
            ],
            visible(value, data) {
              const category = data.Category
              if (category === 'Survey Invite') {
                return category === 'Survey Invite'
              }
            },
          },
          TemplateId: {
            form: {
              caption: 'Template',
              displayOrder: 8,
            },
            cssClasses: 'col-12 col-md-12',
            caption: 'Template',
            searchEnable: true,
            sortEnable: true,
            type: 'lookup',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            rules: [
              (v) => {
                return !!v || 'Template is required'
              },
            ],
            visible(value, data) {
              const category = data.Category
              return category === 'Email'
            },
            dataSource: {
              query: marketingTemplates,
              itemText: 'Name',
              itemValue: 'id',
              filter() {
                return {
                  createdBy: this.$auth.$state.user.data.email,
                }
              },
            },
          },
          DueDate: {
            form: {
              caption: 'DueDate *',
              displayOrder: 4,
            },
            displayOrder: 7,
            caption: 'Due Date',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'datetime',
            hidden: false,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            rules: [
              (v) => {
                return !!v || 'DueDate is required'
              },
            ],
            visible(value, data) {
              const category = data.Category
              const status = data.Status
              return (
                (category === 'Survey Invite' || category === 'Email') &&
                status === 'Schedule'
              )
            },
          },
          Timezone: {
            form: {
              caption: 'Timezone *',
              displayOrder: 6,
            },
            displayOrder: 7,
            caption: 'Timezone',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'timezone',
            hidden: false,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            rules: [
              (v) => {
                return !!v || 'Timezone is required'
              },
            ],
            visible(value, data) {
              const category = data.Category
              const status = data.Status
              return (
                (category === 'Survey Invite' || category === 'Email') &&
                (status === 'Schedule' || status === 'Wait for an Action')
              )
            },
          },
          Day: {
            form: {
              caption: 'Day',
              displayOrder: 4,
            },
            displayOrder: 6,
            caption: 'Day',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'lookup',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            visible(value, data) {
              const category = data.Category
              const status = data.Status
              return (
                (category === 'Survey Invite' || category === 'Email') &&
                status === 'Wait for an Action'
              )
            },
            dataSource: {
              query: registrationStatusOptions,
              itemText: 'value',
              itemValue: 'key',
              filter(data) {
                return {
                  type: 'Event_AvailableDay',
                }
              },
            },
          },
          Time: {
            form: {
              caption: 'Time',
              displayOrder: 5,
            },
            displayOrder: 6,
            caption: 'Time',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'lookup',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            visible(value, data) {
              const category = data.Category
              const status = data.Status
              return (
                (category === 'Survey Invite' || category === 'Email') &&
                status === 'Wait for an Action'
              )
            },
            dataSource: {
              query: registrationStatusOptions,
              itemText: 'value',
              itemValue: 'key',
              filter(data) {
                return {
                  type: 'AvailableHour',
                }
              },
            },
          },
        },
        template: {
          name: 'eventTask-grid',
          context: {
            basePath: '/event',
          },
        },
        dataSource: {
          query: eventTasks,
          defaultSort: 'createdDate DESC',
          type: 'graphql',
          model: 'CRMActivity',
          filter(ctx) {
            return {
              where: {
                EventId: ctx.$route.params.id,
              },
            }
          },
        },
        title: 'eventTasks',
        type: 'list',
      },
      eventRegistrationForm: {
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
          Label: {
            displayOrder: 2,
            caption: 'Label',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          ControlType: {
            displayOrder: 3,
            caption: 'Type',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          DisplayOrder: {
            displayOrder: 4,
            caption: 'Display Order',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          isShowField: {
            displayOrder: 5,
            caption: 'Buyer',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          isAttendeeField: {
            displayOrder: 6,
            caption: 'Attendee',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          isRequired: {
            displayOrder: 7,
            caption: 'Required',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
        },
        template: {
          name: 'eventRegistrationForm-grid',
          context: {
            basePath: '/event',
          },
        },
        dataSource: {
          type: 'rest',
          getData: (ctx) =>
            getData(`/Events/${ctx.$route.params.id}/RegistrationForm`),
        },
        title: 'eventRegistrationForm',
        type: 'list',
      },
      eventRecurringSession: {
        ui: {
          hideDefaultHeader: false,
          hideDefaultFooter: false,
          showExpand: false,
          singleExpand: false,
          showSelect: true,
          hideFilter: false,
          hideSearch: true,
        },
        hidden: true,
        fields: {
          Name: {
            displayOrder: 1,
            caption: 'Name',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          ScheduledType: {
            displayOrder: 2,
            caption: 'ScheduledType',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '250px',
            type: 'string',
          },
          StartTime: {
            displayOrder: 3,
            caption: 'StartTime',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
            type: 'string',
          },
          EndTime: {
            displayOrder: 4,
            caption: 'EndTime',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
            type: 'string',
          },
          Type: {
            displayOrder: 4,
            caption: 'Type',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '100px',
            type: 'string',
          },
          SeatReservation: {
            displayOrder: 6,
            caption: 'Seat Reservation',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          TicketName: {
            displayOrder: 7,
            caption: 'Tickets',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '200px',
            type: 'string',
          },
          isActive: {
            displayOrder: 8,
            caption: 'Active',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '100px',
            type: 'string',
          },
        },
        template: {
          name: 'recurring-grid',
          context: {
            basePath: '/event',
          },
        },
        dataSource: {
          query: eventRecurringSession,
          defaultSort: 'createdDate DESC',
          type: 'graphql',
          model: 'Session',
          filter(ctx) {
            return {
              where: {
                EventId: ctx.$route.params.id,
              },
            }
          },
        },
        title: 'Recurring Session',
        type: 'list',
      },
    },
  },

  Registrations: {
    dataSource: {
      Type: 'List',
      URL: 'Registration',
    },
    general: {
      caption: 'Registrations',
      name: 'Registration',
    },
    views: {
      Registrations: {
        ui: {
          hideDefaultHeader: false,
          hideDefaultFooter: false,
          showExpand: false,
          singleExpand: false,
          showSelect: true,
          hideFilter: true,
          hideSearch: false,
        },
        default: false,
        fields: {
          FirstName: {
            displayOrder: 1,
            caption: 'First Name',
            form: {
              caption: 'First Name*',
              displayOrder: 15,
            },
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
          },
          LastName: {
            displayOrder: 1,
            caption: 'Last Name',
            form: {
              caption: 'Last Name*',
              displayOrder: 14,
            },
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
          },
          PaymentMethod: {
            displayOrder: 10,
            caption: 'PaymentMethod',
            form: {
              caption: 'PaymentMethod*',
              displayOrder: 13,
            },
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            inlineEdit: false,
            newForm: false,
            editForm: false,
          },
          CompanyName: {
            displayOrder: 4,
            caption: 'Organization',
            form: {
              caption: 'Organization*',
              displayOrder: 12,
            },
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            hidden: false,
            inlineEdit: true,
            newForm: true,
            editForm: true,
          },
          Phone: {
            displayOrder: 5,
            caption: 'Phone',
            form: {
              caption: 'Phone*',
              displayOrder: 11,
            },
            searchEnable: true,
            sortEnable: true,
            columnWidth: '100px',
            type: 'string',
            hidden: false,
            inlineEdit: true,
            newForm: true,
            editForm: true,
          },
          Email: {
            displayOrder: 3,
            caption: 'Email',
            form: {
              caption: 'Email*',
              displayOrder: 10,
            },
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
            type: 'string',
            hidden: false,
            inlineEdit: true,
            newForm: true,
            editForm: true,
          },
          '_CurrentAddress.AddressLine': {
            caption: 'Address',
            searchEnable: true,
            form: {
              caption: 'Address*',
              displayOrder: 9,
            },
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            inlineEdit: false,
            newForm: true,
            editForm: true,
            hidden: true,
          },
          '_CurrentAddress.City': {
            caption: 'City',
            searchEnable: true,
            form: {
              caption: 'City*',
              displayOrder: 8,
            },
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            inlineEdit: false,
            newForm: true,
            editForm: true,
            hidden: true,
          },
          '_CurrentAddress.State': {
            caption: 'State',
            form: {
              caption: 'State*',
              displayOrder: 7,
            },
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            inlineEdit: false,
            newForm: true,
            editForm: true,
            hidden: true,
          },
          '_CurrentAddress.PostalCode': {
            caption: 'Zip',
            form: {
              caption: 'PostalCode *',
              displayOrder: 6,
            },
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            inlineEdit: false,
            newForm: true,
            editForm: true,
            hidden: true,
          },
          '_CurrentAddress.Country': {
            caption: 'Country',
            form: {
              caption: 'Country *',
              displayOrder: 5,
            },
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            inlineEdit: false,
            newForm: true,
            editForm: true,
            hidden: true,
          },
          EventName: {
            displayOrder: 6,
            caption: 'Event Name',
            form: {
              caption: 'EventName *',
              displayOrder: 4,
            },
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
            type: 'lookup',
            cssClasses: 'col-12 col-md-12',
            hidden: false,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            dataSource: {
              query: eventNames,
              itemText: 'Title',
              itemValue: 'id',
              filter(ctx) {
                return {
                  Status: `Open for registration`,
                }
              },
            },
          },
          Status: {
            displayOrder: 9,
            caption: 'Status',
            form: {
              caption: 'Status*',
              displayOrder: 3,
            },
            searchEnable: true,
            sortEnable: true,
            columnWidth: '100px',
            type: 'lookup',
            hidden: false,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            dataSource: {
              type: 'rest',
              itemText: 'value',
              itemValue: 'key',
              getData: (ctx) => {
                let filter = {
                  where: {
                    type: 'RegistrationStatus',
                  },
                }
                filter = JSON.stringify(filter)
                const path = `/GeneralConfigurations?filter=${filter}`
                return getLookupData(path)
              },
            },
          },
          RegistrationId: {
            displayOrder: 6,
            caption: 'RegistrationId',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
            type: 'string',
            inlineEdit: false,
            newForm: false,
            editForm: false,
          },
          createdDate: {
            displayOrder: 11,
            caption: 'createdDate',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'date',
            inlineEdit: false,
            newForm: false,
            editForm: false,
          },
          TicketQuantity: {
            displayOrder: 9,
            caption: 'Attendees',
            form: {
              caption: 'Attendees*',
              displayOrder: -1,
            },
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
            type: 'number',
          },
          FullName: {
            displayOrder: 2,
            caption: 'Full Name',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            inlineEdit: false,
            newForm: false,
            editForm: false,
          },
          TotalAmount: {
            displayOrder: 8,
            caption: 'TotalAmount',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'number',
            inlineEdit: false,
            newForm: false,
            editForm: false,
          },
          action: {
            displayOrder: 11,
            caption: 'Action',
            searchEnable: false,
            sortEnable: false,
            columnWidth: '130px',
            type: 'action',
            inlineEdit: false,
            newForm: false,
            editForm: false,
            condtion: ({ item, items, index }) => {
              return true
            },
          },
          TicketId: {
            caption: 'Tickets',
            searchEnable: true,
            form: {
              caption: 'Tickets*',
              displayOrder: 1,
            },
            sortEnable: true,
            columnWidth: '150px',
            type: 'lookup',
            inlineEdit: false,
            newForm: true,
            editForm: true,
            hidden: true,
            dataSource: {
              query: eventTickets,
              itemText: 'Code',
              itemValue: 'id',
            },
          },
        },
        template: {
          name: 'registration-grid',
          context: {
            basePath: '/registration',
          },
        },
        dataSource: {
          query: registrationList,
          defaultSort: 'createdDate DESC',
          type: 'graphql',
          model: 'Registration',
        },
        title: 'Registrations',
        type: 'list',
      },
      'Abandoned Registrations': {
        ui: {
          hideDefaultHeader: false,
          hideDefaultFooter: false,
          showExpand: false,
          singleExpand: false,
          showSelect: true,
          hideFilter: false,
          hideSearch: true,
        },
        fields: {
          EventName: {
            displayOrder: 6,
            caption: 'EventName',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
            type: 'string',
            cssClasses: 'col-12 col-md-12',
          },
          PaymentMethod: {
            displayOrder: 10,
            caption: 'PaymentMethod',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          CompanyName: {
            displayOrder: 4,
            caption: 'Organization',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'richtext',
          },
          Phone: {
            displayOrder: 5,
            caption: 'Phone',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '100px',
            type: 'string',
          },
          Status: {
            displayOrder: 9,
            caption: 'Status',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '100px',
            type: 'lookup',
            dataSource: {
              query: registrationStatusOptions,
              itemText: 'value',
              itemValue: 'key',
              filter(data) {
                return {
                  type: data.EventName,
                }
              },
            },
          },
          RegistrationId: {
            displayOrder: 6,
            caption: 'RegistrationId',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
            type: 'string',
            inlineEdit: false,
            newForm: false,
            editForm: false,
          },
          createdDate: {
            displayOrder: 11,
            caption: 'createdDate',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'date',
            inlineEdit: false,
            newForm: true,
            editForm: false,
          },
          TicketQuantity: {
            displayOrder: 9,
            caption: 'Attendees',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
            type: 'number',
          },
          FullName: {
            displayOrder: 2,
            caption: 'Full Name',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            inlineEdit: false,
            newForm: false,
            editForm: false,
          },
          TotalAmount: {
            displayOrder: 8,
            caption: 'TotalAmount',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'number',
          },
          Email: {
            displayOrder: 3,
            caption: 'Email',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
            type: 'string',
            readonly(value, data) {
              const firstName = data.FirstName
              return firstName && firstName.length <= 5
            },
            rules: [
              (v) => {
                return !!v || 'E-mail is required'
              },
              function (value, data) {
                return /.+@.+\..+/.test(value) || 'E-mail must be valid'
              },
            ],
          },
          action: {
            displayOrder: 11,
            caption: 'Action',
            searchEnable: false,
            sortEnable: false,
            columnWidth: '130px',
            type: 'action',
            inlineEdit: false,
            newForm: false,
            editForm: false,
            condtion: ({ item, items, index }) => {
              return true
            },
          },
          FirstName: {
            displayOrder: 2,
            caption: 'First Name',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: false,
            rules: [
              (v) => {
                return !!v || 'FirstName is required'
              },
              (v) => {
                return (
                  (v && v.length <= 10) ||
                  'Name must be less than 10 characters'
                )
              },
            ],
          },
        },
        template: {
          name: 'registration-grid',
          context: {
            basePath: '/registration',
          },
        },
        dataSource: {
          query: registrationList,
          defaultSort: 'createdDate DESC',
          type: 'graphql',
          model: 'Registration',
          filter: {
            where: { Status: 'Failed' },
          },
        },
        title: 'Abandoned Registrations',
        type: 'list',
      },
      registrationSessions: {
        ui: {
          hideDefaultHeader: false,
          hideDefaultFooter: false,
          showExpand: false,
          singleExpand: false,
          showSelect: true,
          hideFilter: false,
          hideSearch: true,
        },
        hidden: true,
        fields: {
          Name: {
            displayOrder: 1,
            caption: 'Name',
            searchEnable: false,
            sortEnable: false,
            columnWidth: '150px',
            type: 'string',
          },
          StartTime: {
            displayOrder: 2,
            caption: 'Start Time',
            searchEnable: false,
            sortEnable: false,
            columnWidth: '130px',
            type: 'string',
          },
          EndTime: {
            displayOrder: 3,
            caption: 'End Time',
            searchEnable: false,
            sortEnable: false,
            columnWidth: '130px',
            type: 'string',
          },
          StartDate: {
            displayOrder: 4,
            caption: 'Start Date',
            searchEnable: false,
            sortEnable: false,
            columnWidth: '130px',
            type: 'datetime',
          },
          EndDate: {
            displayOrder: 5,
            caption: 'End Date',
            searchEnable: false,
            sortEnable: false,
            columnWidth: '130px',
            type: 'datetime',
          },
          Type: {
            displayOrder: 6,
            caption: 'Type',
            searchEnable: false,
            sortEnable: false,
            columnWidth: '100px',
            type: 'string',
          },
          Location: {
            displayOrder: 7,
            caption: 'Location',
            searchEnable: false,
            sortEnable: false,
            columnWidth: '180px',
            type: 'string',
          },
        },
        template: {
          name: 'registrationSession-grid',
          context: {
            basePath: '/registration',
          },
        },
        dataSource: {
          type: 'rest',
          getData: (ctx) =>
            getData(`/Registrations/${ctx.$route.params.id}/SessionListId`),
        },
        title: 'Sessions',
        type: 'list',
      },
      registrationAttendees: {
        ui: {
          hideDefaultHeader: false,
          hideDefaultFooter: false,
          showExpand: false,
          singleExpand: false,
          showSelect: true,
          hideFilter: false,
          hideSearch: true,
        },
        hidden: true,
        fields: {
          FullName: {
            displayOrder: 2,
            caption: 'Full Name',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            hidden: false,
            inlineEdit: true,
            newForm: false,
            editForm: false,
          },
          FirstName: {
            form: {
              caption: 'First Name *',
              displayOrder: 1,
            },
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            cssClasses: 'col-6 col-md-6',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            rules: [
              (v) => {
                return !!v || 'First Name is required'
              },
            ],
          },
          LastName: {
            form: {
              caption: 'Last Name *',
              displayOrder: 2,
            },
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            cssClasses: 'col-6 col-md-6',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            rules: [
              (v) => {
                return !!v || 'Last Name is required'
              },
            ],
          },
          Phone: {
            form: {
              caption: 'Phone *',
              displayOrder: 3,
            },
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            cssClasses: 'col-6 col-md-6',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            rules: [
              (v) => {
                return !!v || 'Phone is required'
              },
              function (value, data) {
                return /^[0-9]\d*$|^$/.test(value) || 'Number must be valid'
              },
            ],
          },
          Email: {
            displayOrder: 3,
            caption: 'Email',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            form: {
              caption: 'Email *',
              displayOrder: 4,
            },
            cssClasses: 'col-6 col-md-6',
            hidden: false,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            rules: [
              (v) => {
                return !!v || 'Email is required'
              },
              function (value, data) {
                return /.+@.+\..+/.test(value) || 'E-mail must be valid'
              },
            ],
          },
          'attendeeTicket.Code': {
            displayOrder: 4,
            caption: 'Ticket',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            hidden: false,
            inlineEdit: true,
            newForm: false,
            editForm: false,
          },
          TicketAmount: {
            displayOrder: 5,
            caption: 'Ticket Amount',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            hidden: false,
            inlineEdit: true,
            newForm: false,
            editForm: false,
          },
          SeatNumber: {
            displayOrder: 6,
            caption: 'Seat Number',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            hidden: false,
            inlineEdit: true,
            newForm: false,
            editForm: false,
          },
          CompanyName: {
            displayOrder: 7,
            caption: 'Organization',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            cssClasses: 'col-6 col-md-6',
            hidden: false,
            inlineEdit: true,
            newForm: false,
            editForm: false,
          },
          CheckIn: {
            displayOrder: 8,
            caption: 'Check In',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '250px',
            type: 'string',
            hidden: false,
            inlineEdit: true,
            newForm: false,
            editForm: false,
          },
          createdDate: {
            displayOrder: 9,
            caption: 'Created Date',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'date',
            hidden: false,
            inlineEdit: true,
            newForm: false,
            editForm: false,
          },
          '_CurrentAddress.AddressLine': {
            form: {
              caption: 'Address',
              displayOrder: 5,
            },
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            cssClasses: 'col-6 col-md-6',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
          },
          '_CurrentAddress.City': {
            form: {
              caption: 'City',
              displayOrder: 6,
            },
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            cssClasses: 'col-6 col-md-6',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
          },
          '_CurrentAddress.State': {
            form: {
              caption: 'State',
              displayOrder: 7,
            },
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            cssClasses: 'col-6 col-md-6',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
          },
          '_CurrentAddress.PostalCode': {
            form: {
              caption: 'Zip',
              displayOrder: 8,
            },
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            cssClasses: 'col-6 col-md-6',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
          },
          '_CurrentAddress.Country': {
            form: {
              caption: 'Country',
              displayOrder: 9,
            },
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
            cssClasses: 'col-6 col-md-6',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
          },
          TicketId: {
            form: {
              caption: 'Tickets *',
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
              query: eventTickets,
              itemText: 'Code',
              itemValue: 'id',
              filter(ctx, data) {
                debugger
                return {
                  Events: this.$route.params.id,
                }
              },
            },
          },
          categoryId: {
            form: {
              caption: 'Registration Type',
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
              query: registrationType,
              itemText: 'Name',
              itemValue: 'id',
              filter(data) {
                return {
                  EventId: this.$route.params.id,
                }
              },
            },
          },
        },
        template: {
          name: 'eventAttendees-grid',
          context: {
            basePath: '/registration',
          },
        },
        dataSource: {
          query: eventAttendees,
          defaultSort: 'createdDate DESC',
          type: 'graphql',
          model: 'Attendee',
          filter(ctx) {
            return {
              where: {
                RegistrationId: ctx.$route.params.id,
              },
            }
          },
          mutation(ctx, data) {
            return {
              new: {
                RegistrationId: ctx.$route.params.id,
              },
              edit: {},
            }
          },
        },
        title: 'Registrations',
        type: 'list',
      },
      registrationEmails: {
        ui: {
          hideDefaultHeader: false,
          hideDefaultFooter: false,
          showExpand: false,
          singleExpand: false,
          showSelect: true,
          hideFilter: false,
          hideSearch: true,
        },
        hidden: true,
        fields: {
          Title: {
            displayOrder: 1,
            caption: 'Title',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          Status: {
            displayOrder: 2,
            caption: 'Status',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
            type: 'string',
          },
          Action: {
            displayOrder: 3,
            caption: 'Wait For',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
            type: 'string',
          },
          Category: {
            displayOrder: 4,
            caption: 'Category',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
            type: 'string',
          },
          TemplateName: {
            displayOrder: 8,
            caption: 'TemplateName',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          createdBy: {
            displayOrder: 7,
            caption: 'createdBy',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
            type: 'string',
          },
          createdDate: {
            displayOrder: 6,
            caption: 'createdDate',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
            type: 'date',
          },
          DueDate: {
            displayOrder: 5,
            caption: 'DueDate',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
            type: 'datetime',
          },
        },
        template: {
          name: 'registrationSession-grid',
          context: {
            basePath: '/registration',
          },
        },
        dataSource: {
          query: eventTasks,
          defaultSort: 'createdDate DESC',
          type: 'graphql',
          model: 'CRMActivity',
          filter(ctx) {
            return {
              where: {
                Registrations: ctx.$route.params.id,
              },
            }
          },
        },
        title: 'Emails',
        type: 'list',
      },
    },
  },

  DiscountCodes: {
    actions: {
      'Embeded Actions': '',
      'General Actions': ['Create Registration'],
      'Selected Item Action': [],
    },
    child: {},
    dataSource: {
      FormID: 'EventsAdvSearch',
      'Key Field': '',
      'Parent key field': '',
      Type: 'List',
      URL: 'Offercode',
    },
    general: {
      caption: 'OfferCodes',
      name: 'OfferCode',
    },
    permissions: {
      Groups: '',
    },
    ui: {
      MobileViewTemplate: {
        isActive: true,
        templateName: 'Event_Registation_Mobile',
      },
      TemplateActions: {},
      Checkbox: 'True',
      'Card View Template': 'VisitingCard0',
      Width: '50%',
      Height: '',
      TemplateHelpers: {},
      'Display Order': '',
      'Map View Template': '',
      'List View Template': '',
      'Detail View': 'tab',
      Column: '',
      'Tile View': 'now',
      'App Type': 'View',
      Templates: {
        VisitingCard0: 'Registrations_Card_View',
        Status:
          '<div title="{{Status}}"><style>.reg-status {\n                  font-size: 10px;\n                            display: inline-block;\n                            color: #fff;\n                            margin-right: 5px;\n                            margin-bottom: 0px;\n                            padding: 3px 10px !important;\n                            border-radius: 20px !important;\n                            text-transform: capitalize;\n                        }\n                      .reg-success {\n                                      background-color: #0cb14b;\n                    }\n                      .reg-fail {\n                                      background-color: #f25955;\n                    }\n                      .reg-refund {\n                                      background-color: #3fa5ff;\n                    }\n                    .reg-parefund {\n                                      background-color: #b9b9b9;\n                    }\n                      .reg-parrefund {\n                                      background-color: #f4b400;\n                    }</style><div class="reg-status {{getStatusColor Status}}"> {{getCapitalResult Status}} </div></div>',
        SyncStatus:
          '<div><i class="{{ShowSyncField SFRegistrationId}}" style="{{getColor SFRegistrationId}}" onclick="invokeAction(\'changeSyncStatus\',this)" node={{node.id}}> </i></div>',
        CheckIn:
          '<style>\n    .checkin-btn {\ncolor: #fff;\npadding: 3px 10px !important;\n    background-color: #3fa5ff !important;;\nfont-size: 12px;\nborder-radius: 2px;\ncursor: pointer;\n}\n.check-label {\n        color: #1a73e8;\nfont-size: 13px;\n}\n</style>\n{{#ifStatus Status}}\n<div title="CheckIn">\n    {{#if CheckIn}}<span class="check-label">\n        <i class="fa fa-check" style="color: #1a73e8;margin-top:3px;" node={{node.id}}> </i>Checked in </span>\n    <span class="check-label">{{date_diff CheckIn}}</span>\n    {{else}}\n    <span onclick="invokeAction(\'CheckIn\',this)" class="checkin-btn">Check in</span>\n    {{/if}}\n</div>\n{{else}} <div style="height: 100%;" title=""></div>{{/ifStatus}}',
        FullName:
          '<div onclick="invokeAction(\'goToDetails\', this)" data-action="edit" data-bind="ID={{id}}" style="cursor: pointer;color: #1a73e8;"> {{FullName}} </div>',
      },
      decorator: {
        Attachment: '',
        LinkedinURL: '',
      },
    },
    views: {
      'Discount Codes': {
        default: true,
        defaultSort: 'createdDate DESC',
        fields: {
          currentUsageCount: {
            displayOrder: 9,
            caption: 'Current Usage Count',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '220px',
            type: 'number',
            inlineEdit: false,
            newForm: false,
            editForm: false,
          },
          codeTitle: {
            displayOrder: 1,
            caption: 'Code',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
            type: 'string',
            cssClasses: 'col-12 col-md-12',
            inlineEdit: true,
            newForm: true,
            editForm: true,
          },
          Description: {
            displayOrder: 2,
            caption: 'Description',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
            type: 'richtext',
            hidden: true,
            cssClasses: 'col-12 col-md-12',
            inlineEdit: true,
            newForm: true,
            editForm: true,
          },
          isActive: {
            displayOrder: 4,
            caption: 'Active',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '120px',
            type: 'checkbox',
            cssClasses: 'col-6 col-md-6',
            inlineEdit: true,
            newForm: true,
            editForm: true,
          },
          isPercent: {
            displayOrder: 3,
            caption: 'Percent',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
            type: 'checkbox',
            cssClasses: 'col-6 col-md-6',
            inlineEdit: true,
            newForm: true,
            editForm: true,
          },
          validTill: {
            displayOrder: 7,
            caption: 'Valid Till',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
            type: 'datetime',
            cssClasses: 'col-6 col-md-6',
            inlineEdit: true,
            newForm: true,
            editForm: true,
          },
          maxApplicableAmount: {
            displayOrder: 8,
            caption: 'Max Applicable Amount',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
            type: 'number',
            cssClasses: 'col-6 col-md-6',
            inlineEdit: true,
            newForm: true,
            editForm: true,
            hidden: true,
          },
          maxUsageCount: {
            displayOrder: 8,
            caption: 'Max Usage Count',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
            type: 'number',
            cssClasses: 'col-6 col-md-6',
            inlineEdit: true,
            newForm: true,
            editForm: true,
          },
          offerValue: {
            displayOrder: 5,
            caption: 'Offer Value',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
            type: 'number',
          },
          minApplicableOrderAmount: {
            displayOrder: 6,
            caption: 'Min Applicable Amount',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '220px',
            type: 'number',
          },
          createdDate: {
            displayOrder: 10,
            caption: 'Created Date',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '250px',
            type: 'date',
            cssClasses: 'col-12 col-md-12',
            inlineEdit: false,
            newForm: false,
            editForm: false,
          },
          EventId: {
            caption: 'Event',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
            type: 'lookup',
            cssClasses: 'col-6 col-md-6',
            hidden: true,
            inlineEdit: true,
            newForm: true,
            editForm: true,
            dataSource: {
              query: eventNames,
              defaultSort: 'createdDate DESC',
              type: 'graphql',
              model: 'Event',
              itemText: 'Title',
              itemValue: 'id',
              filter(data) {
                return {
                  Status: `Open for registration`,
                }
              },
            },
          },
        },
        template: {
          name: 'discount-grid',
          context: {
            basePath: '/discountcodes',
          },
        },
        dataSource: {
          query: discountCodes,
          model: 'OfferCode',
          filter: {
            limit: '10',
            order: 'createdDate DESC',
            skip: '0',
            where: {},
          },
          defaultSort: 'createdDate DESC',
          type: 'graphql',
        },
        ui: {
          hideDefaultHeader: false,
          hideDefaultFooter: false,
          showExpand: false,
          singleExpand: false,
          showSelect: true,
          hideFilter: true,
          hideSearch: false,
        },
        title: 'Discount Codes',
        model: 'OfferCode',
      },
      discountMembers: {
        fields: {
          FirstName: {
            displayOrder: 2,
            caption: 'First Name',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '220px',
            type: 'string',
          },
          LastName: {
            displayOrder: 3,
            caption: 'Last Name',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
            type: 'string',
          },
          Email: {
            displayOrder: 4,
            caption: 'Email',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '120px',
            type: 'string',
          },
          BusinessNumber: {
            displayOrder: 5,
            caption: 'Business Number',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
            type: 'string',
          },
          createdDate: {
            displayOrder: 6,
            caption: 'Created Date',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
            type: 'date',
          },
          Action: {
            displayOrder: 7,
            caption: 'Action',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
            type: 'string',
          },
        },
        template: {
          name: 'discount-grid',
          context: {
            basePath: '/discountcodes',
          },
        },
        dataSource: {
          type: 'rest',
          getData: (ctx) =>
            getData(`/OfferCodes/${ctx.$route.params.id}/getMember`),
        },
        ui: {
          hideDefaultHeader: false,
          hideDefaultFooter: false,
          showExpand: false,
          singleExpand: false,
          showSelect: true,
          hideFilter: true,
          hideSearch: false,
        },
        hidden: true,
        title: 'discountMembers',
        type: 'list',
      },
    },
  },

  EventCustomers: {
    dataSource: {
      Type: 'List',
      URL: 'Customer',
    },
    general: {
      caption: 'Members',
      name: 'Customer',
    },
    permissions: {
      Groups: [],
      Type: '',
    },
    views: {
      Members: {
        ui: {
          hideDefaultHeader: false,
          hideDefaultFooter: false,
          showExpand: false,
          singleExpand: false,
          showSelect: true,
          hideFilter: true,
          hideSearch: false,
        },
        fields: {
          FirstName: {
            displayOrder: 2,
            caption: 'FirstName',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          LastName: {
            displayOrder: 3,
            caption: 'LastName',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          Email: {
            displayOrder: 4,
            caption: 'Email',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
            type: 'string',
          },
          BusinessNumber: {
            displayOrder: 5,
            caption: 'BusinessNumber',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
            type: 'string',
          },
          createdDate: {
            displayOrder: 6,
            caption: 'createdDate',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
            type: 'date',
            newForm: false,
            editForm: false,
          },
          Tags: {
            caption: 'Tags',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
            type: 'string',
            hidden: true,
            newForm: true,
            editForm: true,
          },
          '_BillingAddress.AddressLine': {
            caption: 'Address',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
            type: 'string',
            hidden: true,
            newForm: true,
            editForm: true,
          },
          '_BillingAddress.City': {
            caption: 'City',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
            type: 'string',
            hidden: true,
            newForm: true,
            editForm: true,
          },
          '_BillingAddress.State': {
            caption: 'State',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
            type: 'string',
            hidden: true,
            newForm: true,
            editForm: true,
          },
          '_BillingAddress.PostalCode': {
            caption: 'Zip',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
            type: 'string',
            hidden: true,
            newForm: true,
            editForm: true,
          },
          '_BillingAddress.Country': {
            caption: 'Country',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
            type: 'string',
            hidden: true,
            newForm: true,
            editForm: true,
          },
          Description: {
            caption: 'Description',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
            type: 'string',
            hidden: true,
            newForm: true,
            editForm: true,
            cssClasses: 'col-12 col-md-12',
          },
        },
        template: {
          name: '',
          context: {
            basePath: '/contacts',
          },
        },
        dataSource: {
          query: memberList,
          filter: {
            limit: '10',
            order: 'createdDate DESC',
            skip: '0',
            where: {},
          },
          type: 'graphql',
          model: 'Customer',
          defaultSort: 'createdDate DESC',
        },
        title: 'Members',
        defaultSort: 'createdDate DESC',
      },
    },
  },

  Contacts: {
    dataSouce: {
      Type: 'List',
      URL: 'Contact',
    },
    general: {
      caption: 'Contacts',
      name: 'Contact',
    },
    permissions: {
      groups: '',
    },
    ui: {
      checkbox: true,
      'Card View Template': '',
      width: '',
      height: '',
      TemplateHelpers: {},
      'Display Order': '',
      'Map View Template': '',
      'List View Template': '',
      Column: '',
      'Tile View': 'now',
      'App Type': 'View',
      Templates: {
        FullName:
          '<div onclick="invokeAction(\'goToDetails\', this)" data-action="edit" data-bind="ID={{id}}" style="cursor: pointer;color: blue;"> {{FullName}} </div>',
      },
      decorator: {
        Attachment: '',
        'Field icon': {
          isActive: 'fa fa-check|fa fa-times',
          isEarning: 'fa fa-check|fa fa-times',
        },
        LinkedinURL: '',
      },
    },
    views: {
      Contacts: {
        ui: {
          hideDefaultHeader: false,
          hideDefaultFooter: false,
          showExpand: false,
          singleExpand: false,
          showSelect: true,
          hideFilter: true,
          hideSearch: false,
        },
        fields: {
          FirstName: {
            caption: 'First Name',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
            type: 'string',
            hidden: true,
            newForm: true,
            editForm: true,
            cssClasses: 'col-12 col-md-12',
          },
          LastName: {
            caption: 'Last Name',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
            type: 'string',
            hidden: true,
            newForm: true,
            editForm: true,
            cssClasses: 'col-12 col-md-12',
          },
          Type: {
            displayOrder: 8,
            caption: 'Type',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
            type: 'lookup',
            newForm: true,
            editForm: true,
            cssClasses: 'col-12 col-md-12',
            dataSource: {
              query: registrationStatusOptions,
              itemText: 'value',
              itemValue: 'key',
              filter(data) {
                return {
                  type: 'CRMContactType',
                }
              },
            },
          },
          Job: {
            displayOrder: 4,
            caption: 'Job Title',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
            type: 'string',
            newForm: true,
            editForm: true,
            cssClasses: 'col-12 col-md-12',
          },
          Department: {
            caption: 'Department',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
            type: 'lookup',
            hidden: true,
            newForm: true,
            editForm: true,
            cssClasses: 'col-12 col-md-12',
            dataSource: {
              query: registrationStatusOptions,
              itemText: 'value',
              itemValue: 'key',
              filter(data) {
                return {
                  type: 'CRMDepartment',
                }
              },
            },
          },
          CellPhone: {
            displayOrder: 7,
            caption: 'Phone',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
            type: 'string',
            newForm: true,
            editForm: true,
            cssClasses: 'col-12 col-md-12',
          },
          Email: {
            displayOrder: 3,
            caption: 'Email',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
            type: 'string',
            newForm: true,
            editForm: true,
            cssClasses: 'col-12 col-md-12',
          },
          FullName: {
            displayOrder: 2,
            caption: 'Full Name',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
            type: 'string',
            hidden: false,
            newForm: false,
            editForm: false,
          },
          Organization: {
            displayOrder: 5,
            caption: 'Organization',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
            type: 'string',
            newForm: false,
            editForm: false,
          },
          Country: {
            displayOrder: 6,
            caption: 'Country',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
            type: 'string',
            newForm: false,
            editForm: false,
          },
          createdDate: {
            displayOrder: 9,
            caption: 'createdDate',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
            type: 'date',
            newForm: false,
            editForm: false,
          },
        },
        template: {
          name: 'link-grid',
          context: {
            basePath: '/contacts',
          },
        },
        dataSource: {
          query: contactList,
          filter: {
            where: {},
          },
          type: 'graphql',
          model: 'Contact',
          defaultSort: 'createdDate DESC',
        },
        title: 'Contacts',
        defaultSort: 'createdDate DESC',
      },
      contactRegistration: {
        ui: {
          hideDefaultHeader: false,
          hideDefaultFooter: false,
          showExpand: false,
          singleExpand: false,
          showSelect: true,
          hideFilter: false,
          hideSearch: true,
        },
        hidden: true,
        fields: {
          FullName: {
            displayOrder: 2,
            caption: 'Name',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          Email: {
            displayOrder: 3,
            caption: 'Email',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
            type: 'string',
          },
          EventName: {
            displayOrder: 4,
            caption: 'Event',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
            type: 'string',
          },
          Phone: {
            displayOrder: 5,
            caption: 'Phone',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '100px',
            type: 'string',
          },
          TotalAmount: {
            displayOrder: 6,
            caption: 'Amount',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '105px',
            type: 'string',
          },
          Status: {
            displayOrder: 7,
            caption: 'Status',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '100px',
            type: 'string',
          },
          createdDate: {
            displayOrder: 8,
            caption: 'Created Date ',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'date',
          },
        },
        template: {
          name: 'link-grid',
          context: {
            basePath: '/contact',
          },
        },
        dataSource: {
          query: registrationList,
          defaultSort: 'createdDate DESC',
          type: 'graphql',
          model: 'Registration',
          filter(ctx) {
            debugger
            return {
              where: {
                Email: ctx.$route.params.id,
              },
            }
          },
        },
        title: 'contactRegistration',
        type: 'list',
      },
      contactInvites: {
        ui: {
          hideDefaultHeader: false,
          hideDefaultFooter: false,
          showExpand: false,
          singleExpand: false,
          showSelect: true,
          hideFilter: false,
          hideSearch: true,
        },
        fields: {
          createdDate: {
            displayOrder: 2,
            caption: 'Date',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
            type: 'date',
          },
          isRegistered: {
            displayOrder: 3,
            caption: 'Registered',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '125px',
            type: 'string',
          },
          'event.Title': {
            displayOrder: 4,
            caption: 'Event',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
            type: 'string',
          },
          'getCRMActivityId.Title': {
            displayOrder: 5,
            caption: 'Campaign Name',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          Sent: {
            displayOrder: 6,
            caption: 'Sent/Bounce',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '135px',
            type: 'string',
          },
          Click: {
            displayOrder: 7,
            caption: 'Click',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '100px',
            type: 'string',
          },
          Open: {
            displayOrder: 8,
            caption: 'Open',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '100px',
            type: 'string',
          },
          Delivered: {
            displayOrder: 9,
            caption: 'Delivered',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          Unsubscribed: {
            displayOrder: 10,
            caption: 'Unsubscribed',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '170px',
            type: 'string',
          },
          SpamReport: {
            displayOrder: 11,
            caption: 'Spam',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '100px',
            type: 'string',
          },
        },
        hidden: true,
        template: {
          name: 'contact-grid',
          context: {
            basePath: '/contact',
          },
        },
        dataSource: {
          query: eventInvites,
          defaultSort: 'createdDate DESC',
          type: 'graphql',
          model: 'EmailAnalytic',
          filter(ctx) {
            return {
              where: {
                ContactId: ctx.$route.params.id,
              },
            }
          },
        },
        title: 'Invites',
        type: 'list',
      },
      contactEmails: {
        ui: {
          hideDefaultHeader: false,
          hideDefaultFooter: false,
          showExpand: false,
          singleExpand: false,
          showSelect: true,
          hideFilter: false,
          hideSearch: true,
        },
        hidden: true,
        fields: {
          Title: {
            displayOrder: 2,
            caption: 'Title',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
            type: 'strig',
          },
          Status: {
            displayOrder: 3,
            caption: 'Status',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '125px',
            type: 'string',
          },
          createdBy: {
            displayOrder: 4,
            caption: 'Created By',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
            type: 'string',
          },
          createdDate: {
            displayOrder: 5,
            caption: 'Created Date',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'date',
          },
          DueDate: {
            displayOrder: 6,
            caption: 'Due Date',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '135px',
            type: 'datetime',
          },
          TemplateName: {
            displayOrder: 7,
            caption: 'Template Name',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '100px',
            type: 'string',
          },
        },
        template: {
          name: 'link-grid',
          context: {
            basePath: '/contact',
          },
        },
        dataSource: {
          query: eventTasks,
          defaultSort: 'createdDate DESC',
          type: 'graphql',
          model: 'CRMActivity',
          filter(ctx) {
            return {
              where: {
                ContactId: ctx.$route.params.id,
              },
            }
          },
        },
        title: 'contactEmails',
        type: 'list',
      },
    },
  },

  users: {
    views: {
      users: {
        ui: {
          hideDefaultHeader: false,
          hideDefaultFooter: false,
          showExpand: false,
          singleExpand: false,
          showSelect: false,
          hideFilter: false,
          hideSearch: true,
        },
        default: true,
        fields: {
          name: {
            displayOrder: 2,
            caption: 'Name',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          id: {
            displayOrder: 3,
            caption: 'Username',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          email: {
            displayOrder: 4,
            caption: 'Email',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
          'rolemappings[0].roleId': {
            displayOrder: 5,
            caption: 'Roles',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
            type: 'string',
          },
        },
        template: {
          context: {
            basePath: '/organization',
          },
        },
        dataSource: {
          type: 'rest',
          getData: (ctx) =>
            getData(
              `/Organizations/${this.$store.state.currentOrg.id}/Users?filter={"include":{"rolemappings":"role"}}`
            ),
        },
        title: 'Users',
        type: 'list',
      },
    },
  },
}
