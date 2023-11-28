<template>
  <div class="card text-center">
    <img :src="product.image" alt="No Product" class="image" />
    <p class="font-bold truncate text-gray-500 m-4">{{ product.title }}</p>
    <p class="font-bold text-black-500 m-4 text-sm">${{ product.price }}</p>
    <NuxtLink :to="`/products/${product.id}`">
      <p class="btn my-4">View Details</p>
    </NuxtLink>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped>
.image {
  max-height: 120px;
  min-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
</style>
