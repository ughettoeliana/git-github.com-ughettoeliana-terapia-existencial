
import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import App from "./src/App.vue";
import router from "./router/router";
const app = createApp(App);
app.use(router);
app.mount('#app'); 

import './node_modules/bootstrap/dist/js/bootstrap.js';