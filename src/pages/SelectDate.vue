<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import BaseButton from "../components/BaseButton.vue";
import { subscribeToAuth } from "../services/auth";
import { getServicesDataById, hireService } from "../services/service";
import { useRouter } from "vue-router";
import { getUserProfileById } from "../services/user";

const dateValue = ref(new Date());
const hourValue = ref("");
const modalVisible = ref(false);
const appointmentDateAndHour = ref({
  date: null as string | null,
  hour: null as string | null,
});

const router = useRouter();

const showModal = () => {
  appointmentDateAndHour.value = {
    date: formattedDate.value,
    hour: hourValue.value,
  };

  console.log("appointmentDateAndHour", appointmentDateAndHour.value);
  modalVisible.value = true;
};

const closeModal = () => {
  modalVisible.value = false;
  appointmentDateAndHour.value = {
    date: null as string | null,
    hour: null as string | null,
  };
};

const handleDateSelect = () => {
  console.log("Día seleccionado:", dateValue.value);
};

const handleTimeChange = () => {
  console.log("Hora seleccionada:", hourValue.value);
};

const formattedDate = computed(() => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return dateValue.value.toLocaleDateString("es-ES");
});

const confirmAppointment = async () => {
  let serviceId = router.currentRoute.value.query.serviceId;
  let userId = router.currentRoute.value.query.userId;

  // Eliminar comillas de los ids
  serviceId = (serviceId as string)?.replace(/['"]+/g, '') || null;
  userId = (userId as string)?.replace(/['"]+/g, '') || null;

  console.log("serviceId", serviceId);
  console.log("userId", userId);

  modalVisible.value = false;
  const success = await hireService(serviceId, userId, appointmentDateAndHour.value);
  console.log(success);

  if (success) {
    console.log("se contrató el servicio con éxito");
  } else {
    console.log("hubo un error");
  }
};
</script>

<template>
  <div class="flex flex-col justify-center">
    <h1 class="text-2xl text-center p-3">
      Seleccioná la fecha de la entrevista
    </h1>
    <div class="flex flex-col justify-center items-center text-center my-4">
      <el-calendar
        class="max-w-2xl"
        v-model="dateValue"
        :mini="true"
        @select="handleDateSelect"
      />
    </div>
  </div>
  <div class="text-center my-5 pb-5">
    <h1 class="text-2xl text-center p-3">
      Seleccioná la hora de la entrevista
    </h1>
    <div class="my-4">
      <el-time-select
        v-model="hourValue"
        start="08:30"
        step="00:15"
        end="18:30"
        placeholder="Select time"
        class="text-black"
        @change="handleTimeChange"
      />
    </div>
  </div>
  <div class="max-w-2xl tex-center mx-auto py-5">
    <BaseButton @click.stop="showModal" class="w-full">Continuar</BaseButton>
  </div>

  <div
    v-if="modalVisible && appointmentDateAndHour"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="bg-white p-8 rounded max-w-md text-xl">
      <h2>¿Estás seguro que quieres agendar la cita?</h2>
      <h3 class="mt-6">
        El día:
        <span class="font-semibold">{{ appointmentDateAndHour.date }}</span>
      </h3>
      <h3 class="pt-3 pb-6 mb-8">
        A las:
        <span class="font-semibold">{{ appointmentDateAndHour.hour }} hs</span>
      </h3>
      <div class="flex justify-around items-center my-4">
        <button
          @click="closeModal"
          class="rounded-lg p-2 bg-slate-400 text-white"
        >
          Cerrar
        </button>

        <button
          class="rounded-lg p-2 bg-primary text-white"
          @click="confirmAppointment"
        >
          Sí, agendar cita
        </button>
      </div>
    </div>
  </div>
</template>
