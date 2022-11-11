<template>
  <v-container>
    <v-form @submit.prevent="handleSubmit">
      <v-card width="500" class="mx-auto mt-5">
        <v-card-title>Login Here</v-card-title>
        <v-card-text>
          <v-text-field label="Email" v-model="email" type="email" prepend-icon="mdi-account-circle" append-icon="mdi" />
          <v-text-field label="Password" v-model="password" :type="showPassword ? 'text' : 'password'" prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPassword = !showPassword" />
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <router-link to="/register">
            <v-btn elevation="3" color="success">Register</v-btn>
          </router-link>
          <v-spacer></v-spacer>
          <v-btn type="submit" elevation="3" color="info">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'LoginView',

  data () {
    return {
      showPassword: false,
      email: '',
      password: ''
    }
  },
  created () {
    console.log('email c', this.email)
    console.log('password c', this.password)
  },
  updated () {
    console.log('email u', this.email)
    console.log('password u', this.password)
  },
  methods: {
    handleSubmit () {
      console.log('email h', this.email)
      console.log('password h', this.password)
    }
  }
}
</script>
