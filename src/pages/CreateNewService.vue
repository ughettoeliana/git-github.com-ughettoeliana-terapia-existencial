<script setup>
import { ref } from "vue";
import BaseButton from "../components/BaseButton.vue";
import BaseInput from "../components/BaseInput.vue";
import BaseLabel from "../components/BaseLabel.vue";
import BaseNavLi from "../components/BaseNavLi.vue";
import PanelAdminNav from "../components/PanelAdminNav.vue";
import { newService } from "../services/service";
import { useRouter } from "vue-router";

const router = useRouter();
const createServiceLoading = ref(false);
const form = ref({
  name: "",
  time: "",
  modality: "",
  price: "",
});

const handleCreateNewService = async () => {
  createServiceLoading.value = true;
  try {
    await newService({ ...form.value });
    router.push("/panel");
  } catch (error) {
    console.log(error);
  }
  createServiceLoading.value = false;
};
</script>
<template>
  <div class="flex flex-col justify-center items-center">
    <h1 class="text-xl">Crear un nuevo servicio</h1>
    <PanelAdminNav />

    <div class="">
      <form action="#" @submit.prevent="handleCreateNewService" class="">
        <div class="flex flex-col">
          <BaseLabel for="name">Nombre</BaseLabel>
          <BaseInput
            id="name"
            name="name"
            type="text"
            v-model="form.name"
            :disabled="createServiceLoading"
            required
          />
        </div>
        <div class="flex flex-row">
          <div class="flex flex-col">
            <BaseLabel for="time">Tiempo</BaseLabel>
            <BaseInput
              id="time"
              name="time"
              type="time"
              v-model="form.time"
              :disabled="createServiceLoading"
              required
              class="mr-5"
            />
          </div>
          <div class="flex flex-col">
            <BaseLabel for="price">Precio</BaseLabel>
            <BaseInput
              class="price-input"
              id="price"
              name="price"
              type="number"
              v-model="form.price"
              :disabled="createServiceLoading"
              required
            />
          </div>
        </div>
        <div class="mt-8">
          <p>Modalidad</p>
          <div class="pr-2">
            <input
              class=""
              type="radio"
              name="modality"
              id="virtual"
              value="Virtual"
              v-model="form.modality"
            />
            <label class="" for="virtual"> Virtual </label>
          </div>
          <div class="pr-2">
            <input
              class=""
              type="radio"
              name="modality"
              id="presencial"
              value="Presencial"
              v-model="form.modality"
            />
            <label class="" for="presencial"> Presencial </label>
          </div>
          <p v-if="!form.modality" class="text-red-500">
            Debes seleccionar al menos una opción.
          </p>
        </div>

        <BaseButton :loading="createServiceLoading" class="my-2"
          >Crear Servicio</BaseButton
        >
      </form>
    </div>
  </div>
</template>
