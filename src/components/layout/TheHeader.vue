<template>
  <header
    class="relative desktop:max-w-[1170px] tablet:max-w-[768px] laptop:max-w-[1024px] max-w-[350px] laptop:mb-0 mb-[45px] mx-auto my-0 pt-[24px] pb-[40px] flex items-center justify-between"
  >
    <h1 class="order-1 text-[32px] font-bold leading-8 tracking-[4px]">
      <a href="/">Anonime</a>
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
      @keyup.enter="searchAnimes()"
      v-model="searchQuery"
      class="laptop:order-3 order-4 laptop:static absolute left-0 top-20 laptop:w-auto w-full outline-1 text-[18px] py-[8px] pl-[18px] pr-[100px] rounded-[37px] outline-teal bg-light-grey"
      type="text"
      placeholder="Search anime"
    />
  </header>
</template>

<script>
import axios from "axios";
import { useStore } from "vuex";
import { ref, watch, onMounted } from "vue";
import router from "../../router";
export default {
  setup() {
    // Переменные
    const store = useStore();
    const searchQuery = ref("");
    const animes = ref([]);
    const lastVisiblePage = ref(1);
    const loading = ref(false);
    let page = 1;
    const menuIsOpen = ref(false);

    // Отслеживание изменения прелоадера
    watch(
      () => loading.value,
      () => {
        store.commit("TOGGLE_LOADING", loading.value);
      }
    );

    // Бесконечная прокрутка
    onMounted(() => {
      window.addEventListener("scroll", () => {
        let scrollTop = document.documentElement.scrollTop;
        let scrollHeight = document.documentElement.scrollHeight;
        let clientHeight = document.documentElement.clientHeight;

        if (
          scrollTop + clientHeight >= scrollHeight &&
          page < lastVisiblePage.value
        ) {
          page++;
          getAnimes();
        }
      });
    });

    // Обнулить данные и найти аниме по запросу
    function searchAnimes() {
      animes.value.length = 0;
      lastVisiblePage.value = 1;
      page = 1;

      getAnimes();
    }

    // Получить найденные аниме
    function getAnimes() {
      loading.value = true;
      setTimeout(() => {
        axios
          .get(
            `https://api.jikan.moe/v4/anime?q=${searchQuery.value}&page=${page}&sfw&sort=asc`
          )
          .then((responce) => {
            router.push("/search");
            animes.value = animes.value.concat(responce.data.data);
            lastVisiblePage.value = responce.data.pagination.last_visible_page;
            store.commit("GET_FOUND_ANIMES", animes.value);
          });
        loading.value = false;
      }, 1000);
    }

    // Открыть и закрыть меню
    function openMenu() {
      menuIsOpen.value = !menuIsOpen.value;
    }

    return {
      searchQuery,
      menuIsOpen,
      searchAnimes,
      getAnimes,
      openMenu,
    };
  },
};
</script>
