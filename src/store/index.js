import { createStore } from 'vuex'
import auth from './auth/index'
import { account } from "./modules/account";
import { alert } from "./modules/alert";
export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  

  },
  actions: {
  },
  modules: {
    auth,
    // account,alert
    
  }
})
