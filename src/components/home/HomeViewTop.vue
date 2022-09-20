<template>
  <div>
    <!-- Top Popular Animes -->
    <base-anime-top-template>
      <template v-slot:title>Top Popular Anime</template>
      <template v-slot:cards>
        <base-anime-card
          v-for="topPopularAnime in topPopularAnimes"
          :key="topPopularAnime.mal_id"
          :status="topPopularAnime.status"
          :anime="topPopularAnime"
        >
          <template v-slot:image>
            <img
              class="w-[170px] h-[253px] rounded-[12px]"
              :src="topPopularAnime.images.jpg.image_url"
              :alt="topPopularAnime.title"
            />
          </template>
          <template v-slot:title>{{ topPopularAnime.title }}</template>
        </base-anime-card>
      </template>
    </base-anime-top-template>
    <!-- Top Airing Animes -->
    <base-anime-top-template>
      <template v-slot:title>Top Airing Anime</template>
      <template v-slot:cards>
        <base-anime-card
          v-for="topAiringAnime in topAiringAnimes"
          :key="topAiringAnime.mal_id"
          :status="topAiringAnime.status"
          :anime="topAiringAnime"
        >
          <template v-slot:image>
            <img
              class="w-[170px] h-[253px] rounded-[12px]"
              :src="topAiringAnime.images.jpg.image_url"
              :alt="topAiringAnime.title"
            />
          </template>
          <template v-slot:title>{{ topAiringAnime.title }}</template>
        </base-anime-card>
      </template>
    </base-anime-top-template>
    <!-- Top Upcoming Animes -->
    <base-anime-top-template>
      <template v-slot:title>Top Upcoming Anime</template>
      <template v-slot:cards>
        <base-anime-card
          v-for="topUpcomingAnime in topUpcomingAnimes"
          :key="topUpcomingAnime.mal_id"
          :status="topUpcomingAnime.status"
          :anime="topUpcomingAnime"
        >
          <template v-slot:image>
            <img
              class="w-[170px] h-[253px] rounded-[12px]"
              :src="topUpcomingAnime.images.jpg.image_url"
              :alt="topUpcomingAnime.title"
            />
          </template>
          <template v-slot:title>{{ topUpcomingAnime.title }}</template>
        </base-anime-card>
      </template>
    </base-anime-top-template>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";
export default {
  setup() {
    // Переменные
    const topPopularAnimes = ref();
    const topAiringAnimes = ref();
    const topUpcomingAnimes = ref();

    onMounted(() => {
      getTopPopularAnime();
      getTopAiringAnime();
      getTopUpcomingAnime();
    });

    // Получить топ популярных аниме
    function getTopPopularAnime() {
      axios
        .get("https://api.jikan.moe/v4/top/anime?limit=6&filter=bypopularity")
        .then((responce) => {
          topPopularAnimes.value = responce.data.data;
        });
    }

    // Получить топ выходящих аниме
    function getTopAiringAnime() {
      axios
        .get("https://api.jikan.moe/v4/top/anime?limit=6&filter=airing")
        .then((responce) => {
          topAiringAnimes.value = responce.data.data;
        });
    }

    // Получить топ не вышедших аниме
    function getTopUpcomingAnime() {
      axios
        .get("https://api.jikan.moe/v4/top/anime?limit=6&filter=upcoming")
        .then((responce) => {
          topUpcomingAnimes.value = responce.data.data;
        });
    }

    return {
      topPopularAnimes,
      topAiringAnimes,
      topUpcomingAnimes,
    };
  },
};
</script>
