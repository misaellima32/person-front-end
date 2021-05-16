import Vue from "vue";
import { getStorage } from "@/@core/utils/localStorage";

import axios from "axios";

const token = getStorage("token");

const axiosIns = axios.create({
  baseURL: "https://peopleapi-live-misael.herokuapp.com/api/v1/",
  // em caso de uso de token para requisições.
  headers: { authorization: `Bearer ${token}` },
});

Vue.prototype.$http = axiosIns;

export default axiosIns;
