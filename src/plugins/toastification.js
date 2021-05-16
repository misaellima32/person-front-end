import Vue from "vue";
import Toast from "vue-toastification";

Vue.use(Toast, {
  hideProgressBar: true,
  closeOnClick: false,
  closeButton: false,
  icon: false,
  timeout: 3000,
  transition: "Vue-Toastification__fade",
});
