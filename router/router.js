import Home from './../src/pages/Home.vue';
import About from './../src/pages/About.vue';
import Chats from './../src/pages/Chats.vue';
import Register from './../src/pages/Register.vue';
import Login from './../src/pages/Login.vue';
import MyProfile from './../src/pages/MyProfile.vue';
import UserProfile from './../src/pages/UserProfile.vue';
import PrivateChat from './../src/pages/PrivateChat.vue';
import PanelAdministrador from './../src/pages/PanelAdministrador.vue';
import CreateNewService from './../src/pages/CreateNewService.vue';
import Services from './../src/pages/Services.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { subscribeToAuth } from '../src/services/auth';

const routes = [
  { path: '/',                 component: Home },
  { path: '/quienes-somos',    component: About },
  { path: '/iniciar-sesion',   component: Login },
  { path: '/registro',         component: Register },
  { path: '/servicios',        component: Services },
  { path: '/chats',            component: Chats,               meta: { requiresAuth: true }, },
  { path: '/perfil',           component: MyProfile,           meta: { requiresAuth: true }, },
  { path: '/panel',            component: PanelAdministrador,  meta: { requiresAuth: true }, },
  { path: '/crear-servicio',   component: CreateNewService,    meta: { requiresAuth: true }, },
  { path: '/usuario/:id',      component: UserProfile,         meta: { requiresAuth: true }, },
  { path: '/usuario/:id/chat', component: PrivateChat,         meta: { requiresAuth: true }, },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
})

let user = {
  id: null,
  email: null,
}

subscribeToAuth(newUser => user = newUser);

router.beforeEach((to) => {
  if (user.id === null && to.meta.requiresAuth) {
    return '/iniciar-sesion';
  }
});

export default router;