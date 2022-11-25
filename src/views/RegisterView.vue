<template>
  <v-container>
    <v-form @submit.prevent="handleSubmit">
      <v-card width="500" class="mx-auto mt-5">
        <v-card-title>Register Here</v-card-title>
        <v-card-text>
          <v-text-field label="Username" v-model="signupDetails.username" type="text" prepend-icon="mdi-account-circle" append-icon="mdi" />
          <v-text-field label="Email" v-model="signupDetails.email" type="email" prepend-icon="mdi-email" append-icon="mdi" />
          <v-text-field label="Password" v-model="signupDetails.password" :type="showPassword ? 'text' : 'password'" prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPassword = !showPassword" />
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <router-link to="/login">
              <v-btn elevation="3" color="info">Click here to Login</v-btn>
          </router-link>
          <v-spacer></v-spacer>
          <v-btn type="submit" elevation="3" color="success">Register</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-container>
</template>

<script>
import { LoginService } from '@/Services/LoginService'

export default {
  name: 'RegisterView',
  data () {
    return {
      showPassword: false,
      signupDetails: {
        username: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async handleSubmit () {
      try {
        const response = await LoginService.createUser(this.signupDetails)
        console.log(response)
        window.alert(response.data.value.dbResponseDto.message)
        return this.$router.push('/login')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
