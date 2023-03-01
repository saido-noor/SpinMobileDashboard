<template>
<header id="header" class="header fixed-top d-flex align-items-center">
         <div class="d-flex align-items-center justify-content-between"><span class="d-none d-lg-block logo d-flex align-items-center" ><img src="../assets/logo.png" alt=""></span>  
            <i class="fa-solid fa-bars toggle-sidebar-btn" @click="toggleSidenav()"></i>
            
        </div>
         <!-- <div class="search-bar">
            <form class="search-form d-flex align-items-center" method="POST" action="#"> <input type="text" name="query" placeholder="Search" title="Enter search keyword"> <button type="submit" title="Search"><i class="bi bi-search"></i></button></form>
         </div> -->
         <nav class="header-nav ms-auto">
            
            <ul class="d-flex align-items-center">
                
                <li class="nav-item  pe-3">
                  <a class="nav-link nav-profile d-flex align-items-center pe-0" href="/profile" > <img src="../assets/marie.jpg" alt="" class="rounded-circle">  </a>
                  
               </li>  
               <li class="nav-item  pe-4" ><a href="javascript:;" class="nav-link text-body p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa fa-gear cursor-pointer"></i>
              </a></li>   
               <li class="nav-item  pe-3" ><a href="javascript:;" class="nav-link text-body p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa fa-bell cursor-pointer"></i>
              </a></li>          
               
               
            </ul>
         </nav>
      </header>
      <aside id="sidebar" class="sidebar">
         <ul class="sidebar-nav" id="sidebar-nav">
            <!-- <li class="nav-item"> <router-link to="" > <a class="nav-link " href="#"> <i class="fa-regular fa-user"></i><span>Dashboard</span> </a></router-link></li>
             -->
            <li class="nav-item" >
          <a class="nav-link collapsed " href="/display">
            
          <i class="fa-solid fa-gauge"></i>
            <span class="nav-link-text ms-1">Dashboard</span>
          </a>
        </li>
        
        
            <li class="nav-item">
               
                <a class="nav-link collapsed" href="/transaction"> <i class="fa-solid fa-wallet"></i><span>Transaction</span> </a>
        
                <!-- <a href="" class="nav-link collapsed">
            <router-link to="">
                
          
             <i class="fa-regular fa-user"></i><span>Transaction</span>
    
          </router-link>
          </a> -->
    
               <!-- <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#"><i class="fa-regular fa-user"></i><span>Transaction</span><i class="bi bi-chevron-down ms-auto"></i> </a> -->
               <!-- <ul id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                  <li> <a href="components-alerts.html"> <i class="bi bi-circle"></i><span>Alerts</span> </a></li>
                  <li> <a href="components-accordion.html"> <i class="bi bi-circle"></i><span>Accordion</span> </a></li>
                  <li> <a href="components-badges.html"> <i class="bi bi-circle"></i><span>Badges</span> </a></li>
                  <li> <a href="components-breadcrumbs.html"> <i class="bi bi-circle"></i><span>Breadcrumbs</span> </a></li>
                  <li> <a href="components-buttons.html"> <i class="bi bi-circle"></i><span>Buttons</span> </a></li>
                  <li> <a href="components-cards.html"> <i class="bi bi-circle"></i><span>Cards</span> </a></li>
                  <li> <a href="components-carousel.html"> <i class="bi bi-circle"></i><span>Carousel</span> </a></li>
                  <li> <a href="components-list-group.html"> <i class="bi bi-circle"></i><span>List group</span> </a></li>
                  <li> <a href="components-modal.html"> <i class="bi bi-circle"></i><span>Modal</span> </a></li>
                  <li> <a href="components-tabs.html"> <i class="bi bi-circle"></i><span>Tabs</span> </a></li>
                  <li> <a href="components-pagination.html"> <i class="bi bi-circle"></i><span>Pagination</span> </a></li>
                  <li> <a href="components-progress.html"> <i class="bi bi-circle"></i><span>Progress</span> </a></li>
                  <li> <a href="components-spinners.html"> <i class="bi bi-circle"></i><span>Spinners</span> </a></li>
                  <li> <a href="components-tooltips.html"> <i class="bi bi-circle"></i><span>Tooltips</span> </a></li>
               </ul> -->
            </li>
            <li class="nav-item">
               
                <a class="nav-link collapsed" href="/users"> <i class="fa-solid fa-user"></i><span>Users</span> </a>
          
               <!-- <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#"> <i class="fa-regular fa-user"></i><span>Users</span><i class="bi bi-chevron-down ms-auto"></i> </a> -->
               <!-- <ul id="forms-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                  <li> <a href="forms-elements.html"> <i class="bi bi-circle"></i><span>Form Elements</span> </a></li>
                  <li> <a href="forms-layouts.html"> <i class="bi bi-circle"></i><span>Form Layouts</span> </a></li>
                  <li> <a href="forms-editors.html"> <i class="bi bi-circle"></i><span>Form Editors</span> </a></li>
                  <li> <a href="forms-validation.html"> <i class="bi bi-circle"></i><span>Form Validation</span> </a></li>
               </ul> -->
            </li>
            <li class="nav-item">
                 
                <a class="nav-link collapsed" href="/wallet"> <i class="fa-solid fa-wallet"></i><span>Wallet</span> </a>
          
        
        
        <!-- <ul id="tables-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                  <li> <a href="tables-general.html"> <i class="bi bi-circle"></i><span>General Tables</span> </a></li>
                  <li> <a href="tables-data.html"> <i class="bi bi-circle"></i><span>Data Tables</span> </a></li>
               </ul> -->
            </li>
            <li class="nav-item">
                 
                <a class="nav-link collapsed" href="/corporates"> <i class="fa-solid fa-code-compare"></i><span>Corporates</span> </a>
          
        
        
        <!-- <ul id="charts-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                  <li> <a href="charts-chartjs.html"> <i class="bi bi-circle"></i><span>Chart.js</span> </a></li>
                  <li> <a href="charts-apexcharts.html"> <i class="bi bi-circle"></i><span>ApexCharts</span> </a></li>
                  <li> <a href="charts-echarts.html"> <i class="bi bi-circle"></i><span>ECharts</span> </a></li>
               </ul> -->
            </li>
            <!-- <li class="nav-item">
               <a class="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#"> <i class="bi bi-gem"></i><span>Icons</span><i class="bi bi-chevron-down ms-auto"></i> </a>
               <ul id="icons-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                  <li> <a href="icons-bootstrap.html"> <i class="bi bi-circle"></i><span>Bootstrap Icons</span> </a></li>
                  <li> <a href="icons-remix.html"> <i class="bi bi-circle"></i><span>Remix Icons</span> </a></li>
                  <li> <a href="icons-boxicons.html"> <i class="bi bi-circle"></i><span>Boxicons</span> </a></li>
               </ul>
            </li> -->
            <!-- <li class="nav-heading">Pages</li>
            <li class="nav-item"> <a class="nav-link collapsed" href="users-profile.html"> <i class="bi bi-person"></i> <span>Profile</span> </a></li>
            <li class="nav-item"> <a class="nav-link collapsed" href="pages-faq.html"> <i class="bi bi-question-circle"></i> <span>F.A.Q</span> </a></li>
            <li class="nav-item"> <a class="nav-link collapsed" href="pages-contact.html"> <i class="bi bi-envelope"></i> <span>Contact</span> </a></li>
            <li class="nav-item"> <a class="nav-link collapsed" href="pages-register.html"> <i class="bi bi-card-list"></i> <span>Register</span> </a></li>
            <li class="nav-item"> <a class="nav-link collapsed" href="pages-login.html"> <i class="bi bi-box-arrow-in-right"></i> <span>Login</span> </a></li>
            <li class="nav-item"> <a class="nav-link collapsed" href="pages-error-404.html"> <i class="bi bi-dash-circle"></i> <span>Error 404</span> </a></li>
            <li class="nav-item"> <a class="nav-link collapsed" href="pages-blank.html"> <i class="bi bi-file-earmark"></i> <span>Blank</span> </a></li> -->
         </ul>
      </aside>
