import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SearchView from "../views/SearchView.vue";
import InfoView from "../views/InfoView.vue";
import CharacterInfoView from "../views/CharacterInfoView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/search",
      component: SearchView,
    },
    {
      path: "/anime/:id",
      component: InfoView,
    },
    {
      path: "/character/:id",
      component: CharacterInfoView,
    },
  ],
  linkActiveClass:
    "text-teal laptop:underline laptop:decoration-teal laptop:underline-offset-8",
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

export default router;
