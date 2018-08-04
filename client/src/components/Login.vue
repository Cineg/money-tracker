<template>
    <v-container grid-list-md>
      <v-flex md6 xs12 class="login" elevation-4>

          <v-toolbar color="blue">
            <v-toolbar-title>
              Login
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
          <v-btn outline color="blue" @click="login">Login</v-btn>
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
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
      } catch (error) {
        //if there is an error, this is response from backend
        this.error = error.response.data.error;
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.login {
  margin: 0 auto;
}
.form {
  padding: 15px;
}
</style>
