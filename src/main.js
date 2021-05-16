import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//plugins
import "./plugins/bootstrap-vue";
import "@/plugins/sweet-alerts";
import "@/plugins/toastification";
import "@/plugins/v-mask";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
