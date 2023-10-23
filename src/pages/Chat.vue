<script>
import BaseButton from "../components/BaseButton.vue";
import BaseTextarea from "../components/BaseTextarea.vue";
import Loader from "../components/Loader.vue";
import { getUserProfileById } from "../services/user";
import {
  sendChatMessage,
  subscribeToChat,
} from "../services/chat";
import { subscribeToAuth } from "../services/auth";
import {} from "../services/chat";
import { dateToString } from "../helpers/date";

export default {
  name: "chat",
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
      unsubscribeAuth: () => {},
      newMessage: {
        message: "",
      },
      messagesLoading: true,
      messages: [],
      unsubscribeMessages: () => {},
    };
  },
  methods: {
    handleSendMessage() {
      sendChatMessage({
        senderId: this.authUser.id,
        receiverId: this.user.id,
        message: this.newMessage.message,
      });
      this.newMessage.message = "";
    },
    formatDate(date) {
      return dateToString(date);
    },
  },
  async mounted() {
    this.userLoading = true;
    this.user = await getUserProfileById(this.$route.params.id);
    this.unsubscribeAuth = subscribeToAuth(
      (newUser) => (this.authUser = newUser)
    );
    this.userLoading = false;

    this.messagesLoading = true;
    this.unsubscribeMessages = await subscribeToChat(
      {
        senderId: this.authUser.id,
        receiverId: this.user.id,
      },
      (newMessages) => (this.messages = newMessages)
    );
    this.messagesLoading = false;
  },
  unmounted() {
    this.unsubscribeAuth();
    this.unsubscribeMessages();
  },
};
</script>

<template>
  <Loader v-if="userLoading" />
  <template v-else>
    <h1 class="text-center my-3">Chat con {{ user.email }}</h1>
    <div class="d-flex justify-content-around">
      <Loader v-if="messagesLoading" />
      <template v-else>
        <div
          class="w-50 d-flex flex-column justify-content-start border rounded"
        >
          <div
            v-for="message in messages"
            :key="message.id"
            class="mw-75 my-3 p-2 rounded align-self-start"
            :class="{
              'bg-primary-subtle': message.senderId !== authUser.id,
              'bg-body-secondary': message.senderId === authUser.id,
              'justify-content-end': message.senderId === authUser.id,
              'align-self-end': message.senderId === authUser.id,
            }"
          >
            <div class="">{{ message.message }}</div>
            <div class="small text-right text-secondary">
              {{ formatDate(message.created_at) || "Enviando..." }}
            </div>
          </div>
        </div>
      </template>
    </div>

    <form
      action="#"
      @submit.prevent="handleSendMessage"
      class="my-4 p-2 border rounded"
    >
      <div class="d-flex justify-content-center align-items-center">
        <div class="my-3">
          <BaseTextarea
            id="message"
            v-model="newMessage.message"
          ></BaseTextarea>
        </div>
        <div class="m-3">
          <BaseButton></BaseButton>
        </div>
      </div>
    </form>
  </template>
</template>
