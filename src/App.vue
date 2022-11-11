<template>
  <v-app>
    <v-app-bar app dark color="blue">
      <v-toolbar-title>Vue User Management</v-toolbar-title>
      <router-link to="/"><v-btn text rounded>Home</v-btn></router-link>
      <router-link to="/login"><v-btn text rounded>Login</v-btn></router-link>
      <router-link to="/register"><v-btn text rounded>Register</v-btn></router-link>
    </v-app-bar>
    <!-- <v-main>
    </v-main> -->
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data () {
    return {
      showPassword: false
    }
  }
}
</script>

<style>
a {
  color: #FFFFFF;
  text-decoration: none;
}

a.router-link-exact-active {
  text-decoration: underline;
}
</style>
