<template>
  <div>
    <b-form inline @submit="onSubmit" @reset="onReset" class="text-left">
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
          class="m-1"
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-button type="submit" variant="primary" class="m-1">Save</b-button>
        <b-button type="reset" variant="danger" class="m-1">Discard</b-button>
      </b-form-group>
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