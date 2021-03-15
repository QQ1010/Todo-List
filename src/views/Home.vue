<template>
  <div class="home">
    <h1>Home Page</h1>
    <v-app-bar
  dense
  color="indigo lighten-4"
>
      <v-text-field v-model="newTodo" id="newTodo" name="newTodo"
      label="Input your todo list"
      :rules="rules"
      hide-details="auto"
    ></v-text-field>
    </v-app-bar>
    <v-btn @click="addtodos"
  color="indigo lighten-2"
  elevation="2"
>Create</v-btn>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    newTodo: '',
    todos: [],
  }),
  watch: {
    newTodo() {
      console.log('create new Todo', this.newTodo);
    },
  },
  methods: {
    addtodos() {
      const value = this.newTodo && this.newTodo.trim();
      if (value) {
        this.$store.dispatch('addtodos',text)
      }
      this.newTodo = '';
    },
  },
};
</script>
