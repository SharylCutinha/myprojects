<template>
  <div class="flex justify-between mt-10 mb-10">
    <div>
      <div>
        <button
          @click="toggleDropdown"
          id="dropdownSearchButton"
          data-dropdown-toggle="dropdownSearch"
          data-dropdown-placement="bottom"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-small rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Search for Users
          <svg
            class="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <div class="mt-2">
          <span
            class="inline-block rounded-lg bg-[#e3e3e3] mr-2 py-1 pl-3 text-xs"
            v-for="user in selectedUsers"
            :key="user.id"
          >
            {{ user.name }}
            <span class="pl-1" @click="onRemoveUser(user)">
              <svg
                class="w-4 h-4 inline-block pt-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <line
                  x1="1"
                  y1="11"
                  x2="11"
                  y2="1"
                  stroke="black"
                  stroke-width="2"
                />
                <line
                  x1="1"
                  y1="1"
                  x2="11"
                  y2="11"
                  stroke="black"
                  stroke-width="2"
                />
              </svg>
            </span>
          </span>
        </div>
        <!-- Dropdown menu -->
        <div
          id="dropdownSearch"
          class="z-10 bg-white rounded-lg shadow w-60 dark:bg-gray-700 mt-2"
          v-if="isOpen"
          ref="dropdownRef"
        >
          <div class="p-3">
            <label for="input-group-search" class="sr-only">Search</label>
            <div class="relative">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="input-group-search"
                class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search user"
                v-model="searchText"
              />
            </div>
          </div>
          <ul
            class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownSearchButton"
          >
            <li>
              <div
                class="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600 border-b"
              >
                <input
                  ref="checkboxes"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  @change="onAddAllUsers($event.target)"
                />
                <label
                  class="w-full py-2 ml-2 text-sm font-medium text-green-600 rounded dark:text-gray-300"
                  >Add all users</label
                >
              </div>
            </li>
            <li v-for="user in filteredUsers" :key="user.id">
              <div
                class="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                <input
                  ref="checkboxes"
                  :id="'checkbox-item-' + user.id"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  @change="onInputChange(user, $event.target)"
                />
                <label
                  :for="'checkbox-item-' + user.id"
                  class="w-full py-2 ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                  >{{ user.name }}</label
                >
              </div>
            </li>
          </ul>
          <a
            href="#"
            class="flex items-center p-3 text-sm font-medium text-red-600 border-t border-gray-200 rounded-b-lg bg-gray-50 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-red-500 hover:underline"
            @click="clearSelection"
          >
            <svg
              class="w-4 h-4 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path
                d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2Z"
              />
            </svg>
            Clear All Selection
          </a>
        </div>
      </div>
    </div>

    <div>
      <div>
        <button
          @click="toggleCountryDropdown"
          id="dropdownSearchButton"
          data-dropdown-toggle="dropdownSearch"
          data-dropdown-placement="bottom"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-small rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Select Country
          <svg
            class="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        <!-- Dropdown menu -->
        <div
          id="dropdownSearch"
          class="z-10 bg-white rounded-lg shadow w-60 dark:bg-gray-700 mt-2"
          v-if="isCountryOpen"
        >
          <div class="p-3">
            <label for="input-group-search" class="sr-only">Search</label>
            <div class="relative">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="input-group-search"
                class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search country"
                v-model="searchCountry"
              />
            </div>
          </div>
          <ul
            class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownSearchButton"
          >
            <li v-for="country in filteredCountries" :key="country.id">
              <div
                class="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                <label
                  class="w-full py-2 ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                  >{{ country.name.common }}</label
                >
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <br /><br />

  <div class="w-1/3">
    <select
      id="countries"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option selected>Choose a country</option>
      <!-- <option
          :value="country.name.common"
          v-for="country in filteredCountries"
          :key="country.id"
        >
          {{ country.name.common }}
        </option> -->
      <option value="US">United States</option>
      <option value="CA">Canada</option>
      <option value="FR">France</option>
      <option value="DE">Germany</option>
    </select>
  </div>

  <br />

  <div class="flex justify between border-t-2">
    <div class="mr-20">
      <h3 class="mb-5 mt-5">
        File input to upload single file with description message
      </h3>
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        for="file_input"
        >Upload file</label
      >
      <input
        class="block w-full text-sm text-gray-900 border border-gray-300 cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        aria-describedby="file_input_help"
        id="file_input"
        type="file"
      />
      <p
        class="mt-1 text-sm text-gray-500 dark:text-gray-300"
        id="file_input_help"
      >
        SVG, PNG, JPG or GIF (MAX. 800x400px).
      </p>
    </div>
    <div>
      <h3 class="mb-5 mt-5">
        File input to upload multiple files with description message
      </h3>

      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        for="multiple_files"
        >Upload file</label
      >
      <input
        class="block w-full text-sm text-gray-900 border border-gray-300 cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="multiple_files"
        type="file"
        multiple
      />
      <p
        class="mt-1 text-sm text-gray-500 dark:text-gray-300"
        id="file_input_help"
      >
        SVG, PNG, JPG or GIF (MAX. 800x400px).
      </p>
    </div>
  </div>
  <br />
  <div class="border-t-2 mt-5">
    <h3 class="mb-5 mt-5">The dropzone file input component</h3>

    <div class="flex items-center justify-center w-full">
      <label
        for="dropzone-file"
        class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span class="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p class="text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
      </label>
    </div>
  </div>
