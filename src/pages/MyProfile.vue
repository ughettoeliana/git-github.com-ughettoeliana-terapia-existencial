<script>
import BaseNavLi from '../components/BaseNavLi.vue';
import Loader from '../components/Loader.vue';
import { getUserProfileById } from '../services/user';
import { subscribeToAuth, logout } from "../services/auth";
import { db } from '../services/firebase';
import { doc, updateDoc } from 'firebase/firestore';

export default {
  name: 'MyProfile',
  components: { Loader, BaseNavLi },
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
        fullName: '',
        bio: '',
      },
      editMode: false,
    };
  },
  methods: {
    handleLogout() {
      logout();
      this.$router.push('/iniciar-sesion');
    },
    toggleEditMode() {
      this.editMode = !this.editMode;
      if (this.editMode) {
        this.editedUser = { ...this.loggedUser };
      }
    },
    async handleUpdateUser() {
      try {
        const userRef = doc(db, 'users', this.loggedUser.id);
        await updateDoc(userRef, {
          fullName: this.editedUser.fullName,
          bio: this.editedUser.bio,
        });
        this.editMode = false;

      } catch (error) {
        console.error('Error al actualizar el usuario:', error);
      }
    },

  },
  mounted() {
    subscribeToAuth(async user => {
      console.log('nueva autenticacion:', user)
      this.user = { ...user };
      this.loggedUser = await getUserProfileById(this.user.id);
      console.log('usuario logeado:', this.loggedUser)
      this.userLoding = false;

    });
  },
}
</script>
<template>
  <Loader v-if="userLoding" />
  <template v-else>
    <div class="container d-flex justify-content-around">
      <div class="">
        <h1 class="mb-3 font-bold text-3xl">Mi perfil <i class="fa-solid fa-user mx-2" style="color: #21496b;"></i></h1>
        <div class="p-2">
          <p>Mail: <span class="fw-bold">{{ loggedUser.email }}</span></p>
          <p>Mi Rol: <span class="fw-bold">{{ loggedUser.rol }}</span></p>
        </div>
        <button class="btn btn-dark" @click="toggleEditMode">Editar mi perfil</button>

        <!-- Form de editar perfil del usuario -->
        <div v-if="editMode">
          <form @submit.prevent="handleUpdateUser">
            <input v-model="editedUser.fullName" placeholder="Nombre completo" />
            <textarea v-model="editedUser.bio" placeholder="Biografía"></textarea>
            <button type="submit">Guardar Cambios</button>
          </form>
        </div>
        <div v-else>
          <div>
            <h2>{{ user.fullName }}</h2>
            <p>{{ user.bio }}</p>
          </div>
        </div>

        <div>
          <router-link :to="`/usuario/1zIiuPCeTDXCaWu1JBnZIozLDG53/chat`" class="btn btn-info text-black mx-auto my-3">Ir
            al chat con el
            admin</router-link>
        </div>
      </div>
    </div>
  </template>
</template>