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
import { mapActions } from "vuex"

export default {
  name: "list-create",

  data() {
    return {
      form: {
        toDoListName: ""
      }
    }
  },

  methods: {
    ...mapActions("lists", ["save"]),

    onSubmit(event) {
      event.preventDefault()

      this.save({
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