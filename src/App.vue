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
  <div class="content">
    <header>
      <nav class="navbar p-2 border-bottom">
        <div class="d-inline-block">
          <a class="navbar-brand" href="/">
            <img
              src="../public/logo.svg"
              alt="Logo"
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            Consultoría Psicológica
          </a>
        </div>

        <ul class="d-inline-block">
          <BaseNavLi>
            <router-link
              to="/quienes-somos"
              class="text-decoration-none text-black link-primary"
              >Acerca de nosotros</router-link
            >
          </BaseNavLi>
          <BaseNavLi>
            <router-link
              to="/servicios"
              class="text-decoration-none text-black link-primary"
              >Servicios</router-link
            >
          </BaseNavLi>

          <template v-if="loggedUser.rol === 'admin'">
            <BaseNavLi
              ><router-link
                to="/panel"
                class="text-decoration-none text-black link-primary"
                >Panel Administrador</router-link
              >
            </BaseNavLi>
          </template>
          <template v-else-if="loggedUser.rol === 'user'">
            <BaseNavLi>
              <router-link
                to="/perfil"
                class="text-decoration-none text-black link-primary"
                >Mi Perfil</router-link
              >
            </BaseNavLi>
          </template>
          <template v-if="user.id === null">
            <BaseNavLi
              ><router-link to="/iniciar-sesion" class="btn btn-outline-primary"
                >Iniciar sesion</router-link
              >
            </BaseNavLi>
            <BaseNavLi
              ><router-link
                to="/registro"
                class="btn btn-sm btn-outline-secondary"
                >Registro</router-link
              >
            </BaseNavLi>
          </template>
          <template v-else>
            <BaseNavLi>
              <form action="#" @submit.prevent="handleLogout">
                <button class="btn btn-dark">
                  <strong>{{ user.email }}</strong> Cerrar Sesion
                </button>
              </form>
            </BaseNavLi>
          </template>
        </ul>
      </nav>
    </header>
    <div>
      <router-view> </router-view>
    </div>
  </div>
    <footer class="border-top pt-5 pb-4">
      <div class="container text-center text-md-start">
        <div class="row text-center text-md-start">
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 class="mb-4">Product</h5>
            <p><a>Features</a></p>
            <p><a>Learn</a></p>
            <p><a>Plugins</a></p>
          </div>
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 class="mb-4">Template</h5>
            <p><a>Blog</a></p>
            <p><a>Personal</a></p>
            <p><a>Startup</a></p>
          </div>
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 class="mb-4">Resources</h5>
            <p><a>Update</a></p>
            <p><a>Community</a></p>
            <p><a>Contact</a></p>
          </div>
        </div>
      </div>
    </footer>
</template>
