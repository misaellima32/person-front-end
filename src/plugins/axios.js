import Vue from "vue";
import { getStorage } from "../utils/localStorage";

import axios from "axios";

const token = getStorage("token");

const axiosIns = axios.create({
  baseURL: "https://peopleapi-live-misael.herokuapp.com/api/v1/",
  headers: { authorization: `Bearer ${token}` },
});

Vue.prototype.$http = axiosIns;

export default axiosIns;
