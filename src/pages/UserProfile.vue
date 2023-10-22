<script>
import Loader from '../components/Loader.vue';
import { getUserProfileById } from '../services/user';

export default {
  name: 'UserProfile',
  components: { Loader },
  data() {
    return {
      userLoding: true,
      user: {
        id: null,
        email: null,
        rol: null
      },
    };
  },
  async mounted() {
    this.userLoding = true;
    this.user = await getUserProfileById(this.$route.params.id);
    this.userLoding = false;
  },
 
}
</script>
<template>
  <Loader v-if="userLoding" />
  <template v-else>
    <div class="container">
      <h1 class="mb-3 font-bold text-3xl">Perfil de: {{ user.email }}</h1>
    </div>
    <div class="container">
      <router-link :to="`/usuario/${user.id}/chat`" class="btn btn-info text-black mx-auto my-3">Mensaje</router-link>
    </div>
  </template>
</template>