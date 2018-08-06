<template>
    <v-card>
        <v-bottom-nav
        :active.sync="bottomNav"
        :color="color"
        :value="true"
        shift>
        <v-btn dark> 
            <span>Overall</span> 
            <v-icon>fa-balance-scale</v-icon>
        </v-btn>
         <v-btn dark> 
            <span>Income</span> 
            <v-icon>fas fa-plus</v-icon>
        </v-btn>
        <v-btn dark> 
            <span>Outcome</span> 
            <v-icon>fas fa-minus</v-icon>
        </v-btn>


        </v-bottom-nav>
    </v-card>
</template>

<script>
export default {
  data() {
    return {
      bottomNav: 0
    };
  },
  computed: {
    color() {
      switch (this.bottomNav) {
        case 0:
          return "blue-grey";
        case 1:
          return "teal";
        case 2:
          return "red";
      }
    }
  }
};
</script>

<style>
</style>
