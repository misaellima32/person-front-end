import Vue from "vue";
import VueRouter from "vue-router";

//modules
import home from "./home/index";
import cadastro from "./cadastro/index";
import gerenciamento from "./gerenciamento/index";

Vue.use(VueRouter);

const routes = [...home, ...cadastro, ...gerenciamento];

const router = new VueRouter({
  routes,

  // aqui estaria um beforeEach com alguma regra de acessos a rotas.
});

export default router;
