<template lang="pug">
  header(class="h-[110px] md:h-[176px] fixed w-full z-10 bg-[#FEFEFF] border-[#C2C2D6] px-12 py-6 flex flex-col justify-around")
    div.flex.justify-between.items-center
      img(src='../../assets/images/Logo.svg' alt='logo' loading="lazy" width="200" height="60")
      div.flex.justify-between.items-center.cursor-pointer(class='hidden md:flex gap-2')
        ion-icon(class='text-2xl text-[#020203]' name="globe-outline")
        select(@change="changeLanguage" v-model="locale" class='hidden md:block ')
          option(value="en" :class="locale === 'en' ? 'text-[18px] text-[#020203]' : ''") English
          option(value="ar" :class="locale === 'ar' ? 'text-[18px] text-[#020203]' : ''") Arabic
      button(class="md:hidden  bg-[#FEFEFF] p-2 rounded-md" @click="toggleMenu")
        ion-icon(name="menu-outline" class="text-2xl text-[#020203]")
    div.flex.justify-between.items-center(class="md:flex hidden")
      nav
          ul.flex.justify-between.items-center.gap-6
            li(v-for='(item, index) in menu' :key='index' class='text-[18px] text-[#020203]').font-normal 
              span(:href='item.link').capitalize {{ $t(item.key) }}

      div.flex.gap-2.items-center(class="md:flex hidden")
        img(src='../../assets/images/twitter.svg' alt='twitter' loading="lazy" width="24" height="24")
        img(src='../../assets/images/instagram.svg' alt='instagram' loading="lazy" width="24" height="24")
        img(src='../../assets/images/facebook.svg' alt='facebook' loading="lazy" width="24" height="24")
        
  div(class="lg:hidden fixed top-0  bg-white w-60 h-full pt-6 z-20 shadow-md" v-show="isMenuVisible" :class="locale=='en' ? 'right-0' : 'left-0'")
    div.flex.justify-between.items-center.px-6
      button(class="bg-[#FEFEFF]  rounded-md" @click="toggleMenu")
        ion-icon(name="close-circle-outline" class="text-2xl text-[#020203]")
      select(@change="changeLanguage" v-model="locale" class='px-6 ')
        option(value="en" :class="locale === 'en' ? 'text-[18px] text-[#020203]' : ''") English
        option(value="ar" :class="locale === 'ar' ? 'text-[18px] text-[#020203]' : ''") Arabic
    ul(class="flex flex-col gap-6 p-6")
      li(v-for="(item, index) in menu" :key="index" class="text-[18px] text-[#020203]").font-normal
        span(:href="item.link").capitalize {{ $t(item.key) }}
    div.flex.gap-2.px-6.items-center
      img(src='../../assets/images/instagram.svg' alt='instagram' loading="lazy" width="24" height="24")
      img(src='../../assets/images/instagram.svg' alt='instagram' loading="lazy" width="24" height="24")
      img(src='../../assets/images/facebook.svg' alt='facebook' loading="lazy" width="24" height="24")
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const isMenuVisible = ref(false);
const menu = [
  { key: "home", link: "/" },
  { key: "about", link: "/about" },
  { key: "services", link: "/services" },
  { key: "brands", link: "/brands" },
  { key: "contact", link: "/contact" },
];
const { locale } = useI18n();

const changeLanguage = (event: any) => {
  locale.value = event.target.value;
};
const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value;
};
</script>

<style scoped lang="scss"></style>
