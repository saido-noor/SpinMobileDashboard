
<template>




 <header id="header" class="header fixed-top d-flex align-items-center">


   <div class="d-flex align-items-center justify-content-between">


     <span class="d-none d-lg-block logo d-flex align-items-center"


       ><img src="../assets/logo.png" alt=""


     /></span>


     <i


       class="fa-solid fa-bars toggle-sidebar-btn"


       @click="toggleSidenav()"


     ></i>


   </div>


   <!-- <div class="search-bar">


           <form class="search-form d-flex align-items-center" method="POST" action="#"> <input type="text" name="query" placeholder="Search" title="Enter search keyword"> <button type="submit" title="Search"><i class="bi bi-search"></i></button></form>


        </div> -->


   <!-- <nav class="header-nav ms-auto">


     <ul class="d-flex align-items-center">


       <li class="nav-item pe-3"></li>


       <li class="nav-item pe-4">


         <a


           href="javascript:;"


           class="nav-link text-body p-0"


           id="dropdownMenuButton"


           data-bs-toggle="dropdown"


           aria-expanded="false"


         >


           <i class="fa fa-gear cursor-pointer"></i>


         </a>


       </li>


       <li class="nav-item pe-3">


         <a


           href="javascript:;"


           class="nav-link text-body p-0"


           id="dropdownMenuButton"


           data-bs-toggle="dropdown"


           aria-expanded="false"


         >


           <i class="fa fa-bell cursor-pointer"></i>


         </a>


       </li>


     </ul>


   </nav> -->


 </header>


 <aside id="sidebar" class="sidebar">


   <ul class="sidebar-nav" id="sidebar-nav">


     <!-- <li class="nav-item"> <router-link to="" > <a class="nav-link " href="#"> <i class="fa-regular fa-user"></i><span>Dashboard</span> </a></router-link></li>


            -->


     <li class="nav-item">


       <a class="nav-link collapsed" href="/display">


         <i class="fa-solid fa-gauge"></i>


         <span class="nav-link-text ms-1">Dashboard</span>


       </a>


     </li>







     <li class="nav-item">


       <a class="nav-link collapsed" href="/transaction">


         <i class="fa-solid fa-wallet"></i><span>Transaction</span>


       </a>







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


       <a class="nav-link collapsed" href="/users">


         <i class="fa-solid fa-user"></i><span>Users</span>


       </a>







       <!-- <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#"> <i class="fa-regular fa-user"></i><span>Users</span><i class="bi bi-chevron-down ms-auto"></i> </a> -->


       <!-- <ul id="forms-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">


                 <li> <a href="forms-elements.html"> <i class="bi bi-circle"></i><span>Form Elements</span> </a></li>


                 <li> <a href="forms-layouts.html"> <i class="bi bi-circle"></i><span>Form Layouts</span> </a></li>


                 <li> <a href="forms-editors.html"> <i class="bi bi-circle"></i><span>Form Editors</span> </a></li>


                 <li> <a href="forms-validation.html"> <i class="bi bi-circle"></i><span>Form Validation</span> </a></li>


              </ul> -->


     </li>


     <li class="nav-item">


       <a class="nav-link collapsed" href="/wallet">


         <i class="fa-solid fa-wallet"></i><span>Wallet</span>


       </a>







       <!-- <ul id="tables-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">


                 <li> <a href="tables-general.html"> <i class="bi bi-circle"></i><span>General Tables</span> </a></li>


                 <li> <a href="tables-data.html"> <i class="bi bi-circle"></i><span>Data Tables</span> </a></li>


              </ul> -->


     </li>


     <li class="nav-item">


       <a class="nav-link collapsed" href="/corporates">


         <i class="fa-solid fa-code-compare"></i><span>Corporates</span>


       </a>







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


         <li class="breadcrumb-item text-sm">


           <a class="opacity-5 text-dark" href="javascript:;">Pages</a>


         </li>


         <li


           class="breadcrumb-item text-sm text-dark active"


           aria-current="page"


         >


           Profile


         </li>


       </ol>


     </nav>


   </div>


<section class="section dashboard">


<div class="container ">


<div class="row">


     <div class="col-md-12">


       <div class="profile-header">


							<div class="row align-items-center">


								<div class="col-auto profile-image">


									<a href="#"> <img class="rounded-circle" alt="User Image" src="../assets/img.avif"> </a>


								</div>


								<div class="col ml-md-n2 profile-user-info">


									<h5 class="user-name mb-3">Username --  {{ username }} </h5>


									<p class=" mt-1">User Group -- {{profile.user_groups}}</p>


                 <div class="about-text"><p>Last Login -- {{ new Date(profile.last_login).toLocaleDateString(undefined, {timeZone: 'UTC'}) }}</p></div>


									<div class="user-Location mt-1"><p>Date Created --{{ new Date(profile.date_joined).toLocaleDateString(defined, {timeZone: 'UTC'}) }}</p></div>


									


								</div>


							


							</div>


						</div>


     </div>


    


    







   </div>


       


         <div class="message">


                   <transition name="fade">


                     <div v-if="buttonClicked" class="success-message">


                       <span class="check"


                         ><i class="fa fa-check-circle"></i


                       ></span>


                       {{ buttonClicked }}


                     </div>


                   </transition>


                 </div>


