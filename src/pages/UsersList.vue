<script>
import BaseButton from "../components/BaseButton.vue";
import BaseLabel from "../components/BaseLabel.vue";
import BaseInput from "../components/BaseInput.vue";
import BaseTextarea from "../components/BaseTextarea.vue";
import Loader from "../components/Loader.vue";
import PanelAdminNav from "../components/PanelAdminNav.vue";
import { getUsers } from "../services/user";

export default {
  name: "Chats",
  components: {
    BaseButton,
    BaseLabel,
    BaseInput,
    BaseTextarea,
    Loader,
    PanelAdminNav,
  },
  data() {
    return {
      chatsLoading: true,
      users: [],
    };
  },
  methods: {
    async getUsers() {
      // Llama a la función que obtiene los usuarios de Firebase Firestore
      this.users = await getUsers();
      this.chatsLoading = false;
    },
  },
  async mounted() {
    this.getUsers();
  },
};
</script>

<template>
  <h1 class="h1">Usuarios</h1>
  <PanelAdminNav />
  <Loader v-if="chatsLoading" />
  <template v-else>
    <div class="blue-cards-container">
      <div class="">
        <div class="blue-card" v-for="user in users" :key="user.id">
          <div class="dark-blue-text">
            <router-link :to="`/usuario/${user.id}`" class="mr-2"
            >{{ user.email }}</router-link>
            <router-link :to="`/usuario/${user.id}/chat`" class="btn-primary"
              >Ir al chat</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </template>
</template>
