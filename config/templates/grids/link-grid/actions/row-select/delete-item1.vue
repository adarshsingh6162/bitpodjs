<template>
  <div>
    <v-btn color="primary" dark @click="onDelete">
      Delete
    </v-btn>
    <v-snackbar v-model="snackbar" timeout="2000" top="true">
      Item deleted successfully.

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: null,
      default: null,
    },
    viewName: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      dialog: false,
      updateCount: 0,
      snackbar: false,
    }
  },
  methods: {
    onDelete() {
      this.dialog = false
    },
  },
}
</script>
