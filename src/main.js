import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axiosPlugin from "./plugins/axiosPlugin";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(axiosPlugin);
app.mount("#app");
