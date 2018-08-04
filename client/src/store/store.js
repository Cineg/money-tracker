import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false
  },
  mutations: {
    //get state
    setToken(state, token) {
      //set state.token equal to passed token from action
      state.token = token;

      //if token is defined, set isUserLoggedIn to true
      if (token) {
        state.isUserLoggedIn = true;
      } else {
        state.isUserLoggedIn = false;
      }
    },
    setUser(state, user) {
      //set state.token equal to passed token from action
      state.user = user;
    }
  },
  actions: {
    setToken({ commit }, token) {
      //call the mutation called setToken
      //pass token object
      commit("setToken", token);
    },
    setUser({ commit }, user) {
      //call the mutation called setUser
      //pass user object
      commit("setUser", user);
    }
  }
});
