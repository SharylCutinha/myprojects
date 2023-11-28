<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">SC Commerce</NuxtLink>
        <ul class="flex gap-4">
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products" class="btn">Prdoucts</NuxtLink>
          </li>
          <li class="group inline-block">
            <img
              class="object-cover w-8 h-8 rounded-full"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
              alt=""
            />
            <!-- <div class="dropdown-menu">
              <DropDown />
            </div> -->
            <div class="">
              <DropDown />
            </div>
          </li>
        </ul>
      </nav>
      <NavBar />
    </header>

    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: #0a945f;
}
</style>
