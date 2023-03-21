import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from "vuex";
import '@/plugins/apexcharts'


// import { IconsPlugin } from "bootstrap-vue";

// configuring font awesome css 
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import Toasted from "vue-toasted";
// import VueSessionStorage from "vue-sessionstorage";
// .use(VueSessionStorage)
//configuring bootstrap css,js
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import "@/assets/static/css/soft-ui-dashboard.min.css"
// import "@/assets/static/css/nucleo-icons.css"
// import "@/assets/static/css/soft-ui-dashboard.css"
// import "@/assets/static/fonts/nucleo-icons.eot"
// import "@/assets/static/js/soft-ui-dashboard.js"
// import "@/assets/static/js/soft-ui-dashboard.min.js"

/* <a
  href="javascript:;"
  class="nav-link text-body p-0"
  id="dropdownMenuButton"
  data-bs-toggle="dropdown"
  aria-expanded="false"
>
  <i class="fa fa-bell cursor-pointer"></i>
</a>; */
const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
app.use(Vuex);


