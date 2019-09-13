<template>
  <div class="pb-3 pt-3">
    <b-row>
      <h1>{{ title }}</h1>
    </b-row>
    <b-row v-if="subtitle">
      <h6 v-if="subtitle">{{ subtitle }}</h6>
    </b-row>
    <b-row v-if="description" class="pt-3">
      <p class="text-left">{{ description }}</p>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    title: String,
    subtitle: String,
    description: String
  }
}
</script>

<style lang="scss">
</style>