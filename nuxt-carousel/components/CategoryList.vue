<template>
  <div>
    <h3 class="text-sm capitalize py-2" @click="onCategoryClick">{{ category }} ({{categoryProducts.length}})</h3>
  </div>
</template>

<script setup>
const { category } = defineProps(["category"]);

if(category) {
  fetchProducts();
}
const categoryProducts = ref([]);
async function fetchProducts() {
  const response = await fetch("https://fakestoreapi.com/products/category/"+category);
  categoryProducts.value = await response.json();
}

const onCategoryClick = () => {

  //const { data: products } = await useFetch("https://fakestoreapi.com/products/category/category");

}
</script>

<style scoped></style>
