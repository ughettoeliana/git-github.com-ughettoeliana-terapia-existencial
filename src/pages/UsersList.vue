<script setup>
import Loader from "../components/Loader.vue";
import PanelAdminNav from "../components/PanelAdminNav.vue";
import { getUsers } from "../services/user";
import { ref, onMounted, computed } from "vue";

const chatsLoading = ref(true);
let users = [];
let filteredUsers = [];

const getUsersData = async () => {
  users = await getUsers();
  updateFilteredUsers();
  chatsLoading.value = false;
};

const updateFilteredUsers = () => {
  filteredUsers = filteredUsersList.value;
};

onMounted(() => {
  getUsersData();
});

const filteredUsersList = computed(() => {
  return users.filter((user) => user.rol === "user");
});
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <h1 class="text-center text-2xl">Usuarios</h1>
    <PanelAdminNav />
    <Loader v-if="chatsLoading" />
    <template v-else>
      <div class="flex flex-wrap mx-auto my-10">
        <div
          class="w-[calc(33.33% - 1rem)] px-2 mb-4"
          v-for="user in filteredUsers"
          :key="user.id"
        >
          <div class="bg-lightBlue p-4 rounded-lg">
            <router-link
              :to="`/usuario/${user.id}`"
              class="mr-2 dark-blue-text link-underline bold-text"
              >{{ user.email }}</router-link
            >
            <router-link
              :to="`/usuario/${user.id}/chat`"
              class="p-3 text-white bg-primary rounded-md block mt-2"
              >Ir al chat</router-link
            >
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
