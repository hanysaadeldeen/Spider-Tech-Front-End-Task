<template lang="pug">
  div(class='bg-white rounded-3xl py-14 px-10 mt-10') 
    h1(class='text-[#020203] text-3xl font-semibold mb-8') Duogel Product Showcase
    swiper(
      :modules="[Navigation]"
      :slides-per-view="1"
      :space-between="20"
      :breakpoints="{640: { slidesPerView: 2},768: { slidesPerView: 3 },968: { slidesPerView: 3 },1024: { slidesPerView: 4 },1500: { slidesPerView: 5 }}"
      :navigation="{ prevEl: '.prev-button', nextEl: '.next-button' }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    )
      swiper-slide
        ProductCart
      swiper-slide
        ProductCart
      swiper-slide
        ProductCart
      swiper-slide
        ProductCart
      swiper-slide
        ProductCart
      swiper-slide
        ProductCart
      swiper-slide
        ProductCart
      swiper-slide
        ProductCart
      swiper-slide
        ProductCart

    div(class='flex items-center justify-start gap-5 mt-8')
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

// import "swiper/swiper.min.css";
// import "swiper/modules/navigation/navigation.min.css";

// Reactive state for navigation button states
const isPrevEnabled = ref(false);
const isNextEnabled = ref(true);

const onSwiper = (swiper) => {
  updateNavigationState(swiper);
};

const onSlideChange = (swiper) => {
  updateNavigationState(swiper);
};

const updateNavigationState = (swiper) => {
  isPrevEnabled.value = !swiper.isBeginning;
  isNextEnabled.value = !swiper.isEnd;
};
</script>

<style scoped></style>
