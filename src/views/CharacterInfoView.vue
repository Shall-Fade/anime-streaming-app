<template>
  <div>
    <CharacterInfoViewDescription />
  </div>
</template>

<script>
import axios from "axios";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import CharacterInfoViewDescription from "../components/character-info/CharacterInfoViewDescription.vue";
export default {
  components: {
    CharacterInfoViewDescription,
  },
  setup() {
    // Переменные
    const route = useRoute();
    const currentCharacterQuery = route.params.id;
    const store = useStore();

    // Получить информацию о выбранном аниме персонаже
    axios
      .get(`https://api.jikan.moe/v4/characters/${currentCharacterQuery}/full`)
      .then((responce) => {
        store.commit("GET_CURRENT_CHARACTER", responce.data.data);
      });
  },
};
</script>
