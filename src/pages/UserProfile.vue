<script setup>
import { onMounted, ref } from "vue";
import Loader from "../components/Loader.vue";
import { getUserProfileById } from "../services/user";
import { useRoute } from "vue-router";

const route = useRoute();
const loggedUser = ref({});
const userLoding = ref(true);
const user = ref({
  id: null,
  email: null,
  rol: null,
});

onMounted(async () => {
  userLoding.value = true;
  loggedUser.value = await getUserProfileById(route.params.id);
  userLoding.value = false;
});
</script>
<template>
  <Loader v-if="userLoding" />
  <template v-else>
    <div class="flex flex-row justify-center my-5 py-5 min-h-screen">
      <div class="flex flex-col items-start">
        <h1 class="text-3xl py-3">
          <i class="fa-solid fa-user" style="color: #21496b"></i> Perfil de
        </h1>
        <div class="">
          <div class="py-2">
            <p v-if="loggedUser.fullName">
              Nombre:
              <span class="font-semibold"> {{ loggedUser.fullName }}</span>
            </p>
            <p v-if="loggedUser.bio">
              Biografía: <span class="font-semibold">{{ loggedUser.bio }}</span>
            </p>
          </div>
          <div class="flex flex-col items-start">
            <p>
              Mail: <span class="font-semibold">{{ loggedUser.email }}</span>
            </p>
            <p>
              Mi Rol: <span class="font-semibold">{{ loggedUser.rol }}</span>
            </p>
          </div>
        </div>
        <router-link
          :to="`/usuario/${loggedUser.id}/chat`"
          class="bg-primary text-white rounded-lg p-3 my-5"
          >Mensaje</router-link
        >
      </div>
    </div>
  </template>
</template>
