<script>
import BaseNavLi from './BaseNavLi.vue';

export default {
  name: "PanelAdminNav",
  components: { BaseNavLi },
};
</script>

<template>
  <div>
    <ul class="nav justify-content-center py-3">
      <BaseNavLi
        ><router-link
          to="/panel"
          class="text-decoration-none text-black link-primary"
          >Servicios</router-link
        >
      </BaseNavLi>
      <BaseNavLi
        ><router-link
          to="/create-service"
          class="text-decoration-none text-black link-primary"
          >Crear un nuevo servicio</router-link
        >
      </BaseNavLi>
      <BaseNavLi>
        <router-link
          to="/users-list"
          class="text-decoration-none text-black link-primary"
          >Chats</router-link
        >
      </BaseNavLi>
    </ul>
  </div>
</template>
