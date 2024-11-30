<template>
  <div :dir="direction">
    <AppHeader />
    <HeroSection />
    <AboutSection />
    <ProductsSection />
    <TitleSection />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from "./components/layouts/AppHeader.vue";
import AppFooter from "./components/layouts/AppFooter.vue";
import { useI18n } from "vue-i18n";
import { computed, onMounted } from "vue";
import HeroSection from "./components/Section/HeroSection.vue";
import AboutSection from "./components/Section/AboutSection.vue";
import ProductsSection from "./components/Section/ProductsSection.vue";

import HomeStore from "./stores/homeData";
import TitleSection from "./components/Section/TitleSection.vue";

const { locale } = useI18n();
const direction = computed(() => {
  return locale.value === "ar" ? "rtl" : "ltr";
});

const { fetchHomeData } = HomeStore();

onMounted(async () => {
  await fetchHomeData();
});
</script>

<style scoped></style>
