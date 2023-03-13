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
                  <RouterLink
            class="nav-link nav-profile d-flex align-items-center pe-0"
            to="/profile"
            @click.prevent.stop=""
          >
            <img src="../assets/marie.jpg" alt="" class="rounded-circle" />
          </RouterLink>
                  
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
                
                <a class="nav-link collapsed" href=""> <i class="fa-solid fa-wallet"></i><span>Wallet</span> </a>
         
        
        
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
    <!-- Navbar -->
    <div class="pagetitle">
            <h1>Wallet</h1>
            <nav>
            <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
            <li class="breadcrumb-item"><a href="/display">Home</a></li>
            <li class="breadcrumb-item text-sm"><a class="opacity-5 text-dark" href="javascript:;">Pages</a></li>
            <li class="breadcrumb-item text-sm text-dark active" aria-current="page">Wallet</li>
          </ol>
            </nav>
         </div>
    <!-- End Navbar -->
    <section class="section dashboard">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="col-md-12 main-datatable" v-cloak>
              <div class="card-body">
                <div class="row d-flex">
                 <div class="col-sm-4 createSegment">
                  
                    
                    <div
                      class="col-xs-12 col-sm-6 col-sm-offset-3"
                      
                    >
                      <label class="control-label">Show</label>
                      <select class="form-control" v-model="number_of_wallets" @click="getWallets">
                    
                        <option value="5">5</option>
                        <option value="20">10</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>
                    </div>

                    <br />
                  </div>
                    <div class="col-sm-8 add_flex">
                    <div class="form-group searchInput">
                      <label for="email">Search:</label>
                      <input
                        type="search"
                        class="form-control"
                        id="filterbox"
                        placeholder=" "
                        v-model="searchQuery"
                        @input="debouncedHandlerAccount"
                      />
                     
                    </div>
                    
                  </div>
                    
                    </div>
                <div class="overflow-x">
                  
                  <table
                    style="width: 100%"
                    ref="mainTable"
                    id="filtertable"
                    class="table cust-datatable dataTable no-footer"
                  >
                    <thead>
                      
                      <tr>
                        
                        <!-- <th style="min-width:50px;">ID</th> -->
                         <th style="min-width: 90px">Coroporates</th>
                        <th style="min-width: 80px">account number</th>
                         <th style="min-width: 90px">available</th>
                       
                        <th style="min-width: 80px">reserved</th>
                        <th style="min-width: 80px">current</th>
                        <th style="min-width: 80px">remote code</th>
                        
                       
                        <th style="min-width: 80px">Status</th>
                        <!-- <th style="min-width: 50px">Action</th> -->
                      </tr>
                    </thead>
                    
                    <tbody>
                       <div class="row text-center text-success mb-2 ">
                      <div class="d-flex justify-content-center">
                        <div class="" v-if="isLoading">
                          <div class="spinner-border align-middle" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                        </div>
                      </div>
                    </div>
                      <tr v-for="cops in copAccounts">
                        
                        <td>{{ cops.corporate }}</td>
                        <td>{{ cops.account_number }}</td>
                          <td>{{ cops.available }}</td>
                        
                        <td>{{ cops.reserved }}</td>
                        <td>{{ cops.current }}</td>
                        <td>{{ cops.remote_code }}</td>
                        <td>
                          <span
                            class="mode mode_on"
                            :class="{ mode_on: cops.state }"
                            >{{ cops.state }}</span
                          >
                        </td>
                      </tr>

                     
                    </tbody>
                  </table>
                  <br />
                   <div class="text-center" v-if="paginate">
                    <button
                      class="btn bg-success btn-sm"
                      @click="pagePrev()"
                      v-if="show"
                    >
                      Prev
                    </button>
                    {{ totalPages }}
                    <button class="btn bg-success btn-sm" @click="pageNext()">
                      Next
                    </button>
                  </div>
                </div>
                <!-- <div class="col-xs-12 col-sm-6 col-sm-offset-3" v-else>
            Nothing to show
        </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

