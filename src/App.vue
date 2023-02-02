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
export default{
 components:{

    DashboardView,
    TransactionsView,
    LoginView
}
}
</script>