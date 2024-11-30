<template lang="pug">
    div(class="grid grid-cols-1 md:grid-cols-2 my-28  gap-20")
        div(class='max-h-[724px]')
          img(src='../../assets/images/image 44.svg'  loading="lazy" alt="image for About"  width="640" height="724" class='w-full h-full  object-cover  transition ') 
        div(class="flex flex-col  px-6 md:px-0 text-center  md:text-left" :class="locale === 'ar' ? 'md:pl-20' : 'md:pr-20'")
          h2(class=" text-5xl md:text-6xl lg:text-8xl  xl:text-[120px] font-thin text-black mb-6 xl:mb-[79px]") ABOUT US
          p(class="text-lg font-normal text-[#020203] ")
            | From Ancient Times To The Present Day, Our Journey Continues To Bring The Best To 
            | The Modern Woman. We Draw Inspiration From Our Rich Heritage And Blend It With 
            | Contemporary Touches To Offer You A Diverse Range Of Products That Reflect The 
            | Elegance And Sophistication Of The Past With A Modern Twist.
          div(class='mt-[55px]')
            h3(class="text-4xl font-bold text-black mb-4") Values
            ul(class="space-y-4")
              li(class="value-item") Sustainability
              li(class="value-item") Women's Empowerment
              li(class="value-item") Innovation And Creativity
              li(class="value-item") Excellent Customer Service
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
</script>

<style scoped>
.value-item {
  @apply font-normal text-lg text-[#020203] py-3 px-4 bg-[#F4F4F4] rounded-xl;
}
</style>
