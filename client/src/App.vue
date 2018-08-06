<template>
  <v-app id="app" dark>

    <Header />
      <v-content justify-center>
          <router-view/>      
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
