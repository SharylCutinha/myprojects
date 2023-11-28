<template>
  <div>
    <Carousel :banners="carouselItems"/>
    <br><br><br>

    <!-- <div class="text-black text-[40px] font-semibold leading-[48px]">Headline 1</div>
    <div class="text-black text-[32px] font-semibold leading-[38.40px]">Headline 2</div>
    <div class="text-black text-2xl font-semibold">Headline 3</div>
    <div class="text-zinc-950 text-xl font-semibold leading-normal">Headline 4</div>
    <div class="text-zinc-950 text-lg font-semibold leading-snug">Headline 5</div>
    <div class="text-black text-base font-normal leading-tight">Body Text</div>
    <div class="text-black text-sm font-normal leading-[16.80px]">Labels</div> -->
  </div>
</template>

<script setup>
const carouselItems = [
  { image: "/assets/images/banner-1.jpg" },
  { image: "/assets/images/banner-2.jpg" },
  { image: "https://mdbcdn.b-cdn.net/img/new/slides/041.webp" },
  { image: "/assets/images/banner-3.jpg" },
  { image: "/assets/images/banner-2.jpg" },
];

</script>

<style scoped></style>
