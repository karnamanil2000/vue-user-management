<template>
  <v-container>
    <v-card width="500" class="mx-auto mt-5">
      <v-card-title>Register Here</v-card-title>
      <v-card-text>
        <v-text-field label="Username" type="text" prepend-icon="mdi-account-circle" append-icon="mdi" />
        <v-text-field label="Email" type="email" prepend-icon="mdi-email" append-icon="mdi" />
        <v-text-field label="Password" :type="showPassword ? 'text' : 'password'" prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPassword = !showPassword" />
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn elevation="3" color="success">Register</v-btn>
        <v-spacer></v-spacer>
        <router-link to="/login">
            <v-btn elevation="3" color="info">Login</v-btn>
        </router-link>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'RegisterView',
  data () {
    return {
      showPassword: false
    }
  }
}
</script>
