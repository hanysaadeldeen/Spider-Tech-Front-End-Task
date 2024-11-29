import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";

import { createI18n } from "vue-i18n";
import en from "./language/en-Us.json";
import ar from "./language/ar-Ar.json";
import ProductsContainer from "./components/util/ProductsContainer.vue";

const app = createApp(App);
app.component("ProductsContainer", ProductsContainer);

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const i18n = createI18n({
  locale: "en",
  fallbackLocale: "ar",
  messages: {
    en,
    ar,
  },
});

app.use(i18n);

app.mount("#app");
