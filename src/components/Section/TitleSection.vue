<template lang="pug">
  div.marquee-container
    p(class='max-md:text-4xl').marquee-text.text-6xl.font-bold.mt-4.mb-14
      | من العصور القديمة إلى يومنا هذا، تستمر رحلتنا في تقديم الأفضل للمرأة
      | الحديثة. نستمد الإلهام من تراثنا الغني ونمزجه مع اللمسات المعاصرة لنقدم لك
      | مجموعة متنوعة من المنتجات التي تعكس أناقة وتطور الماضي مع لمسة عصرية.
</template>

<script setup lang="ts"></script>

<style scoped>
.marquee-container {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  position: relative;
}

.marquee-text {
  display: inline-block;
  animation: marquee 15s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  99% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
