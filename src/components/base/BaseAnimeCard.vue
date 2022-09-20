<template>
  <router-link :to="{ path: `/anime/${anime.mal_id}` }">
    <div
      class="cursor-pointer hover:shadow-teal hover:shadow-md delay-50 transition-shadow relative laptop:mb-[10px] tablet:mb-[8px] mb-[4px] after:content-[''] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:rounded-[12px] rounded-[12px] after:bg-gradient-to-tr from-dark-grey to-transparent"
    >
      <slot name="image"></slot>
      <div
        class="absolute top-[5px] left-[5px] z-20 w-[15px] h-[15px] rounded-full"
        :class="chooseColor()"
      ></div>
      <div
        class="absolute animate-ping top-[5px] left-[5px] z-20 w-[15px] h-[15px] rounded-full"
        :class="chooseColor()"
      ></div>
    </div>
    <h4 class="font-semibold text-center">
      <slot name="title"></slot>
    </h4>
  </router-link>
</template>

<script>
export default {
  props: ["status", "anime"],
  setup(props) {
    // Переменные
    const status = props.status;

    // Выбор цвета
    function chooseColor() {
      if (status === "Not yet aired") {
        return "bg-crimson";
      } else if (status === "Currently Airing") {
        return "bg-teal";
      } else if (status === "Finished Airing") {
        return "bg-green";
      }
    }

    return {
      chooseColor,
      status,
    };
  },
};
</script>
