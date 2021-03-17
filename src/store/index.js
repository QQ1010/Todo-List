import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
    addtodos(state, todos) {
      state.todos.push(todos);
    },
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getTodoList: (state) => state.todos,
  },
});
