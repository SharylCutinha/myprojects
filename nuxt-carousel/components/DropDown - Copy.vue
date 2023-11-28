<template>
  <div class="">
    <ul class="dropdown-items">
            <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Programming</li>
            <li class="rounded-sm px-3 py-1 hover:bg-gray-100">DevOps</li>
            <li class="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button
                class="w-full text-left flex items-center outline-none focus:outline-none"
              >
                <span class="pr-1 flex-1">Langauges</span>
                <span class="mr-auto">
                  <svg
                    class="fill-current h-4 w-4 transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </span>
              </button>
              <ul
                class="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32"
              >
                <li class="px-3 py-1 hover:bg-gray-100">Javascript</li>
                <li class="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button
                    class="w-full text-left flex items-center outline-none focus:outline-none"
                  >
                    <span class="pr-1 flex-1">Python</span>
                    <span class="mr-auto">
                      <svg
                        class="fill-current h-4 w-4 transition duration-150 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        />
                      </svg>
                    </span>
                  </button>
                  <ul
                    class="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32"
                  >
                    <NuxtLink to="/about">
                      <li class="px-3 py-1 hover:bg-gray-100">2.7</li>
                    </NuxtLink>
                    <li class="px-3 py-1 hover:bg-gray-100">3+</li>
                  </ul>
                </li>
                <li class="px-3 py-1 hover:bg-gray-100">Go</li>
                <li class="px-3 py-1 hover:bg-gray-100">Rust</li>
              </ul>
            </li>
            <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Testing</li>
          </ul>
    <!-- <div
      class="dropdown-menu absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible"
      onClick=""
    >
    <NuxtLink to="/account" class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
    Account
    </NuxtLink>
      <a
        class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
        >Orders</a
      >
      <a
        class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
        >Settings
      </a>
      <a
        class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
        >Sign Out
      </a>
    </div> -->
  </div>
</template>

<script setup></script>

<style scoped></style>
