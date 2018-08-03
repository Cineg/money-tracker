<template>
  <v-app id="app" dark>
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
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>

        <router-link to="/register">
          <v-list-tile >
            <v-list-tile-action>
              <v-icon>settings</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Register</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
      </v-list>

    </v-navigation-drawer>


      <v-toolbar app fixed clipped-left>
        <v-toolbar-side-icon @click.stop="drawer = !drawer">
          <v-icon>menu</v-icon>
        </v-toolbar-side-icon>
        <v-toolbar-title>Money Saver</v-toolbar-title>
      </v-toolbar>

      <v-content>
        <v-container fluid fill-height>
          <v-layout justify-center align-center>

            <router-view/>

          </v-layout>
        </v-container>
      </v-content>
  </v-app>
</template>

<style lang="scss">
a {
  text-decoration: none;
}
</style>

<script>
export default {
  data: () => ({
    drawer: true
  })
};
</script>
