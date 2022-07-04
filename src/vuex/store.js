import {createStore} from "vuex";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export const store = createStore({
  state: {
    user: null,
    isLogin: false,
    loadingStatus: false,
  },
  mutations,
  getters,
  actions
});