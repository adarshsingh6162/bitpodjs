<template>
  <div>
    <v-col class="px-0">
      <v-btn text small v-bind="attrs" v-on="on" @click="onDeleteItem">
        <v-icon left class="fs-16">fa-trash</v-icon>Delete
      </v-btn>
    </v-col>
    <v-snackbar v-model="snackbar" :timeout="timeout" top="true"
      ><div class="text-center">Ticket Deleted Successfully</div></v-snackbar
    >
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
    viewName: {
      type: String,
      required: true,
    },
    items: {
      type: Object,
      required: true,
    },
    refresh: {
      type: Function,
      required: false,
      default: () => false,
    },
  },
  data() {
    return {
      dialog: false,
      snackbar: false,
      snackbarText: '',
      timeout: 1000,
      test: 'querty',
    }
  },
  watch: {
    snackbar(newVal) {
      if (!newVal) {
        this.refresh()
      }
    },
  },

  methods: {
    async onDeleteItem() {
      const url = this.$bitpod.getApiUrl()
      const check = confirm('Are you sure you want to delete this ticket?')
      try {
        if (check) {
          await this.$axios.$delete(`${url}Tickets/${this.items[0].id}`)
          this.snackbar = true
        }
      } catch (e) {
        console.log(
          `Error in templates/grids/eventTickets/actions/grid/row-select/delete-item.vue while making a DELETE call to Tickets model from method onDeleteItem \ncontext:-URL:-${url}\n DeletedItemId:-${this.items[0].id} `,
          e
        )
      }
    },
  },
}
</script>
