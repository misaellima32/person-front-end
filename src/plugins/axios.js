import Vue from "vue";
import { getStorage } from "../utils/localStorage";

// axios
import axios from "axios";

const token = getStorage("token");

const axiosIns = axios.create({
  baseURL: process.env.VUE_APP_API_GATEWAY_CONSIGNA,
  headers: { authorization: `Bearer ${token}` },
});

Vue.prototype.$http = axiosIns;

export default axiosIns;
