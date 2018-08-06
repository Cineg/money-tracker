<template>
    <v-container grid-list-md>
        <FormTemplate title="Login">
          <div slot="alert">
            <v-alert error :value="true" v-if="error != null">{{error}}</v-alert>
          </div>
          <div slot="form">
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
          </div>
        </FormTemplate>

  </v-container>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
import FormTemplate from "./templates/InputForm";

export default {
  components: {
    FormTemplate
  },
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
        this.$router.push({ name: "home" });
      } catch (error) {
        //if there is an error, this is response from backend
        this.error = error.response.data.error;
      }
    }
  }
};
</script>


<style lang="scss" scoped>
</style>
