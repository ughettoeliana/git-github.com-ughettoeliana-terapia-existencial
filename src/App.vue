<script>
import BaseButton from "./components/BaseButton.vue";
import BaseNavLi from "./components/BaseNavLi.vue";
import { subscribeToAuth, logout } from "./services/auth";
import { getUserProfileById } from "./services/user";

export default {
  name: "App",
  components: { BaseButton, BaseNavLi },
  data() {
    return {
      user: {
        id: null,
        email: null,
        rol: null,
      },
      loggedUser: {},
    };
  },
  methods: {
    handleLogout() {
      logout();
      this.$router.push("/iniciar-sesion");
    },
  },
  mounted() {
    subscribeToAuth(async (user) => {
      console.log("nueva autenticacion:", user);
      this.user = { ...user };
      this.loggedUser = await getUserProfileById(this.user.id);
      console.log("usuario logeado:", this.loggedUser);
    });
  },
};
</script>

<template>
  <header class="header">
    <nav class="navbar">
      <div class="logo">
        <div class="logo-container">
          <img src="../public/logo.svg" alt="Logo" width="30" height="24" />
        </div>
        <a class="" href="/"> Consultoría Psicológica </a>
      </div>
      <ul class="nav">
        <BaseNavLi>
          <router-link to="/quienes-somos" class="grey-text"
            >Acerca de nosotros</router-link
          >
        </BaseNavLi>
        <BaseNavLi>
          <router-link to="/servicios" class="grey-text">Servicios</router-link>
        </BaseNavLi>

        <template v-if="loggedUser.rol === 'admin'">
          <BaseNavLi
            ><router-link to="/panel" class="grey-text"
              >Panel Administrador</router-link
            >
          </BaseNavLi>
        </template>
        <template v-else-if="loggedUser.rol === 'user'">
          <BaseNavLi>
            <router-link to="/perfil" class="grey-text">Mi Perfil</router-link>
          </BaseNavLi>
        </template>
        <template v-if="user.id === null">
          <BaseNavLi
            ><router-link to="/iniciar-sesion" class="login-btn"
              >Iniciar sesion</router-link
            >
          </BaseNavLi>
          <BaseNavLi
            ><router-link to="/registro" class="register-btn"
              >Registro</router-link
            >
          </BaseNavLi>
        </template>
        <template v-else>
          <BaseNavLi>
            <form action="#" @submit.prevent="handleLogout">
              <button class="logout-button">
                <strong>{{ user.email }}</strong> Cerrar Sesion
              </button>
            </form>
          </BaseNavLi>
        </template>
      </ul>
    </nav>
  </header>
  <div class="content">
    <div>
      <router-view> </router-view>
    </div>
  </div>
  <footer class="footer">
    <div class="footer-columns">
      <div class="footer-column">
        <h5 class="footer-heading">Product</h5>
        <p><a  class="grey-text">Features</a></p>
        <p><a class="grey-text">Learn</a></p>
        <p><a class="grey-text">Plugins</a></p>
      </div>
      <div class="footer-column">
        <h5 class="footer-heading">Template</h5>
        <p><a class="grey-text">Blog</a></p>
        <p><a class="grey-text">Personal</a></p>
        <p><a class="grey-text">Startup</a></p>
      </div>
      <div class="footer-column">
        <h5 class="footer-heading">Resources</h5>
        <p><a class="grey-text">Update</a></p>
        <p><a class="grey-text">Community</a></p>
        <p><a class="grey-text">Contact</a></p>
      </div>
    </div>
  </footer>
</template>
