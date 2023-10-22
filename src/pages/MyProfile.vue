<script>
import BaseNavLi from '../components/BaseNavLi.vue';
import Loader from '../components/Loader.vue';
import { getUserProfileById } from '../services/user';
import { subscribeToAuth, logout } from "../services/auth";

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
      loggedUser: {}
    }
  },
  methods: {
    handleLogout() {
      logout();
      this.$router.push('/iniciar-sesion');
    }
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
          <div>
            <p>{{ loggedUser.email }}</p>
            <p>{{ loggedUser.rol }}</p>
          </div>
          <button class="btn btn-dark">Editar mi perfil</button>
        <div>
          <router-link :to="`/usuario/1zIiuPCeTDXCaWu1JBnZIozLDG53/chat`" class="btn btn-info text-black mx-auto my-3">Ir al chat con el
            admin</router-link>
        </div>
      </div>
    </div>
  </template>
</template>