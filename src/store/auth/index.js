import mutations from "./mutations";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      authenticated: false,
      username: "",
      password:"",
      token:localStorage.getItem('token'),
      userProfile:"",
      savedSingleUserConnections: {}
      // email:"",
    };
  },
  mutations,
  getters,
};
