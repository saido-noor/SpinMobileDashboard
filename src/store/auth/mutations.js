import { SET_AUTHENTICATION, SET_USERNAME, SET_PASSWORD } from "../storeconstants";

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
};
