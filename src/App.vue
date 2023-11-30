<!-- <script>
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
</script> -->

<script setup>
import { ref, onMounted } from "vue";
import BaseButton from "./components/BaseButton.vue";
import BaseNavLi from "./components/BaseNavLi.vue";
import { subscribeToAuth, logout } from "./services/auth";
import { getUserProfileById } from "./services/user";
import { useRouter } from "vue-router";

const router = useRouter();
const user = ref({
  id: null,
  email: null,
  rol: null,
});
const loggedUser = ref({});

const handleLogout = () => {
  logout();
  router.push("/iniciar-sesion");
};

onMounted(async () => {
  subscribeToAuth(async (userData) => {
    user.value = { ...userData };
    loggedUser.value = await getUserProfileById(user.value.id);
  });
});
</script>
<template>
  <header class="header">
    <nav class="flex flex-row justify-around items-center">
      <div class="flex flex-row justify-start">
        <div class="px-2 text-xl">
          <img src="/logo.svg" alt="Logo" width="30" height="24" />
        </div>
        <a class="text-lg" href="/"> Consultoría Psicológica </a>
      </div>

      <ul class="flex flex-row justify-around items-center p-4">
        <div class="flex flex-row justify-center items-center">
          <BaseNavLi>
            <router-link to="/quienes-somos" class="text-gray-500"
              >Acerca de nosotros</router-link
            >
          </BaseNavLi>

          <template v-if="loggedUser && loggedUser.rol">
            <template v-if="loggedUser.rol === 'admin'">
              <BaseNavLi>
                <router-link to="/panel" class="text-gray-500"
                  >Panel Administrador</router-link
                >
              </BaseNavLi>
            </template>
            <template v-else-if="loggedUser.rol === 'user'">
              <BaseNavLi>
                <router-link to="/perfil" class="text-gray-500"
                  >Mi Perfil</router-link
                >
              </BaseNavLi>
            </template>
          </template>
        </div>

        <template v-if="user.id === null">
          <BaseNavLi
            ><router-link
              to="/iniciar-sesion"
              class="text-darkBlue font-medium bg-lightBlue p-2 rounded-lg border border-solid border-lightBlue hover:border-primary"
              >Iniciar sesión</router-link
            >
          </BaseNavLi>
          <BaseNavLi
            ><router-link
              to="/registro"
              class="text-darkBlue font-medium p-2 rounded-lg bg-lighterBlue hover:bg-lightBlue"
              >Registro</router-link
            >
          </BaseNavLi>
        </template>
        <template v-else>
          <BaseNavLi>
            <router-link to="/servicios" class="text-gray-500"
              >Servicios</router-link
            >
          </BaseNavLi>
          <BaseNavLi>
            <form action="#" @submit.prevent="handleLogout">
              <button class="text-white bg-black p-2 rounded-lg">
                <strong>{{ user.email }}</strong> Cerrar Sesión
              </button>
            </form>
          </BaseNavLi>
        </template>
      </ul>
    </nav>
  </header>
  <div>
    <div class="max-w-1200 mx-auto">
      <router-view> </router-view>
    </div>
  </div>
  <footer class="">
    <div class="flex justify-around text-lg bg-gray-100 p-10 mt-5">
      <div class="p-4">
        <h5 class="font-semibold">Diseño y Programación Web</h5>
        <p><a class="text-gray-500">Profesor: Santiago Gallino</a></p>
        <p><a class="text-gray-500">Cliente Web Mobile</a></p>
        <p><a class="text-gray-500">4 Cuatrimestre</a></p>
      </div>
      <div class="p-4">
        <h5 class="font-semibold">Davinci</h5>
        <p><a class="text-gray-500">Turno Noche</a></p>
        <p><a class="text-gray-500">Comision B</a></p>
        <p><a class="text-gray-500">2do Parcial</a></p>
      </div>
      <div class="p-4">
        <h5 class="font-semibold">Alumna</h5>
        <p><a class="text-gray-500">Eliana Ughetto</a></p>
        <p><a class="text-gray-500">21 años</a></p>
      </div>
    </div>
  </footer>
</template>
