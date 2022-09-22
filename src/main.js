import { createApp } from "vue";
import App from "./App.vue";
import BaseAnimeCard from "./components/base/BaseAnimeCard.vue";
import BaseAnimeTopTemplate from "./components/base/BaseAnimeTopTemplate.vue";
import BasePreloader from "./components/base/BasePreloader.vue";
import "./index.css";
import router from "./router";
import store from "./store";

const app = createApp(App);

app.component("BaseAnimeCard", BaseAnimeCard);
app.component("BaseAnimeTopTemplate", BaseAnimeTopTemplate);
app.component("BasePreloader", BasePreloader);

app.use(router);
app.use(store);

app.mount("#app");
