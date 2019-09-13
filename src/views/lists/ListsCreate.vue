<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="to-do-list-name-group"
        label="To Do List Name:"
        label-for="to-do-list-name-input"
      >
        <b-form-input
          id="to-do-list-name-input"
          v-model="form.toDoListName"
          required
          placeholder="List Name"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Save</b-button>
      <b-button type="reset" variant="danger">Discard</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        toDoListName: ""
      }
    }
  },
  methods: {
    onSubmit(event) {
      let currentListCount = this.$store.state.lists.lists.length

      event.preventDefault()

      this.$store.dispatch("lists/save", {
        id: currentListCount,
        title: this.form.toDoListName,
        todos: []
      })

      this.$router.push("/lists")
    },
    onReset(event) {
      event.preventDefault()
      this.form.toDoListName = ""
      this.$router.push("/lists")
    }
  }
}
</script>