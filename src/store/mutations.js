import * as type from "./types";

const mutations = {
    [type.SET_USER]: (state, payload) => {
        state.user = payload;
    },
};

export default mutations;
