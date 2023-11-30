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
    <div class="main-user-info-container">
      <h1 class="text-2xl">
        <i class="fa-solid fa-user" style="color: #21496b"></i> Perfil de
      </h1>
      <div class="">
        <div class="main-user-info">
          <p v-if="loggedUser.fullName">
            Nombre: <span class="bold-text"> {{ loggedUser.fullName }}</span>
          </p>
          <p v-if="loggedUser.bio">
            Biografía: <span class="bold-text">{{ loggedUser.bio }}</span>
          </p>
        </div>
        <div class="main-user-info">
          <p>
            Mail: <span class="bold-text">{{ loggedUser.email }}</span>
          </p>
          <p>
            Mi Rol: <span class="bold-text">{{ loggedUser.rol }}</span>
          </p>
        </div>
      </div>
      <router-link
        :to="`/usuario/${loggedUser.id}/chat`"
        class="btn-primary mr-2 mt-2"
        >Mensaje</router-link
      >
    </div>
  </template>
</template>
