<template lang="pug">
    div(class='p-10 bg-[#DEEBF6] mb-14' v-if='brands[0]')
        div.title.flex.flex-col.justify-center.items-center.gap-6(class='max-w-[900px] mx-auto')
            img(:src="brands[0]?.img" alt="DUOBEL" loading="lazy" width="300" height="60")
            p(class='text-base font-normal text-[#737373] text-center') {{brands[0]?.desc}}
        ProductsContainer(:category="brands[0]?.categories")
 
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import HomeStore from "../../stores/homeData";

const store = HomeStore();

const { brands } = storeToRefs(store);
</script>

<style scoped></style>
