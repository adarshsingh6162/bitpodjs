<template>
  <div>
    {{ formatDate }}
  </div>
</template>

<script>
import { formatedDate } from '~/utility/form.js'
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
      required: false,
    },
  },
  computed: {
    formatDate() {
      const date = this.item.EndDate
      const timezone = this.item.Timezone
      const output = formatedDate(date, timezone)
      return output
    },
  },
}
</script>
