import Vue from "vue";
import Vuex from "vuex";

import cadastro from "./cadastro/index";
import gerenciamento from "./gerenciamento/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cadastro,
    gerenciamento,
  },
  strict: process.env.DEV,
});
