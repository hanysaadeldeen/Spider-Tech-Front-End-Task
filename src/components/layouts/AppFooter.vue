<template lang="pug">
  footer(class="bg-[#DEEBF6]" v-if='footer?.logo')
    div.px-6.py-10.container.mx-auto
      div(class='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 ')
        div.flex.flex-wrap.gap-8.justify-center(class='md:justify-start')
          div(class='flex flex-col gap-3')
            h2(class='text-2xl font-medium text-[#020203]') {{$t("information.title")}}
            div(class='space-y-1')
              p(class='links') {{$t("information.home")}}
              p(class='links') {{$t("information.about")}}
              p(class='links') {{$t("information.services")}}
              p(class='links') {{$t("information.services")}}
          div(class='flex flex-col gap-3')
            h2(class='text-2xl font-medium text-[#020203]') {{$t("support.title")}}
            div(class='space-y-1')
              p(class='links')  {{$t("support.faqs")}}
              p(class='links')  {{$t("support.terms")}}
              p(class='links') {{$t("support.privacy")}}
        div.flex.justify-start.justify-center(class='lg:justify-start')
            img(:src='footer?.logo' :alt="$t('logo')" loading="lazy" width="200" height="60")
        div.flex.gap-8.justify-center(class='md:justify-start')
          div(class='flex flex-col gap-3')
            h2(class='text-2xl font-medium text-[#020203]') {{$t("contacts.title")}}
            div(class='space-y-1')
              p(class='links') {{footer?.phone}}
              p(class='links') {{footer?.email}}
              div.flex.gap-2.items-center
                a(:href="footer?.socials?.twitter" target="_blank")
                  img(src='../../assets/images/twitter.svg' alt='twitter' loading="lazy" width="24" height="24")
                a(:href="footer?.socials?.instagram" target="_blank") 
                  img(src='../../assets/images/instagram.svg' alt='instagram' loading="lazy" width="24" height="24")
                a(:href="footer?.socials?.facebook" target="_blank") 
                  img(src='../../assets/images/facebook.svg' alt='facebook' loading="lazy" width="24" height="24") 
        div(class='flex flex-col gap-3').justify-center(class='md:justify-start')
            h2(class='text-2xl font-medium text-[#020203] text-center md:text-start') {{$t("subscribe.title")}}
            div(class=' flex flex-col  items-center md:items-start gap-3')
              input(class='w-full sm:max-w-[300px] lg:max-w-full h-[37px] border outline-none rounded-3xl px-3' type='email' placeholder='Enter your email')
              button(class='bg-[#F4F4F4] text-black py-3 px-4 w-fit rounded-full  font-normal text-base') {{$t("subscribe.button")}} 
    div(class='flex justify-center lg:justify-end items-center gap-2 py-6 px-12 border-t text-base font-normal border-[#C2C2D6]  text-[#020203]') 
          span  {{$t("RightsHistory")}}
          span.text-3xl ©
          span {{$t("Rights")}}

</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import HomeStore from "../../stores/homeData";

const store = HomeStore();

const { footer } = storeToRefs(store);
</script>

<style scoped>
.links {
  @apply font-normal text-lg text-[#020203];
}
</style>
