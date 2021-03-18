<template>
  <div class="home">
    <h1>Home Page</h1>
    <v-app-bar
  dense
  color="indigo lighten-4"
>
      <v-text-field v-model="newTodo" id="newTodo" name="newTodo"
      label="Input your todo list"
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
  mounted() {
    if (localStorage.todos) {
      this.todos = JSON.parse(localStorage.getItem('todos'));
    }
  },
  methods: {
    addtodos() {
      const value = this.newTodo.trim();
      this.todos.push(value);
      console.log(value);
      if (value) {
        this.$store.dispatch('Addtodos', value);
      }
      this.newTodo = '';
      this.savetodos();
      console.log(this.todos);
    },
    savetodos() {
      const parsed = JSON.stringify(this.todos);
      localStorage.setItem('todos', parsed);
    },
  },

};
</script>
