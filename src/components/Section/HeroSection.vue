<template lang="pug">
  div(class='pt-[110px] md:pt-[176px] ')
    div(class='grid grid-cols-1 md:grid-cols-3 ' v-if='header?.img')
      div(class='max-h-[600px] overflow-hidden')
        video(:src="header?.video" autoplay loop muted playsinline  loading="lazy" :alt="header?.desc"  class='w-full h-full object-cover' width="500" height="200") 
      div.p-8.flex.justify-center.items-center
        section(class="text-center ")
          h1(class="md:!leading-[50px] lg:!leading-[66px]  text-[44px] md:text-3xl lg:text-4xl font-medium mb-6")
            | {{header?.desc}}
          button(class="bg-blue-100 text-black text-xl px-6 py-2 rounded-full hover:bg-blue-200 transition ")
            | {{header?.btn_text}}
      div(class='max-h-[600px] overflow-hidden')
        img(:src="header?.img"  loading="lazy" alt="image 25.svg"   width="500" height="300" class='w-full h-full object-cover  transition ') 
    div(v-else class="flex items-center justify-center h-48") 
      div(class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900") 
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import HomeStore from "../../stores/homeData";

const store = HomeStore();

const { header } = storeToRefs(store);
</script>

<style scoped></style>
