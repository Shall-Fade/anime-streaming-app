<template>
  <div>
    <BasePreloader />
    <base-anime-top-template>
      <template v-slot:title>Search Results</template>
      <template v-slot:cards>
        <base-anime-card
          v-for="foundAnime in foundAnimes"
          :key="foundAnime.mal_id"
          :status="foundAnime.status"
          :anime="foundAnime"
        >
          <template v-slot:image>
            <img
              class="w-[170px] h-[253px] rounded-[12px]"
              :src="foundAnime.images.jpg.image_url"
              :alt="foundAnime.title"
            />
          </template>
          <template v-slot:title>{{ foundAnime.title }}</template>
        </base-anime-card>
      </template>
    </base-anime-top-template>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    // Переменные
    const store = useStore();
    const foundAnimes = computed(() => store.state.foundAnimes);

    return {
      foundAnimes,
    };
  },
};
</script>
