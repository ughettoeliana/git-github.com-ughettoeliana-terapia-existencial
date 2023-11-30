<script setup>
import { ref, onMounted } from "vue";
import Loader from "../components/Loader.vue";
import BaseButton from "../components/BaseButton.vue";
import { getUserProfileById, updateUserData } from "../services/user";
import { subscribeToAuth } from "../services/auth";
import { getHiredServices } from "../services/service";
import BaseInput from "../components/BaseInput.vue";
import BaseLabel from "../components/BaseLabel.vue";
import BaseTextarea from "../components/BaseTextarea.vue";
const userLoding = ref(true);
const user = ref({
  id: null,
  email: null,
  rol: null,
});
const loggedUser = ref({});
const editedUser = ref({
  fullName: "",
  bio: "",
});
const editMode = ref(false);
const hiredServices = ref([]);

const toggleEditMode = () => {
  editMode.value = !editMode.value;
  if (editMode.value) {
    editedUser.value = { ...loggedUser.value };
  }
};

const handleUpdateUser = () => {
  try {
    const userId = loggedUser.value.id;
    updateUserData(userId, editedUser.value);
    loggedUser.value.fullName = editedUser.value.fullName;
    loggedUser.value.bio = editedUser.value.bio;
    editMode.value = false;
  } catch (error) {
    console.error(error);
  }
};

onMounted(async () => {
  subscribeToAuth(async (userData) => {
    user.value = { ...userData };
    loggedUser.value = await getUserProfileById(user.value.id);
    userLoding.value = false;
    hiredServices.value = await getHiredServices(user.value.id);
  });
});
</script>
<template>
  <Loader v-if="userLoding" />
  <template v-else>
    <div class="flex flex-row justify-center my-5 py-5 min-h-screen">
      <div class="flex flex-col items-start">
        <h1 class="text-3xl py-3">
          Mi perfil
          <i
            class="fa-solid fa-user mx-2 my-profile-icon"
            style="color: #21496b"
          ></i>
        </h1>
        <div class="">
          <div class="py-2">
            <p v-if="loggedUser.fullName" class="py-2">
              Nombre:
              <span class="font-semibold">{{ loggedUser.fullName }}</span>
            </p>
            <p v-if="loggedUser.bio" class="py-2">
              Biografía: <span class="font-semibold">{{ loggedUser.bio }}</span>
            </p>
          </div>
          <div class="main-user-info">
            <p class="py-2">
              Mail:
              <span class="">
                <span class="font-semibold">{{ loggedUser.email }}</span></span
              >
            </p>
            <p class="py-2">
              Mi Rol:
              <span class="">
                <span class="font-semibold">{{ loggedUser.rol }}</span></span
              >
            </p>
          </div>
        </div>
        <BaseButton v-if="!editMode" class="px-10 my-2" @click="toggleEditMode">
          Editar mi perfil
        </BaseButton>

        <!-- Form de editar perfil del usuario -->
        <div v-if="editMode" class="flex flex-col">
          <form @submit.prevent="handleUpdateUser" class="my-5">
            <div class="flex flex-col">
              <BaseLabel for="fullName">Nombre Completo</BaseLabel>
              <BaseInput
                class="my-1"
                id="fullName"
                v-model="editedUser.fullName"
                placeholder="Nombre completo"
                required
              />
            </div>
            <div class="my-5">
              <BaseLabel for="bio">Biografía</BaseLabel>
              <BaseTextarea
                id="bio"
                v-model="editedUser.bio"
                placeholder="Biografía"
                required
                class="my-1"
              ></BaseTextarea>
            </div>
            <div class="flex justify-around items-center">
              <BaseButton
                editMode="false"
                type="submit"
                class="bg-slate-400 mb-3 px-5"
              >
                Cerrar
              </BaseButton>
              <BaseButton class="mb-2 px-5" type="submit">Guardar</BaseButton>
            </div>
          </form>
        </div>
        <div class="my-4">
          <router-link
            :to="`/usuario/1zIiuPCeTDXCaWu1JBnZIozLDG53/chat`"
            class="bg-primary text-white rounded-lg p-3"
            v-if="!editMode"
          >
            Ir al chat con el admin
          </router-link>
        </div>
      </div>
      <div>
        <div
          class="p-5 flex flex-col"
          v-for="hiredService in hiredServices"
          :key="hiredService.id"
        >
          <div class="rounded-xl border border-solid border-slate-200 p-5">
            <div>
              <h2 class="text-darkBlue text-xl font-semibold">
                {{ hiredService.name }}
              </h2>
              <p>
                <i class="fa-solid fa-clock" style="color: #21496b"></i>
                {{ hiredService.time }}
              </p>
              <p>$ {{ hiredService.price }}</p>
              <p>{{ hiredService.appointment.date }}</p>
              <p>{{ hiredService.appointment.hour  }}</p>
              <p class="py-2">
                Agendaste una sesión con el consultor Daniel del Valle
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>
