<template>
  <div
    class="font-poppins bg-dark-grey text-white h-full laptop:text-[16px] text-[12px]"
  >
    <TheHeader />
    <main
      class="desktop:max-w-[1170px] laptop:max-w-[1024px] tablet:max-w-[768px] max-w-[350px] mx-auto my-0"
    >
      <router-view></router-view>
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
