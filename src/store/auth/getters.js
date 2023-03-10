import { IS_USER_AUTHENTICATED, GET_USERNAME, GET_PASSWORD, GET_TOKEN, GET_USERPROFILE, GET_SAVED_SINGLE_USER_CONNECTIONS } from "../storeconstants";

export default {
  [IS_USER_AUTHENTICATED](state) {
    return state.authenticated;
  },

  [GET_USERNAME](state) {
    return state.username;
  },
  [GET_PASSWORD](state) {
    return state.password;
  },
  [GET_TOKEN](state) { 
    return state.token;
  },
  [GET_USERPROFILE](state){
    return state.GET_USERPROFILE
  },
  [GET_SAVED_SINGLE_USER_CONNECTIONS](state){
    return state.GET_SAVED_SINGLE_USER_CONNECTIONS
  }
  // [GET_EMAIL](state) {
  //   return state.email;
  // },
};
