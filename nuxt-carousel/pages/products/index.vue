<template>
  <div>
    <Throbber :loading="loading" v-if="loading" />

    <!-- <Throbber :throttle="0" :loading="loading" v-if="loading" /> -->

    <div class="flex justify-end">
      <form class="flex items-center">
        <label for="simple-search" class="sr-only">Search</label>
        <div class="relative" style="width: 220px">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="#a5a5a5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="search"
            class="bg-gray-50 border border-[#e3e3e3] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-[#12b488] block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-[#12b488] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-[#12b488]"
            placeholder="What are you looking for ?"
            v-model="searchQuery"
          />
        </div>
      </form>
    </div>
    <div >
      <div class="mt-5" style="min-height: 500px">
        <div class="flex gap-10" v-if="categories.length > 0">
          <div class="p-5 card" style="max-width: 200px; min-width: 200px">
            <h3 class="font-bold pb-2">All Categories</h3>
            <div v-for="category in categories" :key="category.id">
              <CategoryList :category="category" />
            </div>
          </div>
          <div>
            <div class="grid md:grid-cols-3 gap-5 sm:grid-cols-2">
              <div v-for="p in filteredProducts" :key="p.id">
                <ProductCard :product="p" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue";

const searchQuery = ref("");
const products = ref([]);
const categories = ref([]);
const loading = ref(true);

const filteredProducts = computed(() => {
  if (searchQuery.value.length === 0) {
    return products.value;
  } else {
    const lowerCaseQuery = searchQuery.value.toLowerCase();
    return products.value.filter((product) =>
      product.title.toLowerCase().includes(lowerCaseQuery)
    );
  }
});

// Fetch the products
async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products/");
    products.value = await response.json();

    const catgeoryResponse = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    categories.value = await catgeoryResponse.json();
    if (products.value && categories.value) {
      loading.value = false;
    }
    // loading.value = false;
  } catch (error) {
    console.error("Error fetching products:", error);
    // Set loading to false in case of an error
    loading.value = false;
  }
}

// Call the fetchProducts function when the component is mounted
fetchProducts();

// update the filtered products whenever the search query changes
watch(searchQuery, () => {
  filteredProducts.value = filteredProducts;
});

definePageMeta({
  layout: "products",
});
useHead({ title: "SC Ecommerce | Products" });
</script>
<style scoped>
.nuxt-loading-indicator {
  opacity: 1 !important;
  width: 30px !important;
  height: 30px !important;
  border-radius: 100%;
  left: 50% !important;
  top: 50% !important;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
  border: 1px solid #12b488;
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