</template>
<script>
import { HTTP } from '@/axios';
import debounce from "lodash.debounce";


export default{
  name:'WalletView',
  data(){
    return{
      account_number:"",
      corporate:"",
      reserved:"",
      available:"",
      current:"",
      remote_code:"",
   
      copAccounts:[],
      isLoading: true,
      pageNumber: "1",
      number_of_wallets: "5",
      show: false,
      isSeaching:false,
      searchQuery: "",
      num: false,
      paginate:true,
      totalPages:""
      

    }
  },
mounted() {
  this.getCorporateAccount()
  this.num = false;
},
created(){
 
   this.debouncedHandlerAccount = debounce(event => {
       
     const corporate = {
      corporate:this.searchQuery,
      page: this.pageNumber,
      number_of_wallets: this.number_of_wallets
    
    }
     console.log(corporate);
      HTTP.post(`/api/corporate/search-corporate-accounts/`,corporate)
      .then((response) => {
         
        this.copAccounts = response.data.data
      
        
        console.log(response);
        
        // this.$refs.mainTable.refresh();
      })
      .catch((error)=>{
        console.log(error);
      }).finally(()=>{
        this.isSeaching = false
        
      })
      // console.log('New value:', event.target.value);
    }, 1000);
},
 beforeUnmount() {
    this.debouncedHandlerAccount.cancel();
  },
computed:{


    
},
  methods:{
    getWallets(){
      this.getCorporateAccount()
    },
    pagePrev() {
      this.isLoading = true;

       this.num = true;
        if ((this.num = true)) {
        this.pageNumber--;
      }
       this.getCorporateAccount();
       if (this.pageNumber <= 1) {
        this.show = false;
      }
      // let num = this.pageNumber--;

      // HTTP.post(`/api/users/get-users/`, {
      //   page: this.pageNumber--,
      //   number_of_users: this.number_of_users,
      // })
      //   .then((response) => {
      //     this.users = response.data.user;
      //     this.isLoading = false;
      //     console.log(response);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    },
    pageNext() {
      this.isLoading = true;
      this.num = true;
        if ((this.num = true)) {
        this.pageNumber++;
      }
       this.getCorporateAccount();
      // let num = this.pageNumber++;

      // HTTP.post(`/api/users/get-users/`, {
      //   page: this.pageNumber++,
      //   number_of_users: this.number_of_users,
      // })
      //   .then((response) => {
      //     this.users = response.data.user;
      //     this.isLoading = false;
      //     console.log(response);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });



      if (this.pageNumber > 1) {
        this.show = true;
      }
    },
    getCorporateAccount(){
      this.isLoading = true
      console.log(this.pageNumber);
      HTTP.post(`/api/corporate/all-corporate-accounts/`,{
        page: this.pageNumber,
        number_of_wallets: this.number_of_wallets,
      })
        .then((response) => {
          this.copAccounts = response.data.data;
          this.isLoading = false;
          this.totalPages = response.data.total_pages;
            console.log(response);
         
        })
        .catch((error) => {
          console.log(error);
        });
    },
     
    
  }
  
 
}
</script>

<style>
.main-datatable .dataTable.no-footer {
  border-bottom: 1px solid #eee;
}
.main-datatable .cust-datatable thead {
  background-color: #f9f9f9;
}
.main-datatable .cust-datatable > thead > tr > th {
  border-bottom-width: 0;
  color: #443f3f;
  font-weight: 600;
  padding: 16px 15px;
  vertical-align: middle;
  padding-left: 18px;
  text-align: center;
}
.main-datatable .cust-datatable > tbody td {
  padding: 10px 15px 10px 18px;
  color: #333232;
  font-size: 13px;
  font-weight: 500;
  word-break: break-word;
  border-color: #eee;
  text-align: center;
  vertical-align: middle;
}
.main-datatable .cust-datatable > tbody tr {
  border-top: none;
}
.main-datatable .table > tbody > tr:nth-child(even) {
  background: #f9f9f9;
}
.btn-group.open .dropdown-toggle {
  box-shadow: none;
}
.main-datatable .dropdown_icon {
  display: inline-block;
  color: #8a8a8a;
  font-size: 12px;
  border: 1px solid #d4d4d4;
  padding: 10px 11px;
  border-radius: 50%;
  cursor: pointer;
}
.btn-group i {
  color: #8e8e8e;
  margin: 2px;
}
.main-datatable .actionCust a {
  display: inline-block;
  color: #8a8a8a;
  font-size: 12px;
  border: 1px solid #d4d4d4;
  padding: 10px 11px;
  margin: -9px 3px;
  border-radius: 50%;
  cursor: pointer;
}
.main-datatable .actionCust a i {
  color: #8e8e8e;
  margin: 2px;
}
.main-datatable .dropdown-menu {
  padding: 0;
  border-radius: 4px;
  box-shadow: 10px 10px 20px #c8c8c8;
  margin-top: 10px;
  left: -65px;
  top: 32px;
}
.main-datatable .dropdown-menu > li > a {
  display: block;
  padding: 12px 20px;
  clear: both;
  font-weight: normal;
  line-height: 1.42857;
  color: #333333;
  white-space: nowrap;
  border-bottom: 1px solid #d4d4d4;
}
.main-datatable .dropdown-menu > li > a:hover,
.main-datatable .dropdown-menu > li > a:focus {
  color: #fff;
  background: #007bff;
}
.main-datatable .dropdown-menu > li > a:hover i {
  color: #fff;
}
.main-datatable .dropdown-menu:before {
  position: absolute;
  top: -7px;
  left: 78px;
  display: inline-block;
  border-right: 7px solid transparent;
  border-bottom: 7px solid #d4d4d4;
  border-left: 7px solid transparent;
  border-bottom-color: #d4d4d4;
  content: "";
}
.main-datatable .dropdown-menu:after {
  position: absolute;
  top: -6px;
  left: 78px;
  display: inline-block;
  border-right: 6px solid transparent;
  border-bottom: 6px solid #ffffff;
  border-left: 6px solid transparent;
  content: "";
}
.dropdown-menu i {
  margin-right: 8px;
}
.main-datatable .dataTables_wrapper .dataTables_paginate .paginate_button {
  color: #999999 !important;
  background-color: #f6f6f6 !important;
  border-color: #d4d4d4 !important;
  border-radius: 40px;
  margin: 5px 3px;
}
.main-datatable
  .dataTables_wrapper
  .dataTables_paginate
  .paginate_button:hover {
  color: #fff !important;
  border: 1px solid #3d96f5 !important;
  background: #4da3ff !important;
  box-shadow: none;
}
.main-datatable
  .dataTables_wrapper
  .dataTables_paginate
  .paginate_button.current,
.main-datatable
  .dataTables_wrapper
  .dataTables_paginate
  .paginate_button.current:hover {
  color: #fff !important;
  border-color: transparent !important;
  background: #007bff !important;
}
.main-datatable .dataTables_paginate {
  padding-top: 0 !important;
  margin: 15px 10px;
  float: right !important;
}
.mode {
  padding: 4px 10px;
  line-height: 13px;
  color: #fff;
  font-weight: 400;
  border-radius: 1rem;
  -webkit-border-radius: 1rem;
  -moz-border-radius: 1rem;
  -ms-border-radius: 1rem;
  -o-border-radius: 1rem;
  font-size: 11px;
  letter-spacing: 0.4px;
}
.mode_on {
  background-color: #09922d;
}
.mode_off {
  background-color: #8b9096;
}
.mode_process {
  background-color: #ff8000;
}
.mode_done {
  background-color: #03a9f3;
}
@media only screen and (max-width: 1200px) {
  .overflow-x {
    overflow-x: scroll;
  }
  .overflow-x::-webkit-scrollbar {
    width: 5px;
    height: 6px;
  }
  .overflow-x::-webkit-scrollbar-thumb {
    background-color: #888;
  }
  .overflow-x::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
}
:root {
	scroll-behavior: smooth;
  }
  
  body {
	font-family: "Open Sans", sans-serif;
	background: #f6f9ff;
	color: #444444;
  }
  
  a {
	color: #008000;
	text-decoration: none;
  }
  
  a:hover {
	color: #008000;
	text-decoration: none;
  }
  
  h1, h2, h3, h4, h5, h6 {
	font-family: "Nunito", sans-serif;
  }
  /*--------------------------------------------------------------
  # Page Title
  --------------------------------------------------------------*/
  .pagetitle {
	margin-bottom: 10px;
  }
  .pagetitle h1 {
	font-size: 24px;
	margin-bottom: 0;
	font-weight: 600;
	color: #333841;
  }
  
  /*--------------------------------------------------------------
  # Main
  --------------------------------------------------------------*/
  #main {
	margin-top: 35px;
	padding: 30px 20px;
	transition: all 0.3s;
  }
  @media (max-width: 1199px) {
	#main {
	  padding: 20px;
	}
  }
  
