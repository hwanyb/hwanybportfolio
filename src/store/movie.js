import axios from "axios"

export default {
  namespaced: true,
  state: () => ({
    title: "",
    loading: false,
    movies: [],
  }),
  getters: {},
  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key]
      });
    },
  },
  actions: {
    async searchMovies({ state, commit }) {
      commit("updateState", {
        loading: true,
      });
      const res = await axios.get(
        `http://www.omdbapi.com/?apikey=cbed7158&s=${state.title}`
      );
      state.movies = res.data.Search
      console.log(res.data.Search)
      commit("updateState", {
        loading: false,
      });
    },
  },
}