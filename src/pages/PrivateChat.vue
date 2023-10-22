<script>
import BaseButton from '../components/BaseButton.vue';
import BaseTextarea from '../components/BaseTextarea.vue';
import Loader from '../components/Loader.vue';
import { getUserProfileById } from '../services/user';
import { sendPrivateChatMessage } from '../services/private-chat'
import { subscribeToAuth } from '../services/auth';
import { subscribeToPrivateChat } from '../services/private-chat';
import { dateToString } from '../helpers/date';

export default {
  name: 'PrivateChat',
  components: { BaseTextarea, BaseButton, Loader },
  data() {
    return {
      userLoading: true,
      user: {
        id: null,
        email: null,
      },
      authUser: {
        id: null,
        email: null,
      },
      unsubscribeAuth: () => { },
      newMessage: {
        message: '',
      },
      messagesLoading: true,
      messages: [],
      unsubscribeMessages: () => { },
    };
  },
  methods: {
    handleSendMessage() {
      sendPrivateChatMessage({
        senderId: this.authUser.id,
        receiverId: this.user.id,
        message: this.newMessage.message,
      })
      this.newMessage.message = '';
    },
    formatDate(date) {
      return dateToString(date);
    },
  },
  async mounted() {
    this.userLoading = true;
    this.user = await getUserProfileById(this.$route.params.id);
    this.unsubscribeAuth = subscribeToAuth(newUser => this.authUser = newUser);
    this.userLoading = false;

    this.messagesLoading = true;
    this.unsubscribeMessages = await subscribeToPrivateChat(
      {
        senderId: this.authUser.id,
        receiverId: this.user.id,
      },
      (newMessages) => this.messages = newMessages
    );
    this.messagesLoading = false;
  },
  unmounted() {
    this.unsubscribeAuth();
    this.unsubscribeMessages();
  },
}
</script>

<template>
  <Loader v-if="userLoading" />
  <template v-else>
    <h1>Conversacion con {{ user.email }}</h1>
    <h2>Mensajes</h2>
    <div class="d-flex justify-content-around">
      <Loader v-if="messagesLoading" />
      <template v-else>
        <div class='w-50 d-flex flex-column justify-content-start'>
          <div v-for="message in messages"
               :key="message.id"
               class="mw-75 my-3 p-2 rounded align-self-start"
               :class="{
                'bg-info': message.senderId !== authUser.id,
                'bg-body-secondary': message.senderId === authUser.id,
                'justify-content-end':message.senderId === authUser.id,
                'align-self-end':message.senderId === authUser.id,
               }">
            <div class="">{{ message.message }}</div>
            <div class="small text-right">{{ formatDate(message.created_at) || 'Enviando...' }}</div>
          </div>
        </div>
      </template>
    </div>

    <form action="#" @submit.prevent="handleSendMessage" class="my-4 p-2 border rounded">
      <div class="d-flex justify-content-center align-items-center">
        <div class="my-3">
          <BaseTextarea id="message" v-model="newMessage.message"></BaseTextarea>
        </div>
        <div class="m-3">
          <BaseButton></BaseButton>
        </div>
      </div>
    </form>
  </template>
</template>