.dropdown-menu {
	border-radius: 4px;
	padding: 10px 0;
	-webkit-animation-name: dropdown-animate;
	animation-name: dropdown-animate;
	-webkit-animation-duration: 0.2s;
	animation-duration: 0.2s;
	-webkit-animation-fill-mode: both;
	animation-fill-mode: both;
	border: 0;
	box-shadow: 0 5px 30px 0 rgba(82, 63, 105, 0.2);
  }
  .dropdown-menu .dropdown-header, .dropdown-menu .dropdown-footer {
	text-align: center;
	font-size: 15px;
	padding: 10px 25px;
  }
  .dropdown-menu .dropdown-footer a {
	color: #444444;
	text-decoration: underline;
  }
  .dropdown-menu .dropdown-footer a:hover {
	text-decoration: none;
  }
  .dropdown-menu .dropdown-divider {
	color: #a5c5fe;
	margin: 0;
  }
  .dropdown-menu .dropdown-item {
	font-size: 14px;
	padding: 10px 15px;
	transition: 0.3s;
  }
  .dropdown-menu .dropdown-item i {
	margin-right: 10px;
	font-size: 18px;
	line-height: 0;
  }
  .dropdown-menu .dropdown-item:hover {
	background-color: #f6f9ff;
  }
  
  @media (min-width: 768px) {
	.dropdown-menu-arrow::before {
	  content: "";
	  width: 13px;
	  height: 13px;
	  background: #fff;
	  position: absolute;
	  top: -7px;
	  right: 20px;
	  transform: rotate(45deg);
	  border-top: 1px solid #eaedf1;
	  border-left: 1px solid #eaedf1;
	}
  }
  @-webkit-keyframes dropdown-animate {
	0% {
	  opacity: 0;
	}
	100% {
	  opacity: 1;
	}
	0% {
	  opacity: 0;
	}
  }
  @keyframes dropdown-animate {
	0% {
	  opacity: 0;
	}
	100% {
	  opacity: 1;
	}
	0% {
	  opacity: 0;
	}
  }
  /* Light Backgrounds */
  .bg-primary-light {
	background-color: #cfe2ff;
	border-color: #cfe2ff;
  }
  
  .bg-secondary-light {
	background-color: #e2e3e5;
	border-color: #e2e3e5;
  }
  
  .bg-success-light {
	background-color: #d1e7dd;
	border-color: #d1e7dd;
  }
  
  .bg-danger-light {
	background-color: #f8d7da;
	border-color: #f8d7da;
  }
  
  .bg-warning-light {
	background-color: #fff3cd;
	border-color: #fff3cd;
  }
  
  .bg-info-light {
	background-color: #cff4fc;
	border-color: #cff4fc;
  }
  
  .bg-dark-light {
	background-color: #d3d3d4;
	border-color: #d3d3d4;
  }
  
  /* Card */
  .card {
	margin-bottom: 30px;
	border: none;
	border-radius: 5px;
	box-shadow: 0px 0 30px rgba(1, 41, 112, 0.1);
  }
  
  .card-header, .card-footer {
	border-color: #ebeef4;
	background-color: #fff;
	color: #798eb3;
	padding: 15px;
  }
  
  .card-title {
	padding: 20px 0 15px 0;
	font-size: 18px;
	font-weight: 500;
	color: #012970;
	font-family: "Poppins", sans-serif;
  }
  .card-title span {
	color: #899bbd;
	font-size: 14px;
	font-weight: 400;
  }
  .card-body {
	padding: 0 20px 20px 20px;
  }
  
  .card-img-overlay {
	background-color: rgba(255, 255, 255, 0.6);
  }
  
  /* Alerts */
  .alert-heading {
	font-weight: 500;
	font-family: "Poppins", sans-serif;
	font-size: 20px;
  }
  
  /* Close Button */
  .btn-close {
	background-size: 25%;
  }
  .btn-close:focus {
	outline: 0;
	box-shadow: none;
  }
  
  /* Accordion */
  .accordion-item {
	border: 1px solid #ebeef4;
  }
  
  .accordion-button:focus {
	outline: 0;
	box-shadow: none;
  }
  .accordion-button:not(.collapsed) {
	color: #012970;
	background-color: #f6f9ff;
  }
  
  .accordion-flush .accordion-button {
	padding: 15px 0;
	background: none;
	border: 0;
  }
  .accordion-flush .accordion-button:not(.collapsed) {
	box-shadow: none;
	color: #4154f1;
  }
  .accordion-flush .accordion-body {
	padding: 0 0 15px 0;
	color: #3e4f6f;
	font-size: 15px;
  }
  
  /* Breadcrumbs */
  .breadcrumb {
	font-size: 14px;
	font-family: "Nunito", sans-serif;
	
	font-weight: 600;
  }
  .breadcrumb a {
	color: #899bbd;
	transition: 0.3s;
  }
  .breadcrumb a:hover {
	color: #51678f;
  }
  .breadcrumb .breadcrumb-item::before {
	color: #899bbd;
  }
  .breadcrumb .active {
	color: #51678f;
	font-weight: 600;
  }
  
  /* Bordered Tabs */
  .nav-tabs-bordered {
	border-bottom: 2px solid #ebeef4;
  }
  .nav-tabs-bordered .nav-link {
	margin-bottom: -2px;
	border: none;
	color: #2c384e;
  }
  .nav-tabs-bordered .nav-link:hover, .nav-tabs-bordered .nav-link:focus {
	color: #008000;
  }
  .nav-tabs-bordered .nav-link.active {
	background-color: #fff;
	color: #008000;
	border-bottom: 2px solid #008000;
  }
  
  /*--------------------------------------------------------------
  # Header
  --------------------------------------------------------------*/
  .logo {
	line-height: 1;
  }
  @media (min-width: 1200px) {
	.logo {
	  width: 280px;
	}
  }
  .logo img {
	max-height: 40px;
	margin-right: 6px;
  }
  .logo span {
	font-size: 26px;
	font-weight: 700;
	color: #012970;
	font-family: "Nunito", sans-serif;
  }
  
  .header {
	transition: all 0.5s;
	z-index: 997;
	height: 50px;
	box-shadow: 0px 2px 20px rgba(1, 41, 112, 0.1);
	background-color: #fff;
	padding-left: 20px;
	/* Toggle Sidebar Button */
	/* Search Bar */
  }
  .header .toggle-sidebar-btn {
	font-size: 22px;
	
	cursor: pointer;
	color: #012970;
  }
  .header .search-bar {
	min-width: 360px;
	padding: 0 20px;
  }
  @media (max-width: 1199px) {
	.header .search-bar {
	  position: fixed;
	  top: 50px;
	  left: 0;
	  right: 0;
	  padding: 20px;
	  box-shadow: 0px 0px 15px 0px rgba(1, 41, 112, 0.1);
	  background: white;
	  z-index: 9999;
	  transition: 0.3s;
	  visibility: hidden;
	  opacity: 0;
	}
	.header .search-bar-show {
	  top: 60px;
	  visibility: visible;
	  opacity: 1;
	}
  }
  .header .search-form {
	width: 100%;
  }
  .header .search-form input {
	border: 0;
	font-size: 14px;
	color: #012970;
	border: 1px solid rgba(1, 41, 112, 0.2);
	padding: 7px 38px 7px 8px;
	border-radius: 3px;
	transition: 0.3s;
	width: 100%;
  }
  .header .search-form input:focus, .header .search-form input:hover {
	outline: none;
	box-shadow: 0 0 10px 0 rgba(1, 41, 112, 0.15);
	border: 1px solid rgba(1, 41, 112, 0.3);
  }
  .header .search-form button {
	border: 0;
	padding: 0;
	margin-left: -30px;
	background: none;
  }
  .header .search-form button i {
	color: #012970;
  }
  
  /*--------------------------------------------------------------
  # Header Nav
  --------------------------------------------------------------*/
  .header-nav ul {
	list-style: none;
  }
  .header-nav > ul {
	margin: 0;
	padding: 0;
  }
  .header-nav .nav-icon {
	font-size: 20px;
	color: #012970;
  }
  .header-nav .nav-profile {
	color: #012970;
  }
  .header-nav .nav-profile img {
	max-height: 36px;
  }
  .header-nav .nav-profile span {
	font-size: 14px;
	font-weight: 600;
  }
  .header-nav .badge-number {
	position: absolute;
	inset: 4px 6px auto auto;
	font-weight: normal;
	font-size: 11px;
	padding: 3px 6px;
  }
  .header-nav .notifications .notification-item {
	display: flex;
	align-items: center;
	padding: 15px 10px;
	transition: 0.3s;
  }
  .header-nav .notifications .notification-item i {
	margin: 0 20px 0 10px;
	font-size: 24px;
  }
  .header-nav .notifications .notification-item h4 {
	font-size: 16px;
	font-weight: 600;
	margin-bottom: 5px;
  }
  .header-nav .notifications .notification-item p {
	font-size: 13px;
	margin-bottom: 3px;
	color: #919191;
  }
  .header-nav .notifications .notification-item:hover {
	background-color: #f6f9ff;
  }
  .header-nav .messages .message-item {
	padding: 15px 10px;
	transition: 0.3s;
  }
  .header-nav .messages .message-item a {
	display: flex;
  }
  .header-nav .messages .message-item img {
	margin: 0 20px 0 10px;
	max-height: 40px;
  }
  .header-nav .messages .message-item h4 {
	font-size: 16px;
	font-weight: 600;
	margin-bottom: 5px;
	color: #444444;
  }
  .header-nav .messages .message-item p {
	font-size: 13px;
	margin-bottom: 3px;
	color: #919191;
  }
  .header-nav .messages .message-item:hover {
	background-color: #f6f9ff;
  }
  .header-nav .profile {
	min-width: 240px;
	padding-bottom: 0;
  }
  .header-nav .profile .dropdown-header h6 {
	font-size: 18px;
	margin-bottom: 0;
	font-weight: 600;
	color: #444444;
  }
  .header-nav .profile .dropdown-header span {
	font-size: 14px;
  }
  .header-nav .profile .dropdown-item {
	font-size: 14px;
	padding: 10px 15px;
	transition: 0.3s;
  }
  .header-nav .profile .dropdown-item i {
	margin-right: 10px;
	font-size: 18px;
	line-height: 0;
  }
  .header-nav .profile .dropdown-item:hover {
	background-color: #f6f9ff;
  }

  /*--------------------------------------------------------------
  # Sidebar
  --------------------------------------------------------------*/
  .sidebar {
	position: fixed;
	top: 50px;
	left: 0;
	bottom: 0;
	width: 250px;
	z-index: 996;
	transition: all 0.3s;
	padding: 20px;
	overflow-y: auto;
	scrollbar-width: thin;
	scrollbar-color: #aab7cf transparent;
	box-shadow: 0px 0px 20px rgba(1, 41, 112, 0.1);
	background-color: #fff;
  }
  @media (max-width: 1199px) {
	.sidebar {
	  left: -300px;
	}
  }
  .sidebar::-webkit-scrollbar {
	width: 5px;
	height: 8px;
	background-color: #fff;
  }
  .sidebar::-webkit-scrollbar-thumb {
	background-color: #aab7cf;
  }
  
  @media (min-width: 1200px) {
	#main, #footer {
	  margin-left: 250px;
	}
  }
  @media (max-width: 1199px) {
	.toggle-sidebar .sidebar {
	  left: 0;
	}
  }
  @media (min-width: 1200px) {
	.toggle-sidebar #main, .toggle-sidebar #footer {
	  margin-left: 0;
	}
	.toggle-sidebar .sidebar {
	  left: -300px;
	}
  }
  
  .sidebar-nav {
	padding: 0;
	margin: 0;
	list-style: none;
  }
  .sidebar-nav li {
	padding: 1px;
	margin: 0;
	list-style: none;
  }
  .sidebar-nav .nav-item {
	margin-bottom: 11px;
  }
  .sidebar-nav .nav-heading {
	font-size: 16px;
	text-transform: uppercase;
	color: #899bbd;
	font-weight: 600;
	margin: 10px 0 5px 15px;
  }
  .sidebar-nav .nav-link {
	display: flex;
	align-items: center;
	font-size: 15px;
	font-weight: 600;
	color: #4154f1;
	transition: 0.3;
	background: #f6f9ff;
	padding: 10px 15px;
	border-radius: 4px;
  }
  .sidebar-nav .nav-link i {
	font-size: 16px;
	margin-right: 19px;
    padding: 5px;
	color: #4154f1;
  }
  .sidebar-nav .nav-link.collapsed {
	color: #012970;
	background: #fff;
  }
  .sidebar-nav .nav-link.collapsed i {
	color: #899bbd;
  }
  .sidebar-nav .nav-link:hover {
	color: #008000;
	background: #f6f9ff;
  }
  .sidebar-nav .nav-link:hover i {
	color: #008000;
  }
  .sidebar-nav .nav-link .bi-chevron-down {
	margin-right: 0;
	transition: transform 0.2s ease-in-out;
  }
  .sidebar-nav .nav-link:not(.collapsed) .bi-chevron-down {
	transform: rotate(180deg);
  }
  .sidebar-nav .nav-content {
	padding: 5px 0 0 0;
	margin: 0;
	list-style: none;
  }
  .sidebar-nav .nav-content a {
	display: flex;
	align-items: center;
	font-size: 14px;
	font-weight: 600;
	color: white;
	transition: 0.3;
	padding: 10px 0 10px 40px;
	transition: 0.3s;
  }
  .sidebar-nav .nav-content a i {
	font-size: 6px;
	margin-right: 8px;
	line-height: 0;
	border-radius: 50%;
  }
  .sidebar-nav .nav-content a:hover, .sidebar-nav .nav-content a.active {
	color: white;
  }
  .sidebar-nav .nav-content a.active i {
	background-color: white;
  }

  /*--------------------------------------------------------------
  # Dashboard
  --------------------------------------------------------------*/
  /* Filter dropdown */

  .section{
    margin-right: 19px;
  }
  .dashboard .filter {
	position: absolute;
	right: 0px;
	top: 15px;
  }
  .dashboard .filter .icon {
	color: #aab7cf;
	padding-right: 20px;
	padding-bottom: 5px;
	transition: 0.3s;
	font-size: 16px;
  }
  .dashboard .filter .icon:hover, .dashboard .filter .icon:focus {
	color: #4154f1;
  }
  .dashboard .filter .dropdown-header {
	padding: 8px 15px;
  }
  .dashboard .filter .dropdown-header h6 {
	text-transform: uppercase;
	font-size: 14px;
	font-weight: 600;
	letter-spacing: 1px;
	color: #aab7cf;
	margin-bottom: 0;
	padding: 0;
  }
  .dashboard .filter .dropdown-item {
	padding: 8px 15px;
  }
  
  /* Info Cards */
  .dashboard .info-card {
	padding-bottom: 10px;
  }
  .dashboard .info-card h6 {
	font-size: 28px;
	color: #012970;
	font-weight: 700;
	margin: 0;
	padding: 0;
  }
  .dashboard .card-icon {
	font-size: 32px;
	line-height: 0;
	width: 64px;
	height: 64px;
	flex-shrink: 0;
	flex-grow: 0;
  }
  .dashboard .sales-card .card-icon {
	color: #4154f1;
	background: #f6f6fe;
  }
  .dashboard .revenue-card .card-icon {
	color: #2eca6a;
	background: #e0f8e9;
  }
  .dashboard .customers-card .card-icon {
	color: #ff771d;
	background: #ffecdf;
  }
  
  /* Activity */
  .dashboard .activity {
	font-size: 14px;
  }
  .dashboard .activity .activity-item .activite-label {
	color: #888;
	position: relative;
	flex-shrink: 0;
	flex-grow: 0;
	min-width: 64px;
  }
  .dashboard .activity .activity-item .activite-label::before {
	content: "";
	position: absolute;
	right: -11px;
	width: 4px;
	top: 0;
	bottom: 0;
	background-color: #eceefe;
  }
  .dashboard .activity .activity-item .activity-badge {
	margin-top: 3px;
	z-index: 1;
	font-size: 11px;
	line-height: 0;
	border-radius: 50%;
	flex-shrink: 0;
	border: 3px solid #fff;
	flex-grow: 0;
  }
  .dashboard .activity .activity-item .activity-content {
	padding-left: 10px;
	padding-bottom: 20px;
  }
  .dashboard .activity .activity-item:first-child .activite-label::before {
	top: 5px;
  }
  .dashboard .activity .activity-item:last-child .activity-content {
	padding-bottom: 0;
  }
  
  /* News & Updates */
  .dashboard .news .post-item + .post-item {
	margin-top: 15px;
  }
  .dashboard .news img {
	width: 80px;
	float: left;
	border-radius: 5px;
  }
  .dashboard .news h4 {
	font-size: 15px;
	margin-left: 95px;
	font-weight: bold;
	margin-bottom: 5px;
  }
  .dashboard .news h4 a {
	color: #012970;
	transition: 0.3s;
  }
  .dashboard .news h4 a:hover {
	color: #4154f1;
  }
  .dashboard .news p {
	font-size: 14px;
	color: #777777;
	margin-left: 95px;
  }
  
  /* Recent Sales */
  .dashboard .recent-sales {
	font-size: 14px;
  }
  .dashboard .recent-sales .table thead {
	background: #f6f6fe;
  }
  .dashboard .recent-sales .table thead th {
	border: 0;
  }
  .dashboard .recent-sales .dataTable-top {
	padding: 0 0 10px 0;
  }
  .dashboard .recent-sales .dataTable-bottom {
	padding: 10px 0 0 0;
  }
  
  /* Top Selling */
  .dashboard .top-selling {
	font-size: 14px;
  }
  .dashboard .top-selling .table thead {
	background: #f6f6fe;
  }
  .dashboard .top-selling .table thead th {
	border: 0;
  }
  .dashboard .top-selling .table tbody td {
	vertical-align: middle;
  }
  .dashboard .top-selling img {
	border-radius: 5px;
	max-width: 60px;
  }
  
  /*--------------------------------------------------------------
  # Icons list page
  --------------------------------------------------------------*/
  .iconslist {
	display: grid;
	max-width: 100%;
	grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
	gap: 1.25rem;
	padding-top: 15px;
  }
  .iconslist .icon {
	background-color: #fff;
	border-radius: 0.25rem;
	text-align: center;
	color: #012970;
	padding: 15px 0;
  }
  .iconslist i {
	margin: 0.25rem;
	font-size: 2.5rem;
  }
  .iconslist .label {
	font-family: var(--bs-font-monospace);
	display: inline-block;
	width: 100%;
	overflow: hidden;
	padding: 0.25rem;
	font-size: 12px;
	text-overflow: ellipsis;
	white-space: nowrap;
	color: #666;
  }
</style>