</template>

<script setup>
const isOpen = ref(false);
const isCountryOpen = ref(false);
const searchText = ref("");
const searchCountry = ref("");
const checkboxes = ref([]);
const dropdownRef = ref(null);
const countries = ref([]);
const selectedUsers = ref([]);

const users = [
  { id: 1, name: "Bonnie Green ty" },
  { id: 2, name: "Jese Leos" },
  { id: 3, name: "Michael Gough" },
  { id: 4, name: "Robert Wall" },
  { id: 5, name: "Joseph Mcfall" },
  { id: 6, name: "Leslie Livingston" },
  { id: 7, name: "Roberta Casas" },
];

async function fetchCountryList() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  countries.value = await response.json();
}

fetchCountryList();

const filteredUsers = computed(() => {
  if (searchText.value.length === 0) {
    return users;
  } else {
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchText.value.toLowerCase())
    );
  }
});

const filteredCountries = computed(() => {
  if (searchCountry.value.length === 0) {
    return countries.value.sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    );
  } else {
    return countries.value
      .filter((country) =>
        country.name.common
          .toLowerCase()
          .includes(searchCountry.value.toLowerCase())
      )
      .sort((a, b) => a.name.common.localeCompare(b.name.common));
  }
});

const clearSelection = () => {
  checkboxes.value.forEach((checkbox) => {
    checkbox.checked = false;
  });
  selectedUsers.value = [];
};

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const toggleCountryDropdown = () => {
  isCountryOpen.value = !isCountryOpen.value;
};

const onInputChange = (user, checkbox) => {
  if (checkbox.checked) {
    onSelectUser(user);
  } else {
    onRemoveUser(user);
  }
};

const onSelectUser = (user) => {
  if (
    !selectedUsers.value.some((selectedUser) => selectedUser.id === user.id)
  ) {
    selectedUsers.value.push(user);
  }
};

const onRemoveUser = (user) => {
  selectedUsers.value = selectedUsers.value.filter(
    (selectedUser) => selectedUser.id !== user.id
  );
};

const onAddAllUsers = (checkbox) => {
  if (checkbox.checked) {
    checkboxes.value.forEach((checkbox) => {
      checkbox.checked = true;
      selectedUsers.value = users;
    });
  } else {
    clearSelection();
  }
};
</script>

<style scoped></style>
