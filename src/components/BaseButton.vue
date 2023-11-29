<script setup>
import Loader from './Loader.vue';

const props = defineProps({
  loading: {
      type: Boolean,
      default: false,
    }
})
</script>

<template>
  <button class="btn btn-primary " type="submit"
    :disabled="loading">
    
    <template v-if="!loading">
      <slot>Enviar</slot>
    </template>
    <template v-else>
      <Loader />
    </template>
  </button>
</template>