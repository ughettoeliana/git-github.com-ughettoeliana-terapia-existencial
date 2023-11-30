<script setup>
import "../css/styles.css";
import { ref, onMounted, onUnmounted } from "vue";
import BaseButton from "../components/BaseButton.vue";
import BaseTextarea from "../components/BaseTextarea.vue";
import Loader from "../components/Loader.vue";
import { getUserProfileById } from "../services/user";
import { sendChatMessage, subscribeToChat } from "../services/chat";
import { subscribeToAuth } from "../services/auth";
import { dateToString } from "../helpers/date";
import { useRoute } from "vue-router";

const route = useRoute();
const userLoading = ref(true);
const user = ref({
  id: null,
  email: null,
});
const authUser = ref({
  id: null,
  email: null,
});
const unsubscribeAuth = ref(() => {});
const newMessage = ref({
  message: "",
});
const messagesLoading = ref(true);
const messages = ref([]);
const unsubscribeMessages = ref(() => {});

const handleSendMessage = () => {
  sendChatMessage({
    senderId: authUser.value.id,
    receiverId: user.value.id,
    message: newMessage.value.message,
  });

  newMessage.value.message = "";
};

const formatDate = (date) => dateToString(date);

onMounted(async () => {
  userLoading.value = true;
  user.value = await getUserProfileById(route.params.id);
  unsubscribeAuth.value = subscribeToAuth(
    (newUser) => (authUser.value = newUser)
  );
  userLoading.value = false;

  messagesLoading.value = true;
  unsubscribeMessages.value = await subscribeToChat(
    {
      senderId: authUser.value.id,
      receiverId: user.value.id,
    },
    (newMessages) => (messages.value = newMessages)
  );
  messagesLoading.value = false;
});

onUnmounted(() => {
  unsubscribeAuth.value();
  unsubscribeMessages.value();
});
</script>
<template>
  <Loader v-if="userLoading" />
  <template v-else>
    <h1 class="text-2xl text-center">
      Chat con <span class="font-semibold"> {{ user.email }}</span>
    </h1>
    <div
      class="max-w-1200 flex flex-col justify-center p-4 max-w-sm mx-auto my-20 rounded-lg border border-solid border-slate-200"
    >
      <div class="my-10">
        <Loader v-if="messagesLoading" />
        <template v-else>
          <div class="flex flex-col justify-between p-3">
            <div
              v-for="message in messages"
              :key="message.id"
              class="flex flex-col rounded-xl p-2"
              :class="{
                'bg-lightBlue': message.senderId !== authUser.id,
                'bg-blueBorder': message.senderId === authUser.id,
                'self-start': message.senderId !== authUser.id,
                'self-end': message.senderId === authUser.id,
              }"
            >
              <div class="max-width-8">{{ message.message }}</div>
              <div class="text-xs text-greyText">
                {{ formatDate(message.created_at) || "Enviando..." }}
              </div>
            </div>
          </div>
        </template>
      </div>
      <form action="#" @submit.prevent="handleSendMessage" class="">
        <div class="flex">
          <div class="flex-1">
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
