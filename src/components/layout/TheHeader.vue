<template>
  <nav
    class="relative desktop:max-w-[1170px] tablet:max-w-[768px] laptop:max-w-[1024px] max-w-[350px] laptop:mb-0 mb-[45px] mx-auto my-0 pt-[24px] pb-[40px] flex items-center justify-between"
  >
    <h1 class="order-1 text-[32px] font-bold leading-8 tracking-[4px]">
      Anonime
    </h1>
    <button
      class="text-[25px] order-2 laptop:hidden cursor-pointer"
      @click="openMenu()"
    >
      <i :class="[menuIsOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars']"></i>
    </button>
    <ul
      class="laptop:order-2 order-3 z-10 laptop:flex laptop:static absolute laptop:w-auto w-full top-14 laptop:py-0 py-[20px] laptop:flex-row flex-col text-medium-grey bg-dark-grey laptop:border-none border-b-[1px] border-light-grey"
      :class="[menuIsOpen ? 'left-0' : 'hidden']"
    >
      <li
        class="mr-[32px] laptop:mb-0 mb-[10px] laptop:text-[16px] text-[18px] hover:text-teal hover:opacity-80"
      >
        <router-link to="/">Home</router-link>
      </li>
      <li
        class="laptop:text-[16px] text-[18px] hover:text-teal hover:opacity-80"
      >
        <router-link to="/test">List anime</router-link>
      </li>
    </ul>
    <input
      @keyup.enter="getAnimes()"
      v-model="searchQuery"
      class="laptop:order-3 order-4 laptop:static absolute left-0 top-20 laptop:w-auto w-full outline-1 text-[18px] py-[8px] pl-[18px] pr-[100px] rounded-[37px] outline-teal bg-light-grey"
      type="text"
      placeholder="Search anime"
    />
  </nav>
</template>

<script>
import axios from "axios";
import { useStore } from "vuex";
import { ref } from "vue";
import router from "../../router";
export default {
  setup() {
    // Переменные
    const store = useStore();
    const searchQuery = ref("");
    const animes = ref();
    const menuIsOpen = ref(false);

    // Получить найденные аниме
    function getAnimes(page) {
      if (searchQuery.value) {
        axios
          .get(`https://api.jikan.moe/v4/anime?q=${searchQuery.value}&sfw`)
          .then((responce) => {
            animes.value = responce.data.data;
            store.commit("GET_FOUND_ANIMES", animes.value);
            searchQuery.value = "";
            router.push("/search");
          });
      }
    }

    // Открыть и закрыть меню
    function openMenu() {
      menuIsOpen.value = !menuIsOpen.value;
    }

    return {
      searchQuery,
      menuIsOpen,
      getAnimes,
      openMenu,
    };
  },
};
</script>