<main id="main" class="main">

  <div class="pagetitle">
            <h1>Profile</h1>
            <nav>
            <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
             <li class="breadcrumb-item"><a href="/display">Home</a></li>
            <li class="breadcrumb-item text-sm"><a class="opacity-5 text-dark" href="javascript:;">Pages</a></li>
            <li class="breadcrumb-item text-sm text-dark active" aria-current="page">Profile</li>
          </ol>
            </nav>
         </div>

         <section class="section profile">
           <div class="row">
             <div class="col-xl-4">
              <div class="card">
                <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">
                        <img src="../assets/alex.jpg" alt="Profile" class="rounded-circle">
                        <h2>Alvin</h2>
                        <h3>UI/UX Designer</h3>
                        <div class="social-links mt-2"> <a href="#" class="twitter"><i class="fa-brands fa-twitter"></i></a> <a href="#" class="facebook"><i class="fa-brands fa-facebook"></i></a> <a href="#" class="instagram"><i class="fa-brands fa-instagram"></i></a> <a href="#" class="linkedin"><i class="fa-brands fa-linkedin"></i></a></div>
                     </div>
              </div>
             </div>

             <div class="col-xl-8">
                  <div class="card">
                     <div class="card-body pt-3">
                        <ul class="nav nav-tabs nav-tabs-bordered">
                           <li class="nav-item"> <button class="nav-link active">Profile Details</button></li>
                           <!-- <li class="nav-item"> <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button></li>
                           <li class="nav-item"> <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-settings">Settings</button></li>
                           <li class="nav-item"> <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Change Password</button></li> -->
                        </ul>
                        <div class="tab-content pt-2">
                           <div class="tab-pane fade show active profile-overview" id="profile-overview" v-for="profile in profiles">
                             
                            
                               <p> {{ profile.username}}</p>
                               <p>{{ profile.email }}</p>
                               <p>{{ profile.first_name }} </p>
                               <p>{{ profile.last_name }}</p>
                              <p>{{ profile.user_groups }}</p>
                           
                              
                           </div>
                           
                        </div>
                     </div>
                  </div>
               </div>
           </div>
         </section>
