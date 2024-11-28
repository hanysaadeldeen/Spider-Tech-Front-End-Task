<!-- <template lang="pug">
  footer(class="footer bg-[#DEEBF6]")
    div.container.mx-auto.px-6.py-10
      div(class='grid grid-cols-12 gap-4 ')
        div.flex.flex-wrap.gap-8(class='grid-cols-4')
          div(class='flex flex-col gap-3')
            h2(class='text-2xl font-medium text-[#020203]') Information
            div(class='space-y-1')
              p(class='links') Home
              p(class='links') About Us
              p(class='links') Our Services
              p(class='links') Our Products
          div(class='flex flex-col gap-3')
            h2(class='text-2xl font-medium text-[#020203]') Support
            div(class='space-y-1')
              p(class='links') FAQs
              p(class='links') Terms & Conditions
              p(class='links') Privacy Policy
        div.flex.justify-start(class='grid-cols-3')  
          img(src='../../assets/images/Logo.svg' alt='logo' loading="lazy" width="200" height="60")
        div.flex.gap-8(class='grid-cols-4')
          div(class='flex flex-col gap-3')
            h2(class='text-2xl font-medium text-[#020203]') Contacts
            div(class='space-y-1')
              p(class='links') 0096 6444 673 56
              p(class='links') support@womansecrets.com
              div.flex.gap-2.items-center
                img(src='../../assets/images/instagram.svg' alt='instagram' loading="lazy"  width="24" height="24")
                img(src='../../assets/images/instagram.svg' alt='instagram' loading="lazy" width="24" height="24")
                img(src='../../assets/images/facebook.svg' alt='facebook' loading="lazy" width="24" height="24") 
          div(class='flex flex-col gap-3')
            h2(class='text-2xl font-medium text-[#020203]') Subcribe For More
            div(class='space-y-3 space-x-3')
              input(class='w-[337px] h-[37px] border outline-none rounded-3xl px-3' type='email' placeholder='Enter your email')
              button(class='bg-[#F4F4F4] text-black py-3 px-4 rounded-full  font-normal text-base') SEND -->
<template lang="pug">
  footer(class="footer bg-[#DEEBF6]")
    div.container.mx-auto.py-10
      div(class='grid grid-cols-12 gap-4')
        div(class='col-span-3 flex flex-wrap gap-8')
          div(class='flex flex-col gap-3')
            h2(class='text-2xl font-medium text-[#020203]') Information
            div(class='space-y-1')
              p(class='links') Home
              p(class='links') About Us
              p(class='links') Our Services
              p(class='links') Our Products
          div(class='flex flex-col gap-3')
            h2(class='text-2xl font-medium text-[#020203]') Support
            div(class='space-y-1')
              p(class='links') FAQs
              p(class='links') Terms & Conditions
              p(class='links') Privacy Policy
        div(class='col-span-3 flex justify-center')
          img(src='../../assets/images/Logo.svg' alt='logo' loading="lazy" width="200" height="60")
        div(class='col-span-6 flex flex-wrap gap-8')
          div(class='flex flex-col gap-3')
            h2(class='text-2xl font-medium text-[#020203]') Contacts
            div(class='space-y-1')
              p(class='links') 0096 6444 673 56
              p(class='links') support@womansecrets.com
              div.flex.gap-2.items-center
                img(src='../../assets/images/instagram.svg' alt='instagram' loading="lazy" width="24" height="24")
                img(src='../../assets/images/instagram.svg' alt='instagram' loading="lazy" width="24" height="24")
                img(src='../../assets/images/facebook.svg' alt='facebook' loading="lazy" width="24" height="24") 
          div(class='flex flex-col gap-3')
            h2(class='text-2xl font-medium text-[#020203]') Subscribe For More
            div(class='flex flex-col gap-3')
              input(class='w-[337px] h-[37px] border outline-none rounded-3xl px-3' type='email' placeholder='Enter your email')
              button(class='bg-[#F4F4F4] text-black py-3 w-fit px-4 rounded-full font-normal text-base') SEND

</template>

<script setup lang="ts">
// (class='border border-b-[#C2C2D6]')
</script>

<style scoped>
.links {
  @apply font-normal text-lg text-[#020203];
}
</style>
