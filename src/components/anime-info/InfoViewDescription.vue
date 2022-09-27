<template>
  <div v-if="currentAnime">
    <div class="flex mb-[40px]">
      <img
        class="laptop:w-[270px] tablet:w-[220px] w-[180px] h-full rounded-[12px] mr-[30px]"
        :src="currentAnime.images.jpg.image_url"
        :alt="currentAnime.title"
      />
      <div class="w-full">
        <div class="pb-[12px]">
          <h4 class="laptop:text-[20px] tablet:text-[16px] text-[14px] font-semibold pb-[4px]">Type :</h4>
          <p class="text-medium-grey">{{ currentAnime.type }}</p>
        </div>
        <div class="pb-[12px]">
          <h4 class="laptop:text-[20px] tablet:text-[16px] text-[14px] font-semibold pb-[4px]">Status :</h4>
          <p class="text-medium-grey">{{ currentAnime.status }}</p>
        </div>
        <div class="pb-[12px]">
          <h4 class="laptop:text-[20px] tablet:text-[16px] text-[14px] font-semibold pb-[10px]">Studios :</h4>
          <p
            class="text-medium-grey inline mr-[10px] laptop:px-[10px] laptop:py-[3px] px-[7px] py-[2px] border border-medium-grey rounded-full"
            v-for="studio in currentAnime.studios"
            :key="studio.mal_id"
          >
            {{ studio.name }}
          </p>
        </div>
        <div class="pb-[12px]">
          <h4 class="laptop:text-[20px] tablet:text-[16px] text-[14px] font-semibold pb-[4px]">Duration :</h4>
          <p class="text-medium-grey">
            {{ currentAnime.duration }}
          </p>
        </div>
        <div class="pb-[12px]">
          <h4 class="laptop:text-[20px] tablet:text-[16px] text-[14px] font-semibold pb-[10px]">Genres :</h4>
          <p
            class="text-medium-grey tablet:mb-0 tablet:mr-[10px] mr-[8px] mb-[8px] inline-block laptop:px-[10px] laptop:py-[3px] px-[7px] py-[2px] border border-medium-grey rounded-full"
            v-for="genre in currentAnime.genres"
            :key="genre.mal_id"
          >
            {{ genre.name }}
          </p>
        </div>
      </div>
    </div>
    <div class="mb-[40px]">
      <h4 class="laptop:text-[20px] tablet:text-[18px] text-[16px] font-semibold pb-[10px]">Synopsis :</h4>
      <p class="text-medium-grey">{{ currentAnime.synopsis }}</p>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    // Перменные
    const store = useStore();
    const currentAnime = computed(() => store.state.currentAnime);

    return {
      currentAnime,
    };
  },
};
</script>
