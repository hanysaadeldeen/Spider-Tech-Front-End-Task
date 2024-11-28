<template>
  <div :dir="direction">
    <AppHeader />
    <HeroSection />
    <AboutSection />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from "./components/layouts/AppHeader.vue";
import AppFooter from "./components/layouts/AppFooter.vue";
import { useI18n } from "vue-i18n";
import { computed } from "vue";
import HeroSection from "./components/Section/HeroSection.vue";
import AboutSection from "./components/Section/AboutSection.vue";
const { locale } = useI18n();
const direction = computed(() => {
  return locale.value === "ar" ? "rtl" : "ltr";
});
</script>

<style scoped></style>
