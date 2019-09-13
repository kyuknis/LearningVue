<template>
  <div>
    <b-progress height=".25em" :value="value" variant="success" class="shadow-sm"></b-progress>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex"

export default {
  name: "GlobalActivityProgressBar",
  mounted() {
    this.timer = setInterval(() => {
      let newValue = 25 + Math.random() * 75
      this.setValue(newValue)
    }, 2000)
  },
  computed: {
    ...mapState("globalProgress", ["value"])
  },
  methods: {
    ...mapMutations("globalProgress", ["setValue"])
  }
}
</script>

<style lang="scss">
</style>