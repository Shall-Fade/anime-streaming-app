<template>
  <div class="flex justify-between mb-[40px]" v-if="currentCharacter">
    <div>
      <div class="mb-[12px]">
        <h2
          class="desktop:text-[32px] laptop:text-[30px] tablet:text-[26px] text-[22px] font-semibold leading-[36px]"
        >
          {{ currentCharacter.name }}
        </h2>
        <p class="pb-[8px] leading-[15px]">{{ currentCharacter.name_kanji }}</p>
        <p
          class="text-medium-grey text-[13px] leading-[15px]"
          v-for="nickname in currentCharacter.nicknames"
          :key="nickname"
        >
          {{ nickname }}
        </p>
      </div>
      <img
        class="mb-[24px] tablet:w-full w-[100px]"
        :src="currentCharacter.images.jpg.image_url"
        :alt="currentCharacter.name"
      />
      <h4
        class="laptop:text-[20px] tablet:text-[18px] text-[16px] font-semibold"
      >
        Favorites :
      </h4>
      <p class="text-medium-grey">
        {{ currentCharacter.favorites }}
        <i class="fa-solid fa-heart text-crimson animate-pulse"></i>
      </p>
    </div>
    <div class="desktop:w-[800px] laptop:w-[670px] tablet:w-[470px] w-[170px]">
      <h4
        class="laptop:text-[20px] tablet:text-[18px] text-[16px] font-semibold pb-[10px]"
      >
        About :
      </h4>
      <p class="text-medium-grey mb-[24px]">{{ currentCharacter.about }}</p>
      <h4
        class="laptop:text-[20px] tablet:text-[18px] text-[16px] font-semibold pb-[10px]"
      >
        Anime :
      </h4>
      <swiper
        :slides-per-view="6"
        :space-between="10"
        :modules="modules"
        :autoplay="{
          delay: 2000,
          disableOnInteraction: false,
        }"
        :breakpoints="{
          '320': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '768': {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          '1024': {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          '1170': {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }"
      >
        <swiper-slide
          v-for="anime in currentCharacter.anime"
          :key="anime.anime.mal_id"
          class="flex flex-col"
        >
          <router-link
            :to="{ path: `/anime/${anime.anime.mal_id}` }"
            class="w-[100px]"
          >
            <img
              class="w-[100px] h-[150px] mb-[5px] rounded-[12px]"
              :src="anime.anime.images.jpg.image_url"
              :alt="anime.anime.title"
            />
            <p class="text-[13px] text-center">{{ anime.anime.title }}</p>
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { A11y, Autoplay } from "swiper";
import "swiper/css";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    // Переменные
    const store = useStore();
    const currentCharacter = computed(() => store.state.currentCharacter);

    return {
      currentCharacter,
      modules: [A11y, Autoplay],
    };
  },
};
</script>
