<template>
  <NuxtLoadingIndicator />
</template>

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
