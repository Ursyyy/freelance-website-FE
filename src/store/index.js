import { createStore } from "vuex";
import getters from "./getters";
import mutations from "./mutations";

const store = createStore({
    state: {
        user: {
            username: "Ursyyy",
        },
    },
    getters,
    mutations,
    actions: {},
    modules: {},
});

export default store;
