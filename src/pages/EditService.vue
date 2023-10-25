<script>
import BaseButton from "../components/BaseButton.vue";
import BaseInput from "../components/BaseInput.vue";
import BaseLabel from "../components/BaseLabel.vue";
import Loader from "../components/Loader.vue";
import {getServiceDataById} from '../services/service'
import {subscribeToAuth} from '../services/auth'
 
export default {
  name: "EditService",
  components: { Loader, BaseButton, BaseInput, BaseLabel },
  data() {
    return {
      editLoding: false,
      service: [],
      editedService: {
        name: "",
        time: "",
        modality: "",
        price: "",
      },
    };
  },
  methods: {
    async handleEditService() {
      this.editedService = await getServiceDataById();
      this.editLoding = false;
      console.log( 'this.service',this.editedService)
    },
    
  },
};
</script>

<template>
  <!-- <Loader v-if="editLoding" />
  <template v-else> -->
    <div class="abs-center w-50 mx-auto">
      <form
        action="#"
        @submit.prevent="handleEditService"
        class="p-3 form d-inline"
      >
        <div class="form-group mb-3">
          <BaseLabel for="name">Nombre</BaseLabel>
          <BaseInput
            id="name"
            name="name"
            type="text"
            v-model="editedService.name"
            :disabled="editLoding"
            required
          />
        </div>
        <div class="w-25 mb-3">
          <BaseLabel for="time">Tiempo</BaseLabel>
          <BaseInput
            id="time"
            name="time"
            type="time"
            v-model="editedService.time"
            :disabled="editLoding"
            required
          />
        </div>
        <div class="form-group w-25 mb-3">
          <BaseLabel for="price">Precio</BaseLabel>
          <div class="input-group mb-3">
            <span class="input-group-text">$</span>
            <BaseInput
              id="price"
              class="form-control"
              name="price"
              type="number"
              v-model="editedService.price"
              :disabled="editLoding"
              required
            />
          </div>
        </div>
        <div class="form-group w-50 mb-3">
          <p>Modalidad</p>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="modality"
              id="virtual"
              value="Virtual"
              v-model="editedService.modality"
              :loading="editLoding"
            />
            <label class="form-check-label" for="virtual"> Virtual </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="modality"
              id="presencial"
              value="Presencial"
              v-model="editedService.modality"
              :loading="editLoding"
            />
            <label class="form-check-label" for="presencial">
              Presencial
            </label>
          </div>
          <p v-if="!editedService.modality" class="text-danger">
            Debes seleccionar al menos una opción.
          </p>
        </div>
        <BaseButton :loading="editLoding" class="my-2"
          >Editar Servicio</BaseButton
        >
      </form>
    </div>
  <!-- </template> -->
</template>
