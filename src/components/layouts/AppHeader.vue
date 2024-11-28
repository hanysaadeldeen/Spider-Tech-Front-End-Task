<template lang="pug">
    header(class='h-[176px] fixed w-full z-10  bg-[#FEFEFF] border-[#C2C2D6]').border.px-12.py-6.flex.flex-col.justify-around 
      div.flex.justify-between.items-center
          img(src='../../assets/images/Logo.svg' alt='logo' loading="lazy" width="200" height="60")
          div.flex.justify-between.items-center.cursor-pointer(@click='locale==="en"?locale="ar": locale="en" ')
            ion-icon(class='text-2xl text-[#020203]' name="globe-outline")
            h2(class='text-[18px] text-[#020203]').font-normal.ml-2.mr-3 {{ locale==="en" ? "English" : "Arabic" }}
            ion-icon(class='text-2xl text-[#020203]' name="chevron-down-outline")
      div.flex.justify-between.items-center
        nav
          ul.flex.justify-between.items-center.gap-6
            li(v-for='(item, index) in menu' :key='index' class='text-[18px] text-[#020203]').font-normal 
              span(:href='item.link').capitalize {{ $t(item.key) }}
        div.flex.gap-2.items-center
          img(src='../../assets/images/instagram.svg' alt='instagram' loading="lazy"  width="24" height="24")
          img(src='../../assets/images/instagram.svg' alt='instagram' loading="lazy" width="24" height="24")
          img(src='../../assets/images/facebook.svg' alt='facebook' loading="lazy" width="24" height="24")
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const menu = [
  { key: "home", link: "/" },
  { key: "about", link: "/about" },
  { key: "services", link: "/services" },
  { key: "brands", link: "/brands" },
  { key: "contact", link: "/contact" },
];
const { locale } = useI18n();
</script>

<style scoped lang="scss"></style>
