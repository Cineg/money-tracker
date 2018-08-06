<template>
    <div>

    <v-navigation-drawer
    v-model="drawer"
    clipped
    fixed
    app 
    id="nav">
      <v-list dense>

        <router-link to="/">
          <v-list-tile >
            <v-list-tile-action>
              <v-icon>fas fa-chart-area</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    

    <v-toolbar app fixed clipped-left>
        <v-toolbar-side-icon @click.stop="drawer = !drawer">
          <v-icon>fas fa-bars</v-icon>
        </v-toolbar-side-icon>

        <router-link to="/">
          <v-toolbar-title>Money Saver</v-toolbar-title>
        </router-link>

        <v-spacer />
        
        <v-toolbar-items>

          <router-link to="/register" v-if="!$store.state.isUserLoggedIn">
            <v-btn flat class="btn-link">Register</v-btn>
          </router-link>

          <router-link to="/login" v-if="!$store.state.isUserLoggedIn">
            <v-btn flat class="btn-link">Login</v-btn>
          </router-link>

          <v-btn 
          flat 
          class="btn-link" 
          v-if="$store.state.isUserLoggedIn"
          @click="logout"> Logout </v-btn>

        </v-toolbar-items>

      </v-toolbar>
      </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false
  }),

  name: "Header",
  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push({ name: "home" });
    }
  }
};
</script>

