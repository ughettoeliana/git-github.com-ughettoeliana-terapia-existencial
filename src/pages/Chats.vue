<script>
import BaseButton from "../components/BaseButton.vue";
import BaseLabel from "../components/BaseLabel.vue";
import BaseInput from "../components/BaseInput.vue";
import BaseTextarea from "../components/BaseTextarea.vue";
import Loader from "../components/Loader.vue";
import { getUserProfileById, getUsers } from '../services/user';


export default {
    name: "Chats",
    components: { BaseButton, BaseLabel, BaseInput, BaseTextarea, Loader },
    data() {
        return {
            chatsLoading: true,
            users: [],
            loggedUser: {}
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
        // this.loggedUser = await getUserProfileById(this.users.id);
        // console.log('usuario logeado:', this.loggedUser.rol)// Llama a la función para obtener los usuarios
    },
};
</script>


<template>
    <Loader v-if="chatsLoading" />
    <template v-else>
        <div class=" min-vh-100">
            <div class="card mx-auto my-4" style="width: 20rem;">
            <!-- <template v-if="loggedUser.rol === 'admin'"> -->
                    <div class="list-group list-group-flush" v-for="user in users" :key="user.id">

                        <span> (Admin)</span>
                        <div class="list-group-item my-3 fw-bold">{{ user.email }} <router-link
                                :to="`/usuario/${user.id}/chat`" class="btn btn-info text-black mx-3 my-3">Ir al
                                chat</router-link>
                        </div>
                    </div>
                <!-- </template> -->
                <template >
                    <div class="card mx-auto my-4" style="width: 20rem;">
                        <div class="list-group list-group-flush">
                            <div class="list-group-item my-3 fw-bold"><router-link
                                    :to="`/usuario/1zIiuPCeTDXCaWu1JBnZIozLDG53/chat`"
                                    class="btn btn-info text-black mx-3 my-3">Ir al chat con el Admin</router-link>
                            </div>
                        </div>
                    </div>
                </template>

            </div>
        </div>
    </template>
</template>


