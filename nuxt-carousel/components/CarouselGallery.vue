<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(banner, index) in banners" :key="index">
        <img :src="banner.image" alt="Banner Image" />
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      banners: [
        { image: '/assets/images/banner-1.jpg' },
        { image: '/assets/images/banner-2.jpg' },
        { image: '/assets/images/banner-1.jpg' },
      ],
    };
  },
  mounted() {
    // Initialize Swiper when the component is mounted
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  },
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center the image */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
