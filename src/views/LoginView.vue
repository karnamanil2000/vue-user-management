<template>
  <v-container>
    <v-form @submit.prevent="handleSubmit">
      <v-card width="500" class="mx-auto mt-5">
        <v-card-title>Login Here</v-card-title>
        <v-card-text>
          <v-text-field label="Email" v-model="loginDetails.email" type="email" prepend-icon="mdi-account-circle" append-icon="mdi" />
          <v-text-field label="Password" v-model="loginDetails.password" :type="showPassword ? 'text' : 'password'" prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPassword = !showPassword" />
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <router-link to="/register">
            <v-btn elevation="3" color="success">Click here Register</v-btn>
          </router-link>
          <v-spacer></v-spacer>
          <v-btn type="submit" elevation="3" color="info">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-container>
</template>

<script>
import { LoginService } from '@/Services/LoginService'

export default {
  name: 'LoginView',

  data () {
    return {
      showPassword: false,
      loginDetails: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async handleSubmit () {
      try {
        console.log(this.loginDetails)
        const response = await LoginService.signInUser(this.loginDetails)
        console.log(response.data, 'data')
      } catch (error) {
        console.log('error', error.response.data.errors[0])
        window.alert(error.response.data.errors[0])
      }
    }
  }
}
</script>
