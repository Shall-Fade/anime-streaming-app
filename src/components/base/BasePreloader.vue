<template>
  <div
    v-show="loading"
    class="fixed z-[9999] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
  >
    <img
      class="desktop:w-[100px] laptop:w-[70px] tablet:w-[60px] w-[50px] animate-spin"
      src="../../assets/images/icons/sakura-icon.svg"
      alt=""
    />
    <p class="text-center font-500 pt-[5px] laptop:text-[16px] desktop:text-[18px] text-[14px]">Loading...</p>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    // Переменные
    const store = useStore();
    const loading = computed(() => store.state.loading);

    return {
      loading,
    };
  },
};
</script>
