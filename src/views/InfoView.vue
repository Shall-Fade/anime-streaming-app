<template>
  <div class="flex laptop:flex-row flex-col laptop:justify-between">
    <div class="laptop:max-w-[770px]">
      <InfoViewTrailer />
      <InfoViewDescription />
    </div>
    <InfoViewCharacters />
  </div>
</template>

<script>
import axios from "axios";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import InfoViewTrailer from "../components/anime-info/InfoViewTrailer.vue";
import InfoViewDescription from "../components/anime-info/InfoViewDescription.vue";
import InfoViewCharacters from "../components/anime-info/InfoViewCharacters.vue";
export default {
  components: {
    InfoViewTrailer,
    InfoViewDescription,
    InfoViewCharacters,
  },
  setup() {
    // Переменные
    const route = useRoute();
    const currentAnimeQuery = route.params.id;
    const store = useStore();

    // Получить информацию о выбранном аниме
    axios
      .get(`https://api.jikan.moe/v4/anime/${currentAnimeQuery}/full`)
      .then((responce) => {
        store.commit("GET_CURRENT_ANIME", responce.data.data);
      });
  },
};
</script>
