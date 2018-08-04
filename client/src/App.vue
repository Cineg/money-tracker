<template>
  <v-app id="app" dark>

    <Header />

      <v-content>
        <v-container fluid>
          <v-layout>
            <router-view/>
          </v-layout>
        </v-container>
      </v-content>


  </v-app>
</template>

<style lang="scss">
a {
  color: white !important;
  text-decoration: none;
}
.btn-link {
  height: 100% !important;
}
</style>

<script>
import Header from "./components/Header";
export default {
  data: () => ({
    drawer: false
  }),
  components: {
    Header
  }
};
</script>
