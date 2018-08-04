import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import { sync } from "vuex-router-sync";
import store from "@/store/store";

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  iconfont: "mdi"
});

sync(store, router);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
