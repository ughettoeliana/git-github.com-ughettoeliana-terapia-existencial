<!-- <script>
import BaseNavLi from './BaseNavLi.vue';

export default {
  name: "PanelAdminNav",
  components: { BaseNavLi },
};
</script> -->
<script setup>
import BaseNavLi from "./BaseNavLi.vue";
</script>

<template>
  <div class="p-5 my-5">
    <ul class="flex flex-row justify-around items-center">
      <BaseNavLi class="px-3"
        ><router-link to="/panel" class="">Servicios</router-link>
      </BaseNavLi>
      <BaseNavLi class="px-3"
        ><router-link to="/create-service" class=""
          >Crear un nuevo servicio</router-link
        >
      </BaseNavLi>
      <BaseNavLi class="px-3">
        <router-link to="/users-list" class="">Chats</router-link>
      </BaseNavLi>
    </ul>
  </div>
</template>
