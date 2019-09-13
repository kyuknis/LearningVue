<template>
    <div>
        <b-progress height=".25em" :value="$store.state.globalProgress.value" :max="$store.state.globalProgress.total" variant="success" class="shadow-sm"></b-progress>
    </div>
</template>

<script>
export default {
    name: "GlobalActivityProgressBar",
    mounted() {
        this.timer = setInterval(() => {
            let newValue = 25 + Math.random() * 75
            this.$store.commit('globalProgress/setValue', newValue)
        }, 2000)
    }
}
</script>

<style lang="scss">

</style>