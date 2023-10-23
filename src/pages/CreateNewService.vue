<script>
import BaseButton from '../components/BaseButton.vue';
import BaseInput from '../components/BaseInput.vue';
import BaseLabel from '../components/BaseLabel.vue';
import BaseNavLi from '../components/BaseNavLi.vue';
import { newService } from '../services/service';

export default {
  name: 'CreateNewService',
  components: { BaseButton, BaseLabel, BaseInput, BaseNavLi },
  data() {
    return {
      createServiceLoading: false,
      form: {
        name: '',
        time: '',
        modality: '',
        price: '',
      }
    }
  },
  methods: {
    async handleCreateNewService() {
      this.createServiceLoading = true;
      try {
        await newService({ ...this.form });
        this.$router.push('/panel');
      } catch (error) {
        console.log(error);
      }
      this.createServiceLoading = false;
    },
  },

}

</script>
<template>
  <div class="w-75 mx-auto">
    <h1>Panel Administrador</h1>

    <ul class="nav justify-content-center py-3">
      <BaseNavLi><router-link to="/panel" class="text-decoration-none text-black link-primary">Servicios</router-link>
      </BaseNavLi>
      <BaseNavLi><router-link to="/crear-servicio" class="text-decoration-none text-black link-primary">Crear un nuevo
          servicio</router-link>
      </BaseNavLi>
    </ul>

    <div class="abs-center w-50 mx-auto">
      <form action="#" @submit.prevent="handleCreateNewService" class="p-3 form d-inline">
        <div class="form-group  mb-3">
          <BaseLabel for="name">Nombre</BaseLabel>
          <BaseInput id="name" name="name" type="text" v-model="form.name" :disabled="createServiceLoading" required/>
        </div>
        <div class="form-group w-25  mb-3">
          <BaseLabel for="time">Tiempo</BaseLabel>
          <BaseInput id="time" name="time" type="time" v-model="form.time" :disabled="createServiceLoading" required/>
        </div>
        <div class="form-group w-25 mb-3">
          <BaseLabel for="price">Precio</BaseLabel>
          <div class="input-group mb-3">
            <span class="input-group-text">$</span>
            <BaseInput id="price" class="form-control" name="price" type="number" v-model="form.price"
            :disabled="createServiceLoading"  
            required  />
          </div>
        </div>
        <div class="form-group w-50  mb-3">
          <p>Modalidad</p>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="modality" id="virtual" value="Virtual" v-model="form.modality">
            <label class="form-check-label" for="virtual">
              Virtual
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="modality" id="presencial" value="Presencial" v-model="form.modality">
            <label class="form-check-label" for="presencial">
              Presencial
            </label>
          </div>
          <p v-if="!form.modality" class="text-danger">Debes seleccionar al menos una opción.</p>
        </div>

        <BaseButton :loading="createServiceLoading" class="my-2">Crear Servicio</BaseButton>
      </form>
    </div>
  </div>
</template>
