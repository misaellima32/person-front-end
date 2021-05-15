import axiosIns from "@/plugins/axios";

export default {
  namespaced: true,
  state: {
    form: {},
    responseMessage: "",
  },
  getters: {
    getDataForm: (state) => state.form,
  },
  mutations: {
    SET_DATA_FORM(state, payload) {
      state.form = payload;
    },
  },
  actions: {
    setDataForm({ commit }, payload) {
      console.log("chamou");
      commit("SET_DATA_FORM", payload);
    },

    savePerson({ state }) {
      axiosIns
        .post("/people", state.form)
        .then((res) => {
          state.responseMessage = res.data.message;
        })
        .catch((res) => {
          state.responseMessage = res.data.message;
        });
    },
  },
};
