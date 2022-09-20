import { createStore } from "vuex";

const store = createStore({
  state: {
    foundAnimes: null,
    currentAnime: null,
  },
  mutations: {
    GET_FOUND_ANIMES(state, foundAnimes) {
      state.foundAnimes = foundAnimes;
    },
    GET_CURRENT_ANIME(state, currentAnime) {
      state.currentAnime = currentAnime;
    },
  },
});

export default store;
