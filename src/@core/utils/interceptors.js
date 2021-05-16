import axios from "axios";

axios.interceptors.response.use((error) => {
  if (error.status === 500) {
    return Promise.reject(error.response.data);
  }
  return Promise.reject(error.message);
});
