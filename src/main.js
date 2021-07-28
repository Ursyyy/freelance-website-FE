import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import NavBar from "./components/NavBar";
import AuthForm from "./components/Auth";

const VueApp = createApp(App);

VueApp.component("nav-bar", NavBar);
VueApp.component("auth-form", AuthForm);

VueApp.use(store).use(router).mount("#app");
