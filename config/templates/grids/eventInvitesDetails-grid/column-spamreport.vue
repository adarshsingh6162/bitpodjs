<template>
  <div>
    <div v-if="item.SpamReport === true">
      <v-icon class="error--text fs-18">fa-info-circle</v-icon>
    </div>
    <div v-else>
      <v-icon></v-icon>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: { type: String, default: '' },
  },
}
</script>
