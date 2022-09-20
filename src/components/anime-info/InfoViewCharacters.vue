<template>
  <div v-if="currentAnime && currentAnimeCharacters" class="laptop:mb-0 mb-[40px]">
    <h4 class="laptop:text-[20px] tablet:text-[18px] text-[16px] font-semibold pb-[10px]">Main characters :</h4>
    <div class="grid laptop:grid-cols-2 tablet:grid-cols-5 grid-cols-2 gap-[20px]">
      <div
        v-for="currentAnimeCharacter in currentAnimeCharacters"
        :key="currentAnimeCharacter.mal_id"
      >
        <img
          class="w-[120px] h-[180px] rounded-[12px]"
          :src="currentAnimeCharacter.images.jpg.image_url"
          :alt="currentAnimeCharacter.name"
        />
        <h4
          class="max-w-[120px] text-center text-[14px] text-medium-grey font-semibold pt-[4px]"
        >
          {{ currentAnimeCharacter.name }}
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useStore } from "vuex";
import { ref, computed, onMounted } from "vue";
export default {
  setup() {
    // Переменные
    const store = useStore();
    const currentAnime = computed(() => store.state.currentAnime);
    const currentAnimeCharacters = ref([]);

    onMounted(() => {
      setTimeout(getCurrentAnimeCharacters, 1000);
    });

    // Получить персонажей из текущего аниме
    function getCurrentAnimeCharacters() {
      axios
        .get(
          `https://api.jikan.moe/v4/anime/${currentAnime.value.mal_id}/characters?limit=6`
        )
        .then((responce) => {
          // Отсортировать только главных персонажей
          for (let i = 0; i < responce.data.data.length; i++) {
            if (responce.data.data[i].role === "Main") {
              currentAnimeCharacters.value.push(
                responce.data.data[i].character
              );
            }
          }
        });
    }

    return {
      currentAnime,
      currentAnimeCharacters,
    };
  },
};
</script>
