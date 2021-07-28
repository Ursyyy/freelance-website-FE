import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AuthForm from "../components/Auth.vue";
import TaskPage from "../components/TaskPage.vue";
import UserPage from "../components/UserPage.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: () =>
            import("../views/About.vue"),
    },
    {
        path: "/auth",
        name: "Auth",
        component: AuthForm
    },
    {
        path: "/task/:id",
        name: "TaskPage",
        component: TaskPage
    },
    {
        path: "/user/:id",
        name: "UserPage",
        component: UserPage
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
