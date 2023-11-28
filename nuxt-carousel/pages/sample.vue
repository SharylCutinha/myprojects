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
    </div>
  </template>
  
  <script setup>
  const isOpen = ref(false);
  const searchText = ref("");
  const checkboxes = ref([]);
  const dropdownRef = ref(null);
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
  
  
  const filteredUsers = computed(() => {
    if (searchText.value.length === 0) {
      return users;
    } else {
      return users.filter((user) =>
        user.name.toLowerCase().includes(searchText.value.toLowerCase())
      );
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
  