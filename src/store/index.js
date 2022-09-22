import { createStore } from "vuex";

const store = createStore({
  state: {
    foundAnimes: null,
    currentAnime: null,
    loading: false,
  },
  mutations: {
    GET_FOUND_ANIMES(state, foundAnimes) {
      state.foundAnimes = foundAnimes;
    },
    GET_CURRENT_ANIME(state, currentAnime) {
      state.currentAnime = currentAnime;
    },
    TOGGLE_LOADING(state, loading) {
      state.loading = loading;
    },
  },
});

export default store;
