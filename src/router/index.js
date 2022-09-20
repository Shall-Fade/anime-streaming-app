import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SearchView from "../views/SearchView.vue";
import InfoView from "../views/InfoView.vue";

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
  ],
  linkActiveClass: "text-teal laptop:underline laptop:decoration-teal laptop:underline-offset-8",
});

export default router;
