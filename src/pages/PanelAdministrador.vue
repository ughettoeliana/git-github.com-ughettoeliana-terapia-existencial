<script setup>
import PanelAdminNav from "../components/PanelAdminNav.vue";
import Loader from "../components/Loader.vue";
import { ref, onMounted } from "vue";
import { getServicesData, deleteServiceByID } from "../services/service";

const deletingService = ref(false);
const modalVisible = ref(false);
const panelLoading = ref(true);
const services = ref([]);
const selectedService = ref(null);

const showModal = (service) => {
  selectedService.value = service;
  modalVisible.value = true;
};

const closeModal = () => {
  modalVisible.value = false;
  selectedService.value = null;
};

const deleteService = async (id) => {
  try {
    deletingService.value = true;

    const deleted = await deleteServiceByID(id);
    if (deleted) {
      services.value = services.value.filter((service) => service.id !== id);
    }
  } catch (error) {
    console.error("Error durante la eliminación del servicio:", error);
  } finally {
    deletingService.value = false;
  }
};

onMounted(async () => {
  services.value = await getServicesData();
  panelLoading.value = false;
});
</script>
<template>
  <div class="flex flex-col justify-center items-center">
    <h1 class="text-2xl font-medium p-3">Panel Administrador</h1>

    <PanelAdminNav />

    <Loader v-if="panelLoading" />
    <template v-else>
      <div class="my-10">
        <table>
          <thead class="px-2">
            <tr>
              <th class="px-2">Servicio</th>
              <th class="px-2">Tiempo</th>
              <th class="px-2">Modalidad</th>
              <th class="px-2">Precio</th>
              <th class="px-2">Acciones</th>
            </tr>
          </thead>
          <template v-for="service in services" :key="service.id">
            <tbody>
              <tr
                class="bg-slate-100 border border-solid border-white p-2 text-center"
              >
                <td class="bg-slate-100 border-2 border-solid border-white p-2">
                  {{ service.name }}
                </td>
                <td class="bg-slate-100 border-2 border-solid border-white p-2">
                  {{ service.time }}
                </td>
                <td class="bg-slate-100 border-2 border-solid border-white p-2">
                  {{ service.modality }}
                </td>
                <td
                  class="bg-slate-100 border-2 border-solid-2 border-white p-2"
                >
                  ${{ service.price }}
                </td>
                <td class="bg-slate-100 border-solid border-2 border-white p-2">
                  <div class="p-3">
                    <button
                      type="button"
                      class="rounded-lg p-2 bg-red-500 text-white"
                      @click="showModal(service)"
                    >
                      Eliminar
                    </button>
                    <!-- Modal-->
                    <div
                      v-if="modalVisible && selectedService === service"
                      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                    >
                      <div class="bg-white p-8 rounded max-w-md text-xl">
                       
                        <h2 class="">
                          Eliminar:
                          <span class="text-red-500 font-medium">{{
                            service.name
                          }}</span>
                        </h2>
                        <p class="py-3 mb-8">
                          ¿Estás seguro que queres eliminar este servicio?
                        </p>
                        <div class="flex justify-around items-center my-4">
                          <button
                            @click="closeModal"
                            class="rounded-lg p-2 bg-slate-400 text-white"
                          >
                            Cerrar
                          </button>
                          <button
                            class="rounded-lg p-2 bg-red-500 text-white"
                            @click="deleteService(service.id)"
                          >
                            Si, eliminar
                          </button>
                        </div>
                        <Loader
                          v-if="deletingService && selectedService === service"
                        />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </template>
        </table>
      </div>
    </template>
  </div>
</template>
