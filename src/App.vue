<template>
  <div class="app">
    
    <!-- <Navbar/> -->
   
    <RouterView/>
    
  

    <!-- <SidebarComponent>
    </SidebarComponent>
    <DashboardView/> -->
    

  
  </div>
</template>
<script>

import DashboardView from './views/DashboardView.vue';
import TransactionsView from './views/TransactionsView.vue';
import LoginView from './views/LoginView.vue';
import { mapState, mapActions } from 'vuex'
import SuccessMessage from './components/SuccessMessage.vue';

export default{
 components:{

    DashboardView,
    TransactionsView,
    LoginView,
    SuccessMessage
},
// computed: {
//         ...mapState({
//             alert: state => state.alert
//         })
//     },
//     methods: {
//         ...mapActions({
//             clearAlert: 'alert/clear' 
//         })
//     },
//     watch: {
//         $route (to, from){
//             this.clearAlert();
//         }
//     } 
}
</script>