import Vue from "vue";
import Vuex from "vuex";

import cadastro from "./cadastro/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cadastro,
  },
  strict: process.env.DEV,
});
