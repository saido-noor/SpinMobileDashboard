import { SET_AUTHENTICATION, SET_USERNAME, SET_PASSWORD, SET_TOKEN } from "../storeconstants";

export default {
  [SET_AUTHENTICATION](state, authenticated) {
    state.authenticated = authenticated;
  },
  [SET_USERNAME](state, username) {
    state.username = username;
  },
  [SET_PASSWORD](state, password) {
    state.password = password;
  },
  [SET_TOKEN](state, token) {
    state.token = token;
  },

  // [SET_EMAIL](state, email){
  //   state.email=email;
  // }
};
