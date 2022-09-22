<template>
  <div v-show="loading" class="fixed z-[9999] top-[45%] left-[47%]">
    <img
      class="w-[100px] animate-spin"
      src="../../assets/images/icons/sakura-icon.svg"
      alt=""
    />
    <p class="text-center font-500 pt-[5px] text-[18px]">Loading...</p>
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
