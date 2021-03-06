<template>
  <v-col class="px-0">
    <v-dialog
      v-model="dialog"
      persistent
      scrollable
      content-class="slide-form-default"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn text small v-bind="attrs" v-on="on" @click="getTickets">
          <v-icon left class="fs-16">fa-pencil</v-icon>Edit Item
        </v-btn>
      </template>
      <v-card>
        <v-card-title
          class="pl-md-10 pl-lg-10 pl-xl-15 pr-1 pb-0 pt-1 d-flex align-start"
        >
          <h2 class="black--text pt-5 pb-3 text-h5">Edit Ticket</h2>
          <v-spacer></v-spacer>
          <div>
            <v-btn icon @click="onClose">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
        </v-card-title>
        <v-card-text class="px-xs-2 px-md-10 px-lg-10 px-xl-15 pt-0">
          <v-form ref="form" v-model="valid" :lazy-validation="lazy">
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="formData.Code"
                  label="Title*"
                  :rules="required"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-form
                ref="dateform"
                v-model="datevalid"
                :lazy-validation="lazy"
                class="px-3 v-data-table__wrapper"
              >
                <v-row>
                  <v-col class="col-12 col-md-6">
                    <v-datetime-picker
                      ref="dateTimeComponent"
                      v-model="formData.StartDate"
                      :label="getDateLabel('StartDate')"
                      :text-field-props="eventStartDateProps"
                      :on-change="changeStartDate()"
                    >
                      <template slot="dateIcon">
                        <v-icon>fas fa-calendar</v-icon>
                      </template>
                      <template slot="timeIcon">
                        <v-icon>fas fa-clock</v-icon>
                      </template>
                    </v-datetime-picker>
                  </v-col>
                  <v-col class="col-12 col-md-6">
                    <v-datetime-picker
                      ref="dateTimeComponent1"
                      v-model="formData.EndDate"
                      :label="getDateLabel('EndDate')"
                      :text-field-props="eventEndDateProps"
                      :on-change="changeEndDate()"
                    >
                      <template slot="dateIcon">
                        <v-icon>fas fa-calendar</v-icon>
                      </template>
                      <template slot="timeIcon">
                        <v-icon>fas fa-clock</v-icon>
                      </template>
                    </v-datetime-picker>
                  </v-col>
                </v-row>
              </v-form>
              <v-col class="col-12 col-md-6">
                <v-select
                  v-model="formData.Type"
                  :items="typeDropDown"
                  label="Type*"
                  :rules="required"
                  outlined
                  dense
                  @change="getType"
                ></v-select>
              </v-col>
              <v-col class="col-12 col-md-6">
                <v-text-field
                  v-model="Amount"
                  :label="getCurrencyLabel()"
                  type="number"
                  :disabled="formData.Type === 'Free'"
                  min="formData.Type === 'Free' ? 0 : 1"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col class="col-12 col-md-6">
                <v-text-field
                  v-model="formData.TicketCount"
                  label="Ticket Count"
                  type="number"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col class="col-12 col-md-6">
                <v-text-field
                  v-model="formData.Group"
                  label="Group Name"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col class="col-12 col-md-6">
                <v-select
                  v-model="registrationType"
                  :items="registrationTypeDropdown"
                  label="Registration Type"
                  multiple
                  outlined
                  chips
                  dense
                  small-chips
                  persistent-hint
                ></v-select>
              </v-col>
              <v-col class="col-12 col-md-6">
                <v-text-field
                  v-model="formData.DisplayOrder"
                  label="Display Order"
                  type="number"
                  min="1"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col class="col-12 col-md-6">
                <v-checkbox
                  v-model="formData.ValidateQty"
                  label="Validate Quantity"
                  class="ma-0"
                  dense
                ></v-checkbox>
              </v-col>
              <v-col class="col-12 col-md-6">
                <v-checkbox
                  v-model="formData.CheckGroupDiscount"
                  label=" Check Group Discount"
                  class="ma-0"
                  dense
                ></v-checkbox>
              </v-col>
              <v-col class="col-12 col-md-6">
                <v-select
                  v-model="eventStatus"
                  :items="eventStatusDropDown"
                  label="Status"
                  persistent-hint
                  dense
                  outlined
                ></v-select>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions
          class="px-xs-3 px-md-10 px-lg-10 px-xl-15 px-xs-10 pl-xs-10"
        >
          <v-btn
            color="primary"
            depressed
            :disabled="
              !datevalid ||
              !valid ||
              (formData.Type !== 'Free' && Amount < 1) ||
              formData.Code === ''
            "
            @click.native="onSave"
            >Save</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-col>
</template>

