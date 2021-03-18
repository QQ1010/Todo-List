<template>
  <div class="about">
    <h1>About page</h1>
    <div v-if="getTodoList === null">
      Loading...
    </div>
  <v-card
    v-else
    class="mx-auto"
    max-width="400"
    tile
  >
  <div v-if="getTodoList.length === 0">
    There is nothing.
    Go to Home Page to create your newTodo.
    <v-text-field
      color="success"
      loading
      disabled
    ></v-text-field>
  </div>
  <v-list-item
    v-else
    v-for="todo in getTodoList"
    :key="todo.id"
    :value="todo"
    active-class="deep-purple--text text--accent-4"
  >
      <template v-slot:default="{ active }">
              <v-list-item-content>
                <v-list-item-title v-text="todo"></v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-checkbox
                  :input-value="active"
                  color="deep-purple accent-4"
                ></v-checkbox>
              </v-list-item-action>
            </template>
      <v-list-item-content>
        <v-list-item-title>{{ todo.content }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-card>
  </div>
</template>

<script>

export default {
  name: 'About',
  data: () => ({
    todos: [],
  }),
  computed: {
    getTodoList() {
      // return this.$store.getters.getTodoList;
      return JSON.parse(localStorage.getItem('todos'));
    },
  },
};
</script>
