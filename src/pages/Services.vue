<!-- <script>
import BaseButton from "../components/BaseButton.vue";
import BaseInput from "../components/BaseInput.vue";
import BaseLabel from "../components/BaseLabel.vue";
import BaseNavLi from "../components/BaseNavLi.vue";
import Loader from "../components/Loader.vue";
import { getServicesData, hireService } from "../services/service";
import { subscribeToAuth } from "../services/auth";
import { getUserProfileById } from "../services/user";

export default {
  name: "Services",
  components: { BaseButton, BaseLabel, BaseInput, BaseNavLi, Loader },
  data() {
    return {
      modalVisible: false,
      servicesLoading: true,
      services: [],
      selectedService: null,
      loggedUser: {},
      user: {
        id: null,
        email: null,
      },
    };
  },
  methods: {
    showModal(service) {
      this.selectedService = service;
      this.modalVisible = true;
    },
    closeModal() {
      this.modalVisible = false;
      this.selectedService = null;
    },
    async handleScheduleAppointment(service) {
      this.selectedService = service;
      const userId = this.loggedUser.id;
      console.log("serviceId", this.selectedService.id);
      console.log("userId", userId);
      const success = await hireService(this.selectedService.id, userId);
      console.log("success", success);

      if (success) {
        console.log("se constrato el servicio con exito");
      } else {
        console.log("hubo un error");
      }
    },
  },
  async mounted() {
    this.services = await getServicesData();
    this.servicesLoading = false;
    subscribeToAuth(async (user) => {
      this.user = { ...user };
      this.loggedUser = await getUserProfileById(this.user.id);
      this.userLoding = false;
    });
  },
};
</script> -->
<script setup>
import { ref, onMounted } from "vue";
import BaseButton from "../components/BaseButton.vue";
import Loader from "../components/Loader.vue";
import { getServicesData, hireService } from "../services/service";
import { subscribeToAuth } from "../services/auth";
import { getUserProfileById } from "../services/user";

const modalVisible = ref(false);
const servicesLoading = ref(true);
const services = ref([]);
const selectedService = ref(null);
const loggedUser = ref({});
const user = ref({
  id: null,
  email: null,
});

const showModal = (service) => {
  selectedService.value = service;
  modalVisible.value = true;
};

const closeModal = () => {
  modalVisible.value = false;
  selectedService.value = null;
};

const handleScheduleAppointment = async (service) => {
  selectedService.value = service;
  const userId = loggedUser.value.id;
  modalVisible.value = false;
  console.log("serviceId", selectedService.value.id);
  console.log("userId", userId);
  const success = await hireService(selectedService.value.id, userId);
  console.log("success", success);

  if (success) {
    console.log("se contrató el servicio con éxito");
  } else {
    console.log("hubo un error");
  }
};

onMounted(async () => {
  services.value = await getServicesData();
  servicesLoading.value = false;
  subscribeToAuth(async (user) => {
    user.value = { ...user };
    loggedUser.value = await getUserProfileById(user.value.id);
  });
});
</script>

<template>
  <Loader v-if="servicesLoading" />
  <template v-else>
    <div class="">
      <h1 class="text-3xl text-center">Servicios</h1>
      <div
        class="flex justify-center items-center container mx-auto min-h-screen"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div
            class="p-5 flex flex-col"
            v-for="service in services"
            :key="service.id"
          >
            <div class="rounded-xl shadow p-5">
              <div class="card-body">
                <h2 class="text-darkBlue text-xl font-semibold">
                  {{ service.name }}
                </h2>
                <p>
                  <i class="fa-solid fa-clock" style="color: #21496b"></i>
                  {{ service.time }}
                </p>
                <p>$ {{ service.price }}</p>
                <p class="py-2">
                  Agenda una sesion con el consultor Daniel del Valle
                </p>
                <BaseButton @click="showModal(service)" class="btn"
                  >Agendar Cita</BaseButton
                >
              </div>

              <div
                v-if="modalVisible && selectedService === service"
                class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
              >
                <div class="bg-white p-8 rounded max-w-md text-xl">
                  <div class="py-3">
                    <h2>¿Estás seguro que querés agendar esta cita?</h2>
                    <h3 class="text-darkBlue font-semibold py-4">{{ service.name }}</h3>
                  </div>
                  <button @click="closeModal" class="rounded-lg p-2 m-2 bg-gray-200">
                    Cancelar
                  </button>
                  <button
                    @click="handleScheduleAppointment(service)"
                    class="rounded-lg p-2 bg-primary text-white"
                  >
                    Sí, estoy seguro
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>
