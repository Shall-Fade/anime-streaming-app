<template>
  <router-link :to="{ path: `/character/${character.mal_id}` }">
    <slot name="image"></slot>
    <h4
      class="max-w-[120px] text-center text-[14px] text-medium-grey font-semibold pt-[4px]"
    >
      <slot name="name"></slot>
    </h4>
  </router-link>
</template>

<script>
export default {
  props: ["character"],
};
</script>