<div class="">







   <br>


   <br>


   <div class="profile-menu">


							<ul class="nav nav-tabs nav-tabs-solid ml-5">


								<li class="nav-item"> <i class="nav-link active"  href="">Personal Information</i> </li>


							


							</ul>


              <div class="col-md-7  mt-5 d-flex align-items-start" v-if="user_show">


             <form class="row g-3">


               <div class="form-group row">


                 <label


                   class="col-xl-2 col-lg-3 text-end mb-lg-0 align-self-center"


                   >Username</label


                 >


                 <div class="col-lg-10 col-xl-8 text-start mb-lg-0 align-self-center">


                   <input


                     class="form-control"


                     type="text"


                     v-model="username"


                     disabled


                   />


                 </div>


               </div>


               <div class="form-group row mt-3">


                 <label


                   class="col-xl-2 col-lg-3 text-end mb-lg-0 align-self-center"


                   >First Name</label


                 >


                 <div class="col-lg-9 col-xl-8">


                   <input


                     class="form-control"


                     type="text"


                     v-model="first_name"


                   />


                 </div>


               </div>







               <div class="form-group row">


                 <label


                   class="col-xl-2 col-lg-3 text-end mb-lg-0 align-self-center"


                   >Last Name</label


                 >


                 <div class="col-lg-9 col-xl-8">


                   <input


                     class="form-control"


                     type="text"


                     v-model="last_name"


                   />


                 </div>


               </div>







               <div class="form-group row">


                 <label


                   class="col-xl-2 col-lg-3 text-end mb-lg-0 align-self-center"


                   >Email Address</label


                 >


                 <div class="col-lg-9 col-xl-8">


                   <div class="input-group">


                     <span class="input-group-text"


                       ><i class="las la-at"></i


                     ></span>


                     <input class="form-control" type="text" v-model="email" />


                   </div>


                 </div>


               </div>


               <br>


               <div class="form-group row mb-3">


                 <div class="col-lg-1 col-xl-7 text-end offset-lg-3">


                   <button


                     type="submit"


                     class="btn btn-success me-3"


                     :disabled="loading"


                    @click.prevent.stop="updateUserProfile()"


                   >


                     Submit


                   </button>


                   <button


                     type="button"


                     class="btn btn-danger"


                     @click="$router.go(-1)"


                   >


                     Back


                   </button>


                 </div>


               </div>


             </form>


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


import { SAVED_SINGLE_USER_CONNECTIONS } from "@/store/storeconstants";






export default {


 name: "ProfileView",


 data() {


   return {


     profile: [],


     username: "",


     first_name: "",


     last_name: "",


     show_user: true,


     user_show: false,


     user_status_active:"",


     user_groups:"",


     date_joined:"",


     last_login:"",


     buttonClicked: false,






   };


 },


 created() {


   this.getProfile(), this.UserConnections();


 },


 mounted() {


   this.getProfile();


 },


 methods: {


   updateUserProfile(){


      HTTP.post(`/api/users/update-profile/`, {


       username: this.username,


       new_first_name: this.first_name,


       new_last_name: this.last_name,


       new_email: this.email,


     }).then((response) => {


       this.user = response.data.user;


       this.UserConnections();


       console.log(response);


           this.buttonClicked = "User Succesfully Updated ";


           setTimeout(() => {


             this.buttonClicked = "";


           }, 2000);



     });


   },


   UserConnections() {


     var savedConnections = this.$store.state.SAVED_SINGLE_USER_CONNECTIONS;


     if (savedConnections) {


       this.UsersView = savedConnections;


     } else {


       this.$store.commit(


         `auth/${SAVED_SINGLE_USER_CONNECTIONS}`,


         this.UsersView


       );


     }


     let username = this.$store.getters[`auth/${GET_USERNAME}`];






     let user_profile = {


       username: username,


     };


     console.log(user_profile);


     HTTP.post(`/api/users/get-profile/`, user_profile, {


       headers: { "Content-Type": "application/json" },


     }).then(({ data }) => {


       this.profile = data.response;


       let prof = data;






       console.log(data.response);


       for (var i in prof) {


         console.log(prof[i].username);


         this.username = prof[i].username;


         this.email = prof[i].email;


         this.first_name = prof[i].first_name;


         this.last_name = prof[i].last_name;


         this.user_status_active=prof[i].user_status_active






       }


       this.show_user = false;


       this.user_show = true;


   


     });


   },


   getProfile() {},


 },






 //   mounted: function(){






 //  HTTP.post('/api/users/get-profile/',{






 //  }).then(response=>{


 //        this.profiles= response.data;


 //         console.log(response);


 //       })






 //   },


};


</script>


<style>






.fade-enter-active,


.fade-leave-active {


 transition: opacity 0.5s;


}


.fade-enter,


.fade-leave-to {


 opacity: 0;


}


.message {


 padding-left: 460px;


 top: 20px;


 bottom: 20px;


}






.success-message {


 position: absolute;


 top: 195px;


 right: 80px;






 color: white;


 background-color: rgb(78, 150, 78);


 padding: 20px 40px;


 border-radius: 5px;


 border-left: 6px solid rgb(28, 78, 28);


}


.check {


 position: absolute;


 top: 50%;


 left: 5px;


 transform: translateY(-50%);


 font-size: 30px;


 color: white;


}


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


