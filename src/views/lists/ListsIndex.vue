<template>
  <div>
    <b-row class="float-right">
      <b-button class="m-2 shadow" to="/lists/create">Create List</b-button>
    </b-row>
    <b-row class="pt-3">
      <b-list-group class="w-100 shadow bg-white rounded">
        <b-list-group-item v-for="list in lists" :key="list.id" to="/lists/show">{{ list.title }}</b-list-group-item>
      </b-list-group>
    </b-row>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "ListsIndex",
  created() {
    this.$store.dispatch("lists/refresh")
  },
  computed: {
    ...mapState("lists", ["lists"])
  }
}
</script>

<style lang="scss">
</style>