</main>

</template>
<script>
import { HTTP } from "@/axios";
import { GET_USERNAME } from "@/store/storeconstants";


export default{
  name:"ProfileView",
  data(){
    return{
      profiles:[]
    }
  },
mounted(){
  this.getProfile()
},
methods:{
  getProfile(){
    let username = this.$store.getters[`auth/${GET_USERNAME}`];
   
    let user_profile = {
      "username":username
    }
    console.log(user_profile);
    HTTP.post(`/api/users/get-profile/`, user_profile,{
      headers:{"Content-Type": "application/json" }
    }).then(({data})=>{
      this.profiles=data
      console.log(data);
    })
  }
}
 
//   mounted: function(){
    
//  HTTP.post('/api/users/get-profile/',{

    
 
//  }).then(response=>{
//        this.profiles= response.data;
//         console.log(response);
//       })
   
//   },
}
</script>
<style>
/*--------------------------------------------------------------
  # Profie Page
  --------------------------------------------------------------*/
  .profile .profile-card img {
	max-width: 120px;
  }
  .profile .profile-card h2 {
	font-size: 24px;
	font-weight: 700;
	color: #2c384e;
	margin: 10px 0 0 0;
  }
  .profile .profile-card h3 {
	font-size: 18px;
  }
  .profile .profile-card .social-links a {
	font-size: 20px;
	display: inline-block;
	color: rgba(1, 41, 112, 0.5);
	line-height: 0;
	margin-right: 10px;
	transition: 0.3s;
  }
  .profile .profile-card .social-links a:hover {
	color: #012970;
  }
  .profile .profile-overview .row {
	margin-bottom: 20px;
	font-size: 15px;
  }
  .profile .profile-overview .card-title {
	color: #012970;
  }
  .profile .profile-overview .label {
	font-weight: 600;
	color: rgba(1, 41, 112, 0.6);
  }
  .profile .profile-edit label {
	font-weight: 600;
	color: rgba(1, 41, 112, 0.6);
  }
  .profile .profile-edit img {
	max-width: 120px;
  }
  
</style>