<!-- <script>
import BaseButton from "../components/BaseButton.vue";
import BaseInput from "../components/BaseInput.vue";
import BaseLabel from "../components/BaseLabel.vue";
import { register } from "../services/auth";
import { ref } from "firebase/database";

export default {
  name: "Register",
  components: { BaseButton, BaseLabel, BaseInput },
  data() {
    return {
      registerLoding: false,
      newUser: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    async handleRegister() {
      this.registerLoding = true;
      try {
        await register({ ...this.newUser });
        this.$router.push("/servicios");
      } catch (error) {
        console.log(error);
      }
      this.registerLoding = false;
    },
  },
};
</script> -->
<script setup>
import BaseButton from "../components/BaseButton.vue";
import BaseInput from "../components/BaseInput.vue";
import BaseLabel from "../components/BaseLabel.vue";
import { register } from "../services/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const registerLoding = ref(false);
const newUser = ref({
  email: "",
  password: "",
});

const handleRegister = async () => {
  registerLoding.value = true;
  try {
    await register({ ...newUser.value });
    router.push("/servicios");
  } catch (error) {
    console.log(error);
  }
  registerLoding.value = false;
};
</script>

<template>
  <div class="flex flex-col justify-center items-center shadow-lg py-8 max-w-sm mx-auto my-20 rounded-lg">
    <div class="login-container">
      <h1 class="text-3xl font-medium p-3">Registrarse</h1>
      <form action="#" @submit.prevent="handleRegister" class="form">
        <div class="flex flex-col my-5">
          <BaseLabel for="email">Email</BaseLabel>
          <BaseInput
            id="email"
            name="email"
            type="text"
            v-model="newUser.email"
            :disabled="registerLoding"
          ></BaseInput>
        </div>
        <div class="flex flex-col my-5">
          <BaseLabel for="password" class="">Contraseña</BaseLabel>
          <BaseInput
            id="password"
            name="password"
            type="password"
            v-model="newUser.password"
            :disabled="registerLoding"
          >
          </BaseInput>
        </div>
        <div class="my-5">
          <BaseButton :loading="registerLoding" class="w-full">Crear Cuenta</BaseButton>
        </div>
      </form>
    </div>
  </div>
</template>
