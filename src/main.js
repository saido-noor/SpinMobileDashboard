import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// configuring font awesome css 
// import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
//configuring bootstrap css,js
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import "@/assets/static/css/soft-ui-dashboard.min.css"
// import "@/assets/static/css/nucleo-icons.css"
// import "@/assets/static/css/soft-ui-dashboard.css"
// import "@/assets/static/fonts/nucleo-icons.eot"
// import "@/assets/static/js/soft-ui-dashboard.js"
// import "@/assets/static/js/soft-ui-dashboard.min.js"




createApp(App).use(store).use(router).mount('#app')
