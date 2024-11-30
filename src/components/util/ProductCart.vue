<template lang="pug">
    div(class='bg-[#F4F4F4] flex flex-col gap-6 rounded-2xl py-6 px-4 w-full')
      img(:src='testImage[id] class='mx-auto' :alt="name" loading="lazy" width="252" height="252")
      h1(class="text-[#444444] text-[22px] font-medium text-center truncate " ) {{name}}
</template>

<script setup lang="ts">
interface Product {
  id: number;
  name: string;
  image: string;
}

defineProps<Product>();


    
const testImage = [
  "../../assets/images/folia-transferowa-silver-01.webp.svg",
  "../../assets/images/new-duo-sugar-lemon.webp.svg",
  "../../assets/images/new-duo-gabki-do-ombre.webp.svg",
  "../../assets/images/paint-gel-5g-063-barbie.webp.svg",
  "../../assets/images/folia-transferowa-silver-01.webp.svg",
];
</script>

<style scoped></style>
