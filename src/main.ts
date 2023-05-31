import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import { createPinia } from "pinia";
import App from "./App.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";

const pinia = createPinia();

const routes = [
  { path: "/balancesheet/", component: Home },
  { path: "/balancesheet/about", component: About },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faPlus, faX } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faPlus, faX);

createApp(App)
  .use(pinia)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