<script>
import gql from 'graphql-tag'
import generalconfiguration from '~/config/apps/event/gql/registrationStatusOptions.gql'
import registrationtype from '~/config/apps/event/gql/registrationType.gql'
import { formatGQLResult } from '~/utility/gql.js'
import { required } from '~/utility/rules.js'
import strings from '~/strings.js'
export default {
  props: {
    refresh: {
      type: Function,
      default: () => false,
    },
    items: {
      type: Object,
      required: true,
    },
    context: {
      type: Object,
      default: null,
      required: false,
    },
  },
  data() {
    return {
      typeDropDown: [],
      type: [],
      registrationTypeDropdown: [],
      registrationType: [],
      eventStatusDropDown: [],
      eventStatus: [],
      required: [required],
      Amount: 0,
      dialog: false,
      datevalid: true,
      id: '',
      formData: {},
      eventData: {},
      setAttendee: [],
      valid: false,
      data: {
        event: {},
      },
      Symbol: '',
      CheckEndDate: '',
    }
  },
  computed: {
    eventStartDateProps() {
      return {
        appendIcon: 'fa-calendar',
        outlined: true,
        dense: true,
        rules: [
          (v) => {
            const StartDate = v && new Date(v)
            const { EndDate } = this.formData
            let startDateMessage = ''
            if (this.context.event.BusinessType !== 'Recurring') {
              if (!StartDate) startDateMessage = strings.FIELD_REQUIRED
              else if (StartDate && EndDate && StartDate > EndDate)
                startDateMessage = strings.START_END_DATE
              else startDateMessage = ''
              return startDateMessage || true
            } else {
              if (StartDate && EndDate && StartDate > EndDate)
                startDateMessage = strings.START_END_DATE
              else startDateMessage = ''
              return startDateMessage || true
            }
          },
        ],
      }
    },
    eventEndDateProps() {
      return {
        appendIcon: 'fa-calendar',
        outlined: true,
        dense: true,
        rules: [
          (v) => {
            const EndDate = v && new Date(v)
            const { StartDate } = this.formData
            let endDateMessage = ''
            if (this.context.event.BusinessType !== 'Recurring') {
              if (!EndDate) endDateMessage = strings.FIELD_REQUIRED
              else if (StartDate && EndDate && StartDate > EndDate)
                endDateMessage = strings.END_START_DATE
              else if (EndDate < new Date())
                endDateMessage = strings.TICKET_END_DT_CURRENT_DT
              else if (EndDate > new Date(this.CheckEndDate))
                endDateMessage = strings.TICKET_END_DT_MSG
              else endDateMessage = ''
              return endDateMessage || true
            } else {
              if (StartDate && EndDate && EndDate < StartDate)
                endDateMessage = strings.END_START_DATE
              else endDateMessage = ''
              return endDateMessage || true
            }
          },
        ],
      }
    },
  },
  async mounted() {
    try {
      const res = await this.getDropDownData('TicketType')
      if (res) {
        this.typeDropDown = res.map((i) => i.value)
      }
    } catch (e) {
      console.log(
        `Error in templates/grids/eventTickets/actions/grid/row-select/edit-item.vue while making a GQL call to Ticket model from method getDropDownData`,
        e
      )
    }
    try {
      const res = await this.getRegistrationType()
      if (res) {
        this.registrationTypeDropdown = res.map((i) => i.Name)
      }
    } catch (e) {
      console.log(
        `Error in templates/grids/eventTickets/actions/grid/row-select/edit-item.vue while making a GQL call to RegistrationType model from method getRegistrationType`,
        e
      )
    }
    try {
      const res = await this.getDropDownData('TicketStatus')
      if (res) {
        this.eventStatusDropDown = res.map((i) => i.value)
        this.eventStatus = this.eventStatusDropDown[0]
      }
    } catch (e) {
      console.log(
        `Error in templates/grids/eventTickets/actions/grid/row-select/edit-item.vue while making a GQL call to Ticket model from method getDropDownData`,
        e
      )
    }
    this.getAttendeeType()
    this.getCurrencySymbol(this.context.event.Currency)
  },
  methods: {
    outsideClicked() {
      this.$refs.dateTimeComponent.okHandler()
      this.$refs.dateTimeComponent1.okHandler()
    },
    changeStartDate() {
      if (
        this.context.event.BusinessType !== 'Recurring' ||
        this.formData.StartDate !== ''
      ) {
        this.$refs.dateform && this.$refs.dateform.validate()
        if (this.$refs.dateTimeComponent) {
          this.$refs.dateTimeComponent.$children[0].onClickOutside = this.outsideClicked
        }
      }
    },
    changeEndDate() {
      if (
        this.context.event.BusinessType !== 'Recurring' ||
        this.formData.EndDate !== ''
      ) {
        this.$refs.dateform && this.$refs.dateform.validate()
        if (this.$refs.dateTimeComponent1) {
          this.$refs.dateTimeComponent1.$children[0].onClickOutside = this.outsideClicked
        }
      }
    },
    onClose() {
      this.onReset()
      this.dialog = false
    },
    getDateLabel(dateLabel) {
      if (this.context.event.BusinessType === 'Recurring') {
        return `${dateLabel}`
      } else {
        return `${dateLabel}*`
      }
    },
    onReset() {
      this.formData.Attendee = []
      this.Attendees = []
      this.formData.Amount = ''
      this.formData.CheckGroupDiscount = false
      this.formData.Code = ''
      this.formData.DisplayOrder = null
      this.formData.Group = ''
      this.formData.Type = ''
      this.formData.TicketCount = null
      this.formData.ValidateQty = false
      this.formData.Status = ''
      this.formData.StartDate = ''
      this.formData.EndDate = ''
      this.valid = false
    },
    async onSave() {
      const url = this.$bitpod.getApiUrl()
      this.getAttendeesId()
      this.formData.Amount = parseInt(this.Amount)
      this.formData.DisplayOrder = parseInt(this.formData.DisplayOrder)
      this.formData.TicketCount = parseInt(this.formData.TicketCount)
      this.formData.AvailableCount = parseInt(this.formData.TicketCount)
      this.formData.Events = this.$route.params.id
      this.formData.Status = this.eventStatus
      try {
        const res = await this.$axios.$patch(
          `${url}Tickets/${this.items[0].id}`,
          this.formData
        )
        if (res) {
          this.onReset()
          this.dialog = false
          this.refresh()
        }
      } catch (e) {
        console.log(
          `Error in templates/grids/eventTickets/actions/grid/row-select/edit-item.vue while making a PATCH call to Ticket model from method onSave context:-URL:-${url}\n TicketId:-${this.items[0].id}\n formData:-${this.formData}\n `
        )
      }
    },
    getCurrencyLabel() {
      const str = `Price*(${this.Symbol})`
      return str
    },
    getCurrencySymbol(Currency) {
      this.Symbol = Number()
        .toLocaleString(Currency, { style: 'currency', currency: Currency })
        .slice(0, 1)
    },
    getType() {
      if (this.formData.Type === 'Free') {
        this.Amount = 0
      } else {
        this.Amount = 1
      }
    },

    getAttendeesId() {
      this.formData.Attendee = this.setAttendee
        .filter((i) => this.registrationType.some((j) => j === i.Name))
        .map((k) => k.id)
    },
    getTickets() {
      this.items.map((ele) => {
        this.CheckEndDate = this.context.event.EndDate
        this.formData = { ...ele }
        if (
          this.context.event.BusinessType !== 'Recurring' ||
          (ele.StartDate !== '' && ele.EndDate !== '')
        ) {
          this.formData.StartDate = new Date(ele.StartDate)
          this.formData.EndDate = new Date(ele.EndDate)
        } else {
          this.formData.StartDate = null
          this.formData.EndDate = null
        }
        this.Amount = ele.Amount
        this.registrationType = []
        this.setAttendee.forEach((x) => {
          ele.Attendee.map((y) => {
            if (x.id === y) {
              this.registrationType.push(x.Name)
            }
          })
        })
        this.id = ele.id
      })
    },
    async getAttendeeType() {
      const url = this.$bitpod.getApiUrl()
      try {
        const res = await this.$axios.$get(
          `${url}Events/${this.$route.params.id}/AttendeeType`
        )
        if (res) {
          res.forEach((element) => {
            this.setAttendee.push(element)
          })
        }
      } catch (e) {
        console.log(
          `Error in templates/grids/eventTickets/actions/grid/row-select/edit-item.vue while making a GET call to Event model from method getAttendeeType context:-URL:-${url}\n EventId:-${this.$route.params.id} `
        )
      }
    },
    async getDropDownData(filterType) {
      try {
        const result = await this.$apollo.query({
          query: gql`
            ${generalconfiguration}
          `,
          variables: {
            filters: {
              where: {
                type: filterType,
              },
            },
          },
        })
        if (result) {
          const generalConfig = formatGQLResult(
            result.data,
            'GeneralConfiguration'
          )
          return generalConfig
        }
      } catch (e) {
        console.log(
          `Error in templates/grids/eventTickets/actions/grid/wor-select/edit-item.vue while making a GQL call to GeneralConfiguration model from method getDropDownData Inputs:-filterType:-${filterType} `,
          e
        )
      }
    },
    async getRegistrationType() {
      try {
        const result = await this.$apollo.query({
          query: gql`
            ${registrationtype}
          `,
          variables: {
            filters: {
              where: {
                EventId: this.$route.params.id,
              },
            },
          },
        })
        if (result) {
          const generalConfig = formatGQLResult(result.data, 'RegistrationType')
          return generalConfig
        }
      } catch (e) {
        console.log(
          `Error in templates/grids/eventTickets/actions/grid/row-select/edit-item.vue while making a GQL call to RegistrationType model from method getRegistrationType context:- EventId:-${this.$route.params.id}\n `,
          e
        )
      }
    },
  },
}
</script>
