<template>
  <div
    id="indicators-carousel"
    class="relative w-full"
    data-carousel="static"
  >
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
      <!-- Carousel items -->
      <div
        v-for="(item, index) in carouselItems"
        :key="index"
        :class="[
          'duration-100',
          'ease-in-out',
          { hidden: activeIndex !== index },
          { active: activeIndex === index },
        ]"
        data-carousel-item
      >
        <img
          :src="item.image"
          class="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="Slider Image"
        />
      </div>

      <!-- Indicators -->
      <div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex">
        <span
          v-for="(item, index) in carouselItems"
          :key="index"
          class="block w-2 h-2 mx-1 rounded-full cursor-pointer"
          :class="{
            'bg-orange-500': activeIndex === index,
            'bg-gray-400': activeIndex !== index,
          }"
          @click="goToItem(index)"
        ></span>
      </div>
    </div>
    <!-- Slider controls -->
    <button
      type="button"
      class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-prev
      @click="prevItem"
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          class="w-4 h-4 text-white dark:text-gray-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>
    <button
      type="button"
      class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-next
      @click="nextItem"
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          class="w-4 h-4 text-white dark:text-gray-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
        <span class="sr-only">Next</span>
      </span>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const {banners} = defineProps(['banners'])
const carouselItems = banners;


const activeIndex = ref(0);
let timerId;

function nextItem() {
  activeIndex.value = (activeIndex.value + 1) % carouselItems.length;
}

function prevItem() {
  activeIndex.value =
    (activeIndex.value - 1 + carouselItems.length) % carouselItems.length;
}

function goToItem(index) {
  activeIndex.value = index;
}

function startAutoPlay() {
  timerId = setInterval(() => {
    nextItem();
  }, 5000);
}

function stopAutoPlay() {
  clearInterval(timerId);
}

onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  stopAutoPlay();
});

</script>

<style scoped></style>
