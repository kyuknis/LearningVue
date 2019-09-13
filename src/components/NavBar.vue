<template>
  <b-navbar toggleable="lg" type="light" variant="faded">
    <b-navbar-brand to="/">
      <img id="brand-logo" src="../assets/logo.png" alt="Vue" />
      ToDo
    </b-navbar-brand>
    <b-navbar-nav>
        <!-- Boilerplate for Navigation -->
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
        <!-- Boilerplate for User Profile Component -->
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style lang="scss">
#brand-logo {
    height: 3em;
    width: 3em;
}
</style>