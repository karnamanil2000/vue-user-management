<template>
  <v-container v-if="!isAuthorizationFailed">
    <h1 class="align-text-center">Users List</h1>
    <v-row>
      <v-col v-for="user in allUsers" :key="user.id" :cols="3">
        <v-card width="200" height="100"  class="mt-3 ml-2">
          <v-card-title>User Id {{ user.id }} :</v-card-title>
          <v-card-text>
            <h6>Username: {{ user.userName }}</h6>
            <h6>Email: {{ user.email }}</h6>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
    <!-- <pre>{{ allUsers }}</pre> -->
    <!-- <h3 v-for="user in allUsers" :key="user.id">{{ user.id }} {{ user.userName }} {{ user.email }}</h3> -->
  <v-container v-else>
    <h1>{{errorStatus}} {{errorMessage}} Access</h1>
  </v-container>
</template>

<script>
import { LoginService } from '@/Services/LoginService'

export default {
  name: 'LoginView',

  data () {
    return {
      isAuthorizationFailed: false,
      errorMessage: '',
      errorStatus: null,
      allUsers: []
    }
  },
  methods: {
    async getAllUsers () {
      try {
        const response = await LoginService.getAllUsers()
        this.allUsers = response.data.value
        console.log('response in getAllUsers', response.data.value)
      } catch (error) {
        this.isAuthorizationFailed = true
        console.log(error.response, 'error')
        this.errorMessage = error.response.statusText
        this.errorStatus = error.response.status
      }
    }
  },
  mounted () {
    this.getAllUsers()
  }
}
</script>

<style scoped>
[v-cloak] {
  display: none;
}

.align-text-center {
  text-align: center;
}
</style>
