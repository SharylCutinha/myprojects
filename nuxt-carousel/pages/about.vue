<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
      perspiciatis nesciunt explicabo. Autem voluptate ad ut accusantium sit
      quaerat ipsum?
    </p>

    <div>
      <ul class="list-disc mt-5">
        <li>Now this is a story all about how, my life got changed</li>
        <li>Welcome to the world of ecommerce</li>
      </ul>

      <ol class="list-decimal mt-5">
        <li>
          Now this is a story all about how, my life got flipped-turned upside
          down
        </li>
        <li>
          Now this is a story all about how, my life got flipped-turned upside
          down
        </li>
      </ol>
    </div>

    <div class="mt-10">
      <h3 class="py-5">Simple Table</h3>
      <table class="shadow-lg bg-white">
        <tr>
          <th class="bg-blue-100 border text-left px-8 py-4">Company</th>
          <th class="bg-blue-100 border text-left px-8 py-4">Contact</th>
          <th class="bg-blue-100 border text-left px-8 py-4">Country</th>
        </tr>
        <tr>
          <td class="border px-8 py-4">Alfreds Futterkiste</td>
          <td class="border px-8 py-4">Dante Sparks</td>
          <td class="border px-8 py-4">Italy</td>
        </tr>
        <tr>
          <td class="border px-8 py-4">Centro comercial Moctezuma</td>
          <td class="border px-8 py-4">Neal Garrison</td>
          <td class="border px-8 py-4">Spain</td>
        </tr>
        <tr>
          <td class="border px-8 py-4">Ernst Handel</td>
          <td class="border px-8 py-4">Maggie O'Neill</td>
          <td class="border px-8 py-4">Austria</td>
        </tr>
      </table>
    </div>

    <div class="mt-10">
      <h3 class="py-5">Bordered Table</h3>
      <table class="shadow-lg bg-white border-separate">
        <tr>
          <th class="bg-blue-100 border text-left px-8 py-4">Company</th>
          <th class="bg-blue-100 border text-left px-8 py-4">Contact</th>
          <th class="bg-blue-100 border text-left px-8 py-4">Country</th>
        </tr>
        <tr class="hover:bg-gray-300" tabindex="0">
          <td class="border px-8 py-4">Alfreds Futterkiste</td>
          <td class="border px-8 py-4">Dante Sparks</td>
          <td class="border px-8 py-4">Italy</td>
        </tr>
        <tr class="active:bg-red-200">
          <td class="border px-8 py-4">Centro comercial Moctezuma</td>
          <td class="border px-8 py-4">Neal Garrison</td>
          <td class="border px-8 py-4">Spain</td>
        </tr>
        <tr>
          <td class="border px-8 py-4">Ernst Handel</td>
          <td class="border px-8 py-4">Maggie O'Neill</td>
          <td class="border px-8 py-4">Austria</td>
        </tr>
      </table>
    </div>

    <div class="mt-10 mb-20">
      <h3 class="py-5">All Invoices</h3>
      <!-- component -->
      <section class="container mx-auto">
        <div class="flex flex-col">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div
              class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"
            >
              <div
                class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg"
              >
                <table
                  class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
                >
                  <thead class="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div class="flex items-center gap-x-3">
                          <button class="flex items-center gap-x-2">
                            <span>Invoice</span>
                          </button>
                        </div>
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Date
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Status
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Customer
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Purchase
                      </th>

                      <th scope="col" class="relative py-3.5 px-4">
                        <span class="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900"
                  >
                    <tr>
                      <td
                        class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap"
                      >
                        <div class="inline-flex items-center gap-x-3">
                          <input
                            type="checkbox"
                            class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                          />

                          <span>#3066</span>
                        </div>
                      </td>
                      <td
                        class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                      >
                        Jan 6, 2022
                      </td>
                      <td
                        class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap"
                      >
                        <div
                          class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800"
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 3L4.5 8.5L2 6"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>

                          <h2 class="text-sm font-normal">Paid</h2>
                        </div>
                      </td>
                      <td
                        class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                      >
                        <div class="flex items-center gap-x-2">
                          <img
                            class="object-cover w-8 h-8 rounded-full"
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                            alt=""
                          />
                          <div>
                            <h2
                              class="text-sm font-medium text-gray-800 dark:text-white"
                            >
                              Arthur Melo
                            </h2>
                            <p
                              class="text-xs font-normal text-gray-600 dark:text-gray-400"
                            >
                              authurmelo@example.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                      >
                        Monthly subscription
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <div class="flex items-center gap-x-6">
                          <button
                            class="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none"
                          >
                            Download
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td
                        class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap"
                      >
                        <div class="inline-flex items-center gap-x-3">
                          <input
                            type="checkbox"
                            class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                          />

                          <span>#3065</span>
                        </div>
                      </td>
                      <td
                        class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                      >
                        Jan 5, 2022
                      </td>
                      <td
                        class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap"
                      >
                        <div
                          class="inline-flex items-center px-3 py-1 text-red-500 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-800"
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9 3L3 9M3 3L9 9"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>

                          <h2 class="text-sm font-normal">Cancelled</h2>
                        </div>
                      </td>
                      <td
                        class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                      >
                        <div class="flex items-center gap-x-2">
                          <img
                            class="object-cover w-8 h-8 rounded-full"
                            src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                            alt=""
                          />
                          <div>
                            <h2
                              class="text-sm font-medium text-gray-800 dark:text-white"
                            >
                              Andi Lane
                            </h2>
                            <p
                              class="text-xs font-normal text-gray-600 dark:text-gray-400"
                            >
                              andi@example.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                      >
                        Monthly subscription
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <div class="flex items-center gap-x-6">
                          <button
                            class="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none"
                          >
                            Download
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td
                        class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap"
                      >
                        <div class="inline-flex items-center gap-x-3">
                          <input
                            type="checkbox"
                            class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                          />

                          <span>#3064</span>
                        </div>
                      </td>
                      <td
                        class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                      >
                        Jan 5, 2022
                      </td>
                      <td
                        class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap"
                      >
                        <div
                          class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800"
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 3L4.5 8.5L2 6"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>

                          <h2 class="text-sm font-normal">Paid</h2>
                        </div>
                      </td>
                      <td
                        class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                      >
                        <div class="flex items-center gap-x-2">
                          <img
                            class="object-cover w-8 h-8 rounded-full"
                            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
                            alt=""
                          />
                          <div>
                            <h2
                              class="text-sm font-medium text-gray-800 dark:text-white"
                            >
                              Kate Morrison
                            </h2>
                            <p
                              class="text-xs font-normal text-gray-600 dark:text-gray-400"
                            >
                              kate@example.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                      >
                        Monthly subscription
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <div class="flex items-center gap-x-6">
                          <button
                            class="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none"
                          >
                            Download
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td
                        class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap"
                      >
                        <div class="inline-flex items-center gap-x-3">
                          <input
                            type="checkbox"
                            class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                          />

                          <span>#3063</span>
                        </div>
                      </td>
                      <td
                        class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                      >
                        Jan 4, 2022
                      </td>
                      <td
                        class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap"
                      >
                        <div
                          class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800"
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 3L4.5 8.5L2 6"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>

                          <h2 class="text-sm font-normal">Paid</h2>
                        </div>
                      </td>
                      <td
                        class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                      >
                        <div class="flex items-center gap-x-2">
                          <img
                            class="object-cover w-8 h-8 rounded-full"
                            src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&q=80"
                            alt=""
                          />
                          <div>
                            <h2
                              class="text-sm font-medium text-gray-800 dark:text-white"
                            >
                              Candice Wu
                            </h2>
                            <p
                              class="text-xs font-normal text-gray-600 dark:text-gray-400"
                            >
                              candice@example.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                      >
                        Monthly subscription
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <div class="flex items-center gap-x-6">
                          <button
                            class="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none"
                          >
                            Download
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td
                        class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap"
                      >
                        <div class="inline-flex items-center gap-x-3">
                          <input
                            type="checkbox"
                            class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                          />

                          <span>#3062</span>
                        </div>
                      </td>
                      <td
                        class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                      >
                        Jan 4, 2022
                      </td>
                      <td
                        class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap"
                      >
                        <div
                          class="inline-flex items-center px-3 py-1 text-gray-500 rounded-full gap-x-2 bg-gray-100/60 dark:bg-gray-800"
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.5 7L2 4.5M2 4.5L4.5 2M2 4.5H8C8.53043 4.5 9.03914 4.71071 9.41421 5.08579C9.78929 5.46086 10 5.96957 10 6.5V10"
                              stroke="#667085"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>

                          <h2 class="text-sm font-normal">Refunded</h2>
                        </div>
                      </td>
                      <td
                        class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                      >
                        <div class="flex items-center gap-x-2">
                          <img
                            class="object-cover w-8 h-8 rounded-full"
                            src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=644&q=80"
                            alt=""
                          />
                          <div>
                            <h2
                              class="text-sm font-medium text-gray-800 dark:text-white"
                            >
                              Orlando Diggs
                            </h2>
                            <p
                              class="text-xs font-normal text-gray-600 dark:text-gray-400"
                            >
                              orlando@example.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                      >
                        Monthly subscription
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <div class="flex items-center gap-x-6">
                          <button
                            class="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none"
                          >
                            Download
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

    
      </section>
    </div>

