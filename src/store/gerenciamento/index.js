import axiosIns from "@/plugins/axios";

export default {
  namespaced: true,
  state: {
    people: [],
  },
  getters: {
    getPeople: (state) => state.people,
  },
  mutations: {
    SET_PEOPLE(state, payload) {
      state.people = payload;
    },
  },
  actions: {
    setPeople({ commit, state }) {
      axiosIns
        .get("/people")
        .then((res) => {
          commit("SET_PEOPLE", res.data);
          state.responseMessage = res.status;
        })
        .catch((error) => {
          state.responseMessage = error.message;
        });
    },
  },
};
