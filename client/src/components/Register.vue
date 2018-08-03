<template>
  <v-container grid-list-md>
      <v-flex xs6 class="register" elevation-3>

          <v-toolbar color="blue">
            <v-toolbar-title>
              Register
            </v-toolbar-title>
            
          </v-toolbar >

        <v-fade-transition>
          <v-alert error :value="true" v-if="error != null">{{error}}</v-alert>
        </v-fade-transition>
        <v-form ref="form" lazy-validation class="form">
          <v-text-field
            v-model="email"
            label="E-mail"
            type="email"
            required>
          </v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            required>
          </v-text-field>
          <v-btn outline color="blue" @click="register">Register</v-btn>
        </v-form>
      </v-flex>

  </v-container>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async register() {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        });
      } catch (error) {
        //if there is an error, this is response from backend
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.register {
  margin: 0 auto;
}
.form {
  padding: 15px;
}
</style>
