<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-btn text exact v-bind:to="{ name: 'Home' }">
        Home
      </v-btn>
      <v-btn text :to="{ name: 'About'}">
        About
      </v-btn>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

};
</script>
