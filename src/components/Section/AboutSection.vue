<template lang="pug">
    div(class="grid grid-cols-1 md:grid-cols-2 my-28  gap-20" v-if="about?.img")
        div(class='max-h-[724px]')
          img(:src="about?.img"  loading="lazy" alt="image for About"  width="640" height="724" class='w-full h-full  object-cover  transition ') 
        div(class="flex flex-col  px-6 md:px-0 text-center " :class="locale === 'ar' ? 'md:pl-20 md:text-right' : 'md:pr-20 md:text-left'")
          h2(class=" text-5xl md:text-6xl lg:text-8xl  xl:text-[120px] font-thin text-black mb-6 xl:mb-[79px]") {{about?.title}}
          p(class="text-lg font-normal text-[#020203] ") {{about?.desc}}
          div(class='mt-[55px]')
            h3(class="text-4xl font-bold text-black mb-4") {{$t("aboutValue")}}
            ul(class="space-y-4")
              li(v-for='(item, index) in about?.values' :key='index' class="value-item") {{item.title}}
    div(v-else class="flex items-center justify-center h-48") 
      div(class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900") 
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { storeToRefs } from "pinia";
import HomeStore from "../../stores/homeData";

const { locale } = useI18n();
const store = HomeStore();

const { about } = storeToRefs(store);
</script>

<style scoped>
.value-item {
  @apply font-normal text-lg text-[#020203] py-3 px-4 bg-[#F4F4F4] rounded-xl;
}
</style>
