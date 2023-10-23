<script>
import BaseInput from "../components/BaseInput.vue";
import BaseLabel from "../components/BaseLabel.vue";
import BaseNavLi from "../components/BaseNavLi.vue";
import BaseTextarea from "../components/BaseTextarea.vue";
import Loader from "../components/Loader.vue";
import { getUserProfileById, updateUserData } from "../services/user";
import { subscribeToAuth, logout } from "../services/auth";

export default {
  name: "MyProfile",
  components: { Loader, BaseNavLi, BaseInput, BaseLabel, BaseTextarea },
  data() {
    return {
      userLoding: true,
      user: {
        id: null,
        email: null,
        rol: null,
      },
      loggedUser: {},
      editedUser: {
        fullName: "",
        bio: "",
      },
      editMode: false,
    };
  },
  methods: {
    toggleEditMode() {
      this.editMode = !this.editMode;
      if (this.editMode) {
        this.editedUser = { ...this.loggedUser };
      }
    },
    async handleUpdateUser() {
      const userId = this.loggedUser.id;
      updateUserData(userId, this.editedUser);
      this.loggedUser.fullName = this.editedUser.fullName;
      this.loggedUser.bio = this.editedUser.bio;
      this.editMode = false;
    },
  },
  mounted() {
    subscribeToAuth(async (user) => {
      this.user = { ...user };
      this.loggedUser = await getUserProfileById(this.user.id);
      this.userLoding = false;
    });
  },
};
</script>
<template>
  <Loader v-if="userLoding" />
  <template v-else>
    <div class="container d-flex justify-content-around">
      <div class="">
        <h1 class="mb-3 font-bold text-3xl">
          Mi perfil <i class="fa-solid fa-user mx-2" style="color: #21496b"></i>
        </h1>
        <div class="p-2">
          <div class="main-user-info">
            <p v-if="loggedUser.fullName">Nombre: {{ loggedUser.fullName }}</p>
            <p v-if="loggedUser.bio">Biografía: {{ loggedUser.bio }}</p>
          </div>
          <div class="main-user-info">
            <p>
              Mail: <span class="fw-bold">{{ loggedUser.email }}</span>
            </p>
            <p>
              Mi Rol: <span class="fw-bold">{{ loggedUser.rol }}</span>
            </p>
          </div>
        </div>
        <button v-if="!editMode" class="btn btn-dark" @click="toggleEditMode">
          Editar mi perfil
        </button>

        <!-- Form de editar perfil del usuario -->
        <div v-if="editMode">
          <form @submit.prevent="handleUpdateUser" class="form my-2">
            <div class="form-group my-3">
              <BaseLabel for="fullName">Nombre Completo</BaseLabel>
              <BaseInput
                id="fullName"
                v-model="editedUser.fullName"
                placeholder="Nombre completo"
                required
              />
            </div>
            <div class="form-group">
              <BaseLabel for="bio">Biografía</BaseLabel>
              <BaseTextarea
                id="bio"
                v-model="editedUser.bio"
                placeholder="Biografía"
                required
              ></BaseTextarea>
            </div>
            <button class="btn btn-success my-2" type="submit">Guardar</button>
            <button
              editMode="false"
              class="btn btn-secondary my-2 mx-2"
              type="submit"
            >
              Cerrar
            </button>
          </form>
        </div>

        <div>
          <router-link
            :to="`/usuario/1zIiuPCeTDXCaWu1JBnZIozLDG53/chat`"
            class="btn btn-info text-black mx-auto my-3"
          >
            Ir al chat con el admin
          </router-link>
        </div>
      </div>
    </div>
  </template>
</template>
