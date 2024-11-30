<template lang="pug">
  div(class='bg-white rounded-3xl py-14 px-10 mt-10') 
    h1(class='text-[#020203] text-3xl font-semibold mb-8') {{$t("Products")}}
    
    div(class='flex overflow-x-auto gap-2 mb-4 items-center')
      div(v-for='category in Category' :key="category" class='text-[#0000004D] cursor-pointer  font-medium text-lg py-[6px] px-4 min-w-fit rounded-full' :class="active === category ? '!text-[#020203] bg-[#DEEBF6]' : ''" @click="active = category" ) {{category}}
    swiper(
      :modules="[Navigation]"
      :slides-per-view="1"
      :space-between="20"
      :breakpoints="{640: { slidesPerView: 2},768: { slidesPerView: 3 },968: { slidesPerView: 3 },1024: { slidesPerView: 4 },1500: { slidesPerView: 5 }}"
      :navigation="{ prevEl: '.prev-button', nextEl: '.next-button' }"
      dir="ltr"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    )
      swiper-slide(v-for='product in Products' :key='product.id')
        ProductCart(:id='product.id' :name='product.name' :image='product.image')
      
    div( :class="['flex items-center justify-start gap-5 mt-8', locale === 'ar' ? 'flex-row-reverse justify-end' : '']")
      div.prev-button(
        :class="{ 'bg-[#D9D9D9]': !isPrevEnabled, 'bg-[#83B7D7]': isPrevEnabled }"
        class="rounded-full flex items-center justify-center p-3 cursor-pointer"
      )
        ion-icon(name="chevron-back-outline" class='text-2xl text-[#ffffff]')
      div.next-button(
        :class="{ 'bg-[#D9D9D9]': !isNextEnabled, 'bg-[#83B7D7]': isNextEnabled }"
        class="rounded-full flex items-center justify-center p-3 cursor-pointer"
      )
        ion-icon(name="chevron-forward-outline" class='text-2xl text-[#ffffff]')
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import ProductCart from "./ProductCart.vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const active = ref("Devices");

const isPrevEnabled = ref(false);
const isNextEnabled = ref(true);

const onSwiper = (swiper: any) => {
  updateNavigationState(swiper);
};

const onSlideChange = (swiper: any) => {
  updateNavigationState(swiper);
};

const updateNavigationState = (swiper: any) => {
  isPrevEnabled.value = !swiper.isBeginning;
  isNextEnabled.value = !swiper.isEnd;
};
interface Product {
  id: number;
  name: string;
  image: string;
}
const Products: Product[] = [
  {
    id: 1,
    name: "folia transferowa silve 01",
    image: "/src/assets/images/folia-transferowa-silver-01.webp.svg",
  },
  {
    id: 2,
    name: "new duo sugar lemon",
    image: "/src/assets/images/new-duo-sugar-lemon.webp.svg",
  },
  {
    id: 3,
    name: "new duo gabki do ombre",
    image: "/src/assets/images/new-duo-gabki-do-ombre.webp.svg",
  },
  {
    id: 5,
    name: "paint gel 5g 063 barbie",
    image: "/src/assets/images/paint-gel-5g-063-barbie.webp.svg",
  },
  {
    id: 4,
    name: "folia transferowa silver 01",
    image: "/src/assets/images/folia-transferowa-silver-01.webp.svg",
  },
];

const Category: string[] = [
  "Uv Gel Nail Polihes",
  "Nail Art",
  "Devices",
  "Accessories",
  "Uv Gels",
  "Care",
];
</script>

<style scoped></style>
