<script>
import BaseInput from "../components/BaseInput.vue";
import BaseLabel from "../components/BaseLabel.vue";
import BaseNavLi from "../components/BaseNavLi.vue";
import BaseTextarea from "../components/BaseTextarea.vue";
import Loader from "../components/Loader.vue";
import { getUserProfileById } from "../services/user";
import { subscribeToAuth, logout } from "../services/auth";
import { db } from "../services/firebase";
import { doc, updateDoc } from "firebase/firestore";

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
    handleLogout() {
      logout();
      this.$router.push("/iniciar-sesion");
    },
    toggleEditMode() {
      this.editMode = !this.editMode;
      if (this.editMode) {
        this.editedUser = { ...this.loggedUser };
      }
    },
    async handleUpdateUser() {
      try {
        const userRef = doc(db, "users", this.loggedUser.id);
        await updateDoc(userRef, {
          fullName: this.editedUser.fullName,
          bio: this.editedUser.bio,
        });
        this.editMode = false;
      } catch (error) {
        console.error("Error al actualizar el usuario:", error);
      }
    },
  },
  mounted() {
    subscribeToAuth(async (user) => {
      console.log("nueva autenticacion:", user);
      this.user = { ...user };
      this.loggedUser = await getUserProfileById(this.user.id);
      console.log("usuario logeado:", this.loggedUser);
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
            <p v-if="editedUser.fullName">Nombre: {{ editedUser.fullName }}</p>
            <p v-if="editedUser.bio">Biografía: {{ editedUser.bio }}</p>
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
              />
            </div>
            <div class="form-group">
              <BaseLabel for="bio">Biografía</BaseLabel>
              <BaseTextarea
                id="bio"
                v-model="editedUser.bio"
                placeholder="Biografía"
              ></BaseTextarea>
            </div>
            <button class="btn btn-success my-2" type="submit">Guardar</button>
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