<div class="w-[1100px] h-[492px] bg-white rounded-xl border border-slate-300 justify-start items-start inline-flex">
    <div class="grow shrink basis-0 flex-col justify-start items-start inline-flex">
        <div class="self-stretch h-11 px-6 py-3 bg-slate-100 border-b border-slate-300 justify-start items-center gap-3 inline-flex">
            <div class="w-5 h-5 p-px border border-black justify-center items-center flex">
                <div class="w-[18px] h-[18px] relative flex-col justify-start items-start flex"></div>
            </div>
            <div class="w-[227px] text-slate-500 text-lg font-medium tracking-widest">Customer</div>
        </div>
        <div class="self-stretch h-16 px-6 py-3 bg-white border-b border-slate-300 justify-start items-center gap-3 inline-flex">
            <div class="w-5 h-5 p-px border border-black justify-center items-center flex">
                <div class="w-[18px] h-[18px] relative flex-col justify-start items-start flex"></div>
            </div>
            <div class="grow shrink basis-0 text-slate-400 text-base font-medium tracking-wider">Kathryn Murphy</div>
        </div>
        <div class="self-stretch h-16 px-6 py-3 bg-white border-b border-slate-300 justify-start items-center gap-3 inline-flex">
            <div class="w-5 h-5 p-px border border-black justify-center items-center flex">
                <div class="w-[18px] h-[18px] relative flex-col justify-start items-start flex"></div>
            </div>
            <div class="grow shrink basis-0 text-slate-400 text-base font-medium tracking-wider">Devon Lane</div>
        </div>
        <div class="self-stretch h-16 px-6 py-3 bg-white border-b border-slate-300 justify-start items-center gap-3 inline-flex">
            <div class="w-5 h-5 p-px border border-black justify-center items-center flex">
                <div class="w-[18px] h-[18px] relative flex-col justify-start items-start flex"></div>
            </div>
            <div class="grow shrink basis-0 text-slate-400 text-base font-medium tracking-wider">Bessie Cooper</div>
        </div>
        <div class="self-stretch h-16 px-6 py-3 bg-white border-b border-slate-300 justify-start items-center gap-3 inline-flex">
            <div class="w-5 h-5 p-px border border-black justify-center items-center flex">
                <div class="w-[18px] h-[18px] relative flex-col justify-start items-start flex"></div>
            </div>
            <div class="grow shrink basis-0 text-slate-400 text-base font-medium tracking-wider">Kristin Watson</div>
        </div>
        <div class="self-stretch h-16 px-6 py-3 bg-white border-b border-slate-300 justify-start items-center gap-3 inline-flex">
            <div class="w-5 h-5 p-px border border-black justify-center items-center flex">
                <div class="w-[18px] h-[18px] relative flex-col justify-start items-start flex"></div>
            </div>
            <div class="grow shrink basis-0 text-slate-400 text-base font-medium tracking-wider">Ronald Richards</div>
        </div>
        <div class="self-stretch h-16 px-6 py-3 bg-white border-b border-slate-300 justify-start items-center gap-3 inline-flex">
            <div class="w-5 h-5 p-px border border-black justify-center items-center flex">
                <div class="w-[18px] h-[18px] relative flex-col justify-start items-start flex"></div>
            </div>
            <div class="grow shrink basis-0 text-slate-400 text-base font-medium tracking-wider">Wade Warren</div>
        </div>
        <div class="self-stretch h-16 px-6 py-3 bg-white border-b border-slate-300 justify-start items-center gap-3 inline-flex">
            <div class="w-5 h-5 p-px border border-black justify-center items-center flex">
                <div class="w-[18px] h-[18px] relative flex-col justify-start items-start flex"></div>
            </div>
            <div class="grow shrink basis-0 text-slate-400 text-base font-medium tracking-wider">Esther Howard</div>
        </div>
    </div>
    <div class="grow shrink basis-0 flex-col justify-start items-start inline-flex">
        <div class="self-stretch h-11 px-6 py-3 bg-slate-100 border-b border-slate-300 justify-start items-center gap-3 inline-flex">
            <div class="grow shrink basis-0 text-slate-500 text-lg font-medium tracking-widest">Date</div>
        </div>
        <div class="self-stretch h-16 px-6 py-3 bg-white border-b border-slate-300 justify-start items-center gap-3 inline-flex">
            <div class="grow shrink basis-0 text-slate-400 text-base font-medium tracking-wider">8/15/17</div>
        </div>
        <div class="self-stretch h-16 px-6 py-3 bg-white border-b border-slate-300 justify-start items-center gap-3 inline-flex">
            <div class="grow shrink basis-0 text-slate-400 text-base font-medium tracking-wider">4/21/12</div>
        </div>
        <div class="self-stretch h-16 px-6 py-3 bg-white border-b border-slate-300 justify-start items-center gap-3 inline-flex">
            <div class="grow shrink basis-0 text-slate-400 text-base font-medium tracking-wider">4/21/12</div>
        </div>
        <div class="self-stretch h-16 px-6 py-3 bg-white border-b border-slate-300 justify-start items-center gap-3 inline-flex">
            <div class="grow shrink basis-0 text-slate-400 text-base font-medium tracking-wider">4/04/18</div>
        </div>
        <div class="self-stretch h-16 px-6 py-3 bg-white border-b border-slate-300 justify-start items-center gap-3 inline-flex">
            <div class="grow shrink basis-0 text-slate-400 text-base font-medium tracking-wider">8/16/13</div>
        </div>
        <div class="self-stretch h-16 px-6 py-3 bg-white border-b border-slate-300 justify-start items-center gap-3 inline-flex">
            <div class="grow shrink basis-0 text-slate-400 text-base font-medium tracking-wider">5/19/12</div>
        </div>
        <div class="self-stretch h-16 px-6 py-3 bg-white border-b border-slate-300 justify-start items-center gap-3 inline-flex">
            <div class="grow shrink basis-0 text-slate-400 text-base font-medium tracking-wider">7/11/19</div>
        </div>
    </div>
    <div class="grow shrink basis-0 flex-col justify-start items-start inline-flex">
        <div class="self-stretch h-11 px-6 py-3 bg-slate-100 border-b border-slate-300 justify-start items-center gap-3 inline-flex">
            <div class="grow shrink basis-0 text-slate-500 text-lg font-medium tracking-widest">Product</div>
        </div>
        <div class="self-stretch h-16 px-6 py-3 bg-white border-b border-slate-300 justify-start items-center gap-3 inline-flex">
            <div class="grow shrink basis-0 text-slate-400 text-base font-medium leading-tight">Gaming Chair, local pickup only</div>
        </div>
        <div class="self-stretch h-16 px-6 py-3 bg-white border-b border-slate-300 justify-start items-center gap-3 inline-flex">
            <div class="grow shrink basis-0 text-slate-400 text-base font-medium tracking-wider">Gopro hero 7 (with receipt)</div>
        </div>
        <div class="self-stretch h-16 px-6 py-3 bg-white border-b border-slate-300 justify-start items-center gap-3 inline-flex">
            <div class="grow shrink basis-0 text-slate-400 text-base font-medium tracking-wider">DJI Mavic Pro 2</div>
        </div>
        <div class="self-stretch h-16 px-6 py-3 bg-white border-b border-slate-300 justify-start items-center gap-3 inline-flex">
            <div class="grow shrink basis-0 text-slate-400 text-base font-medium tracking-wider">Brand New Bike, Local buyer only</div>
        </div>
        <div class="self-stretch h-16 px-6 py-3 bg-white border-b border-slate-300 justify-start items-center gap-3 inline-flex">
            <div class="grow shrink basis-0 text-slate-400 text-base font-medium tracking-wider">Air Jordan 1 Top 3 Sneaker (DS)</div>
        </div>
        <div class="self-stretch h-16 px-6 py-3 bg-white border-b border-slate-300 justify-start items-center gap-3 inline-flex">
            <div class="grow shrink basis-0 text-slate-400 text-base font-medium tracking-wider">Heimer Miller Sofa (Mint Condition)</div>
        </div>
        <div class="self-stretch h-16 px-6 py-3 bg-white border-b border-slate-300 justify-start items-center gap-3 inline-flex">
            <div class="grow shrink basis-0 text-slate-400 text-base font-medium tracking-wider">Lego Star'War edition</div>
        </div>
    </div>
    <div class="grow shrink basis-0 flex-col justify-start items-start inline-flex">
        <div class="self-stretch h-11 px-6 py-3 bg-slate-100 border-b border-slate-300 justify-start items-center gap-3 inline-flex">
            <div class="grow shrink basis-0 text-slate-500 text-lg font-medium tracking-widest">Status</div>
        </div>
        <div class="self-stretch h-16 px-6 py-3 bg-white border-b border-slate-300 justify-start items-center gap-3 inline-flex">
            <div class="p-1 bg-green-500 bg-opacity-10 rounded-xl justify-start items-center gap-1.5 flex">
                <div class="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                <div class="text-green-500 text-xs font-medium tracking-wide">Completed</div>
            </div>
        </div>
        <div class="self-stretch h-16 px-6 py-3 bg-white border-b border-slate-300 justify-start items-center gap-3 inline-flex">
            <div class="p-1 bg-red-500 bg-opacity-10 rounded-xl justify-start items-center gap-1.5 flex">
                <div class="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                <div class="text-red-500 text-xs font-medium tracking-wide">Canceled</div>
            </div>
        </div>
        <div class="self-stretch h-16 px-6 py-3 bg-white border-b border-slate-300 justify-start items-center gap-3 inline-flex">
            <div class="p-1 bg-red-500 bg-opacity-10 rounded-xl justify-start items-center gap-1.5 flex">
                <div class="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                <div class="text-red-500 text-xs font-medium tracking-wide">Canceled</div>
            </div>
        </div>
        <div class="self-stretch h-16 px-6 py-3 bg-white border-b border-slate-300 justify-start items-center gap-3 inline-flex">
            <div class="p-1 bg-green-500 bg-opacity-10 rounded-xl justify-start items-center gap-1.5 flex">
                <div class="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                <div class="text-green-500 text-xs font-medium tracking-wide">Completed</div>
            </div>
        </div>
        <div class="self-stretch h-16 px-6 py-3 bg-white border-b border-slate-300 justify-start items-center gap-3 inline-flex">
            <div class="p-1 bg-red-500 bg-opacity-10 rounded-xl justify-start items-center gap-1.5 flex">
                <div class="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                <div class="text-red-500 text-xs font-medium tracking-wide">Canceled</div>
            </div>
        </div>
        <div class="self-stretch h-16 px-6 py-3 bg-white border-b border-slate-300 justify-start items-center gap-3 inline-flex">
            <div class="p-1 bg-green-500 bg-opacity-10 rounded-xl justify-start items-center gap-1.5 flex">
                <div class="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                <div class="text-green-500 text-xs font-medium tracking-wide">Completed</div>
            </div>
        </div>
        <div class="self-stretch h-16 px-6 py-3 bg-white border-b border-slate-300 justify-start items-center gap-3 inline-flex">
            <div class="p-1 bg-green-500 bg-opacity-10 rounded-xl justify-start items-center gap-1.5 flex">
                <div class="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                <div class="text-green-500 text-xs font-semibold tracking-wide">Completed</div>
            </div>
        </div>
    </div>
</div>    
  </div>
</template>

<script setup></script>

<style scoped></style>
