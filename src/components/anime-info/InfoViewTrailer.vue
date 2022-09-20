<template>
  <div v-if="currentAnime" class="mb-[40px] mr-[30px]">
    <h2 class="desktop:text-[32px] laptop:text-[30px] tablet:text-[26px] text-[22px] desktop:pb-[24px] pb-[12px] font-semibold leading-[36px]">{{ currentAnime.title }}</h2>
    <iframe class="rounded-[12px] desktop:w-[770px] desktop:h-[470px] laptop:w-[680px] laptop:h-[380px] tablet:w-[768px] tablet:h-[400px] w-[345px]" :src="currentAnime.trailer.embed_url" frameborder = "0" allowfullscreen></iframe>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    // Переменные
    const store = useStore();
    const currentAnime = computed(() => store.state.currentAnime);

    return {
      currentAnime,
    };
  },
};
</script>
