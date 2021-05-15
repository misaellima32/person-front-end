import Vue from "vue";
import VueRouter from "vue-router";

//modules
import home from "./home/index";
import cadastro from "./cadastro/index";

Vue.use(VueRouter);

const routes = [...home, ...cadastro];

const router = new VueRouter({
  routes,
});

export default router;
