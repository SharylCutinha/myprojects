<template>
  <div class="absolute z-50">
    <ul class="dropdown-items">
      <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
        <NuxtLink
          to="../account"
          class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
        >
          Account
        </NuxtLink>
      </li>
      <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
        <NuxtLink
          to=""
          class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
        >
          Settings
        </NuxtLink>
      </li>

      <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
        <NuxtLink
          to=""
          class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
        >
          Sign Out
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style scoped></style>
