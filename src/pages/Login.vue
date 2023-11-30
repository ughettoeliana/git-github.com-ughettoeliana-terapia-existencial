<script setup>
import { ref } from "vue";
import BaseButton from "../components/BaseButton.vue";
import BaseInput from "../components/BaseInput.vue";
import BaseLabel from "../components/BaseLabel.vue";
import { login } from "../services/auth";
import { useRouter } from "vue-router";

const router = useRouter();

defineEmits(["logged"]);
const loginLoading = ref(false);
const form = ref({
  email: "",
  password: "",
});

const doLogin = async () => {
  try {
    loginLoading.value = true;

    await login({
      ...form.value,
    });
    router.push("/servicios");
  } catch (error) {}
  loginLoading.value = false;
};
</script>
<template>
  <div class="max-h-screen">
    <div
      class="flex flex-col justify-center items-center shadow-lg py-8 max-w-sm mx-auto my-20 rounded-lg"
    >
      <h1 class="text-3xl font-medium p-3">Login</h1>
      <div class="form-container">
        <form action="#" @submit.prevent="doLogin" class="form">
          <div class="flex flex-col my-5">
            <BaseLabel for="email">Email</BaseLabel>
            <BaseInput
              id="email"
              name="email"
              type="email"
              v-model="form.email"
              :disabled="loginLoading"
            />
          </div>
          <div class="flex flex-col my-5">
            <BaseLabel for="password">Contraseña</BaseLabel>
            <BaseInput
              id="password"
              name="password"
              type="password"
              v-model="form.password"
              :disabled="loginLoading"
            />
          </div>
          <div class="my-5">
            <BaseButton :loading="loginLoading" class="w-full"
              >Iniciar Sesión</BaseButton
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
