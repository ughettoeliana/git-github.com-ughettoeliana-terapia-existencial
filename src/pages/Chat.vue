<script>
import BaseButton from "../components/BaseButton.vue";
import BaseTextarea from "../components/BaseTextarea.vue";
import Loader from "../components/Loader.vue";
import { getUserProfileById } from "../services/user";
import { sendChatMessage, subscribeToChat } from "../services/chat";
import { subscribeToAuth } from "../services/auth";
import {} from "../services/chat";
import { dateToString } from "../helpers/date";

export default {
  name: "Chat",
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
    <h1 class="text-2xl text-center">
      Chat con <span class="font-semibold"> {{ user.email }}</span>
    </h1>
    <div
      class="max-w-1200 flex flex-col justify-center items-center p-4 max-w-sm mx-auto my-20 rounded-lg border border-solid border-slate-200"
    >
      <div class="my-10">
        <Loader v-if="messagesLoading" />
        <template v-else>
          <div class="flex flex-row justify-evenly">
            <div
              v-for="message in messages"
              :key="message.id"
              class="rounded-xl p-2"
              :class="{
                'bg-lightBlue': message.senderId !== authUser.id,
                'bg-lighterBlue': message.senderId === authUser.id,
                'self-start': message.senderId !== authUser.id,
                'self-end': message.senderId === authUser.id,
              }"
            >
              <div class="">{{ message.message }}</div>
              <div class="time-message text-greyText">
                {{ formatDate(message.created_at) || "Enviando..." }}
              </div>
            </div>
          </div>
        </template>
      </div>
      <form action="#" @submit.prevent="handleSendMessage" class="">
        <div class="flex">
          <div class="">
            <BaseTextarea
              id="message"
              class="max-h-10"
              v-model="newMessage.message"
            ></BaseTextarea>
          </div>
          <div class="mx-2">
            <BaseButton></BaseButton>
          </div>
        </div>
      </form>
    </div>
  </template>
</template>
