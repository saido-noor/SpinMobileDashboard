
import { createStore } from "vuex";
import auth from './auth';
import VuexPersistence from 'vuex-persist';
import localForage from 'localforage';
const vuexLocal = new VuexPersistence({
  storage: localForage,
  asyncStorage: true,
});

 export default createStore({
   state: {},
   getters: {},
   mutations: {},
   actions: {},
   plugins: [vuexLocal.plugin],
   modules: {
     auth,
     // account,alert
   },
 });

//
