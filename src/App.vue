<template>
  <v-app>
    <v-app-bar app dark color="blue">
      <v-toolbar-title>Vue User Management</v-toolbar-title>
      <div v-if="!userLoggedIn">
        <router-link to="/"><v-btn text rounded>Home</v-btn></router-link>
        <router-link to="/login"><v-btn text rounded>Login</v-btn></router-link>
        <router-link to="/register"><v-btn text rounded>Register</v-btn></router-link>
      </div>
      <div v-else>
        <v-btn text rounded @click="logout()">Log Out</v-btn>
      </div>
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
      showPassword: false,
      userLoggedIn: false
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('token')
      this.userLoggedIn = true
      this.$router.push('/login')
    }
  },
  mounted () {
    if (localStorage.getItem('token') !== null) {
      this.userLoggedIn = true
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
