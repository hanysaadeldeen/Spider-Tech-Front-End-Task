<template lang="pug">
    div(class='bg-[#F4F4F4] flex flex-col gap-6 rounded-2xl py-6 px-4 w-full')
      img(src="../../assets/images/folia-transferowa-silver-01.webp.svg" class='mx-auto' :alt="name" loading="lazy" width="252" height="252")
      h1(class="text-[#444444] text-[22px] font-medium text-center truncate " ) {{name}}
</template>

<script setup lang="ts">
interface Product {
  id: number;
  name: string;
  image: string;
}

defineProps<Product>();


</script>

<style scoped></style>
