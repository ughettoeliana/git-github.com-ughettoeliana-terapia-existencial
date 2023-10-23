<script>
import BaseButton from "../components/BaseButton.vue";
import BaseInput from "../components/BaseInput.vue";
import BaseLabel from "../components/BaseLabel.vue";
import BaseNavLi from "../components/BaseNavLi.vue";
import Loader from "../components/Loader.vue";
import { getServicesData } from "../services/service";

export default {
  name: "Services",
  components: { BaseButton, BaseLabel, BaseInput, BaseNavLi, Loader },
  data() {
    return {
      panelLoading: true,
      services: [],
    };
  },
  async mounted() {
    this.services = await getServicesData();
    this.panelLoading = false;
  },
};
</script>

<template>
  <div class="container fw-medium mx-auto">
    <h1>Servicios</h1>
    <div class="row mx-auto my-5">
      <div
        class="d-flex"
        v-for="service in services"
        :key="service.id"
        style="width: 18rem"
      >
        <div
          class=" border rounded p-3 my-3 align-self-stretch"
        >
          <div class="card-body align-self-stretch">
            <h5 class="card-title">{{ service.name }}</h5>
            <p>
              <i class="fa-solid fa-clock" style="color: #21496b"></i>
              {{ service.time }}
            </p>
            <p>$ {{ service.price }}</p>
            <p class="card-text">
              Agenda una sesion con el consultor Daniel del Valle
            </p>
            <BaseButton
              class="btn"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              >Agendar Cita</BaseButton
            >
          </div>
        </div>

        <!-- Modal de boostrap -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-4" id="exampleModalLabel">
                  Agendaste la cita: {{ service.name }}
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <p>
                  Gracias, en breve nos estaremos comunicando con usted para
                  agendar el horario
                </p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-outline-info"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
