<script>
import BaseButton from "../components/BaseButton.vue";
import BaseLabel from "../components/BaseLabel.vue";
import BaseInput from "../components/BaseInput.vue";
import BaseTextarea from "../components/BaseTextarea.vue";
import Loader from "../components/Loader.vue";
import PanelAdminNav from '../components/PanelAdminNav.vue'
import { getUsers } from '../services/user';


export default {
    name: "Chats",
    components: { BaseButton, BaseLabel, BaseInput, BaseTextarea, Loader,PanelAdminNav },
    data() {
        return {
            chatsLoading: true,
            users: [],
        }
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
    <h1 class="text-center">Usuarios</h1>
    <PanelAdminNav />
    <Loader v-if="chatsLoading" />
    <template v-else>
        <div class=" min-vh-100">
            <div class="card mx-auto my-4" style="width: 20rem;">
                <div class="list-group list-group-flush" v-for="user in users" :key="user.id">
                    <div class="list-group-item my-3 fw-bold">{{ user.email }} <router-link :to="`/usuario/${user.id}/chat`"
                            class="btn btn-info text-black mx-3">Ir al
                            chat</router-link>
                    </div>
                </div>
            </div>
        </div>
    </template>
</template>


