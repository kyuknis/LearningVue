<template>
  <b-container fulid>
    <PageHeader
      v-bind:title="pageData.title"
    ></PageHeader>
    <router-view />
  </b-container>
</template>

<script>
import PageHeader from "@/components/PageHeader"

export default {
  name: "home",
  data: function() {
    return {
      pageData: {
        title: "Lists",
      }
    }
  },
  components: {
    PageHeader
  }
}
</script>
