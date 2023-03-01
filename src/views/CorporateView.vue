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
           
                <a class="nav-link collapsed" href="#"> <i class="fa-solid fa-code-compare"></i><span>Corporates</span> </a>
           
        
        
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
            <h1>Corporates</h1>
            <nav>
            <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
            <li class="breadcrumb-item"><a href="/display">Home</a></li>
            <li class="breadcrumb-item text-sm"><a class="opacity-5 text-dark" href="javascript:;">Pages</a></li>
            <li class="breadcrumb-item text-sm text-dark active" aria-current="page">Corporates</li>
          </ol>
            </nav>
         </div>
       
 <section class="section dashboard">
        <div class="row">
          <div class="col-lg-12">
           <div class="card">
            <div class="col-md-12 main-datatable">
            <div class="card-body">
               <div class="row d-flex">
                        
                        <div class="col-sm-4 createSegment"> 
                         <a class="btn dim_button create_new" type="button"  data-bs-toggle="modal"
                  data-bs-target="#createCopModal"> <span class="glyphicon glyphicon-plus"></span> Create New</a>
                  <div class="loader" v-if='isLoading'>
         
        </div>
                   <div class="col-xs-12 col-sm-6 col-sm-offset-3" v-else-if='filteredData.length'>
                   
                                  
            <label class='control-label'>Show</label>
            <select class="form-control" v-model='perPage'>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
        </div>
        <br>
                        </div>
                        
                        <div
                  class="modal fade"
                  id="createCopModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button
                          type="button"
                          class="btn btn-warning"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                      <div class="modal-body">
                        <form>
                          <div class="mb-3">
                            <label
                                        for="exampleInputEmail1"
                                        class="form-label"
                                        >Name
                                      </label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        placeholder="name"
                                        aria-describedby="name"
                                        name="name"
                                        v-model="name"
                                      />
                          </div>
                          <div class="mb-3">
                             <label
                                        for="exampleInputEmail1"
                                        class="form-label"
                                        >White_Label</label
                                      >
                                      <input
                                      
                                        class="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        type="text"
                                        placeholder="white_label"
                                        name="white_label"
                                        v-model="white_label"
                                      />
                          </div>
                          <div class="mb-3">
                            <label
                                        for="exampleInputEmail1"
                                        class="form-label"
                                        >Email</label
                                      >
                                      <input
                                        type="email"
                                        class="form-control"
                                        id="exampleInputEmail1"
                                        placeholder="email"
                                        aria-describedby="emailHelp"
                                        name="email"
                                        v-model="email"
                                      />
                          </div>
                          <div class="mb-3">
                            <label
                                        for="exampleInputEmail1"
                                        class="form-label"
                                        >Address
                                      </label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        placeholder="address"
                                        aria-describedby="name"
                                        v-model="address"
                                      />
                          </div>
                          <div class="mb-3">
                            <label
                                        for="exampleInputEmail1"
                                        class="form-label"
                                        >Remote_Code
                                      </label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        placeholder="remote_code"
                                        aria-describedby="name"
                                        name="remote_code"
                                        v-model="remote_code"
                                      />
                          </div>
                          <div class="mb-3">
                                      <label
                                        for="exampleInputEmail1"
                                        class="form-label"
                                        >Phone_Number
                                      </label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        placeholder="phone_number"
                                        aria-describedby="name"
                                        name="phone_number"
                                        v-model="phone_number"
                                      />
                                    </div>
                                    <div class="mb-3">
                                      <label
                                        for="exampleInputEmail1"
                                        class="form-label"
                                        >Country
                                      </label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        placeholder="country"
                                        aria-describedby="name"
                                        name="country"
                                        v-model="country"
                                      />
                                    </div>
                          <button
                            type="submit"
                            class="btn bg-gradient-success mt-4 mb-0"
                            v-on:click.prevent="addCop()"
                          >
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                        <div class="col-sm-8 add_flex">
                            <div class="form-group searchInput">
                                <label for="email">Search:</label>
                                <input type="search" class="form-control" id="filterbox" placeholder=" " v-model="searchQuery">{{ searchData }}
                            </div>
                        </div> 
                    </div>
                  
        
        <!-- <div class="col-xs-12 col-sm-6 col-sm-offset-3" v-else>
            Nothing to show
        </div> -->
                    <div class="overflow-x">
                         
                        <table style="width:100%;" id="filtertable" class="table cust-datatable dataTable no-footer" >
                            <thead>
                                <tr>
                                    <!-- <th style="min-width:50px;">ID</th> -->
                                    <th style="min-width:90px;">Name</th>
                                    <th style="min-width:80px;">Email</th>
                                    <th style="min-width:80px;">Remote Code</th>
                                    <!-- <th style="min-width:90px;">Address</th>
                                    <th style="min-width:90px;">Postal_code</th> -->
                                    <th style="min-width:80px;">Phone Number</th>
                                    <th style="min-width:80px;">Country</th>
                                    <th style="min-width:80px;">Status</th>
                                    <th style="min-width:50px;">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                               
                                
                        <tr v-for="cop in filteredData">
                        <td>{{ cop.name }}</td>
                        <td>{{ cop.main_contact_email }}</td>
                        <td>{{ cop.remote_code }}</td>
                        <!-- <td>{{ cop.address }}</td>
                        <td>{{ cop.postal_code }}</td> -->
                        
                         
                        
                        <td>{{ cop.main_contact_tel }}</td>
                        <td>{{ cop.country }}</td>
                        <td><span class="mode mode_on" :class="{ mode_on: cop.state } ">{{ cop.state }}</span></td>
                        
                        <td>
                          <span class="actionCust">
                         <a 
                          class="text-success px-3 mb-0 fas fa-eye  me-2"
                          data-bs-target="#viewCopModal"
                          data-bs-toggle="modal"
                          @click="viewCOp(cop)"
                          >
                            
                          </a>
                          </span>
                          <span class="actionCust">
                             <a
                            type="button"
                            class="text-success px-3 mb-0 fas fa-pencil-alt  me-2"
                            data-bs-toggle="modal"
                            data-bs-target="#updateCopModal"
                             @click="editCop(cop)"
                          >
                            
                        </a>
                          </span>
                         <span class="actionCust">
                           <a class=" fas fa-trash text-success text-sm  me-2 px-3 mb-0"
                          @click="deleteCop(cop)"
                          >
                            
                        </a>
                         </span>
                              
                         
       </td>
      

                <div class="modal fade"
                            id="viewCopModal"
                            tabindex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-success" id="exampleModalLabel">Corporate Details </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
            <p>
                   <p> {{ name }}</p>
                  <p >{{ email }}</p>
                  <p>{{ remote_code }} </p>
                  <p>{{ address }}</p>
                  <p>{{ postal_code }}</p>
                  <p>{{ phone_number }}</p>
                  <p>{{ white_label }}</p>
                  <p>{{ country }}</p>
                  <p>{{ state }}</p>
                  
                </p>
                
      </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-warning" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>                
                                
                                
                                <div class="buttons">
                                <div
                            class="modal fade"
                            id="updateCopModal"
                            tabindex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div class="modal-dialog">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <button
                                    type="button"
                                    class="btn btn-warning"
                                    data-bs-dismiss="modal"
                                  >
                                    Close
                                  </button>
                                </div>
                                <div class="modal-body">
                                  <form>
                                    <div class="mb-3">
                                      <label
                                        for="exampleInputEmail1"
                                        class="form-label"
                                        >Name
                                      </label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        placeholder="name"
                                        aria-describedby="name"
                                        name="name"
                                        v-model="name"
                                      />
                                    </div>
                                    <div class="mb-3">
                                      <label
                                        for="exampleInputEmail1"
                                        class="form-label"
                                        >White_Label</label
                                      >
                                      <input
                                      
                                        class="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        type="text"
                                        placeholder="white_label"
                                        name="white_label"
                                        v-model="white_label"
                                      />
                                    </div>
                                    <div class="mb-3">
                                      <label
                                        for="exampleInputEmail1"
                                        class="form-label"
                                        >Email</label
                                      >
                                      <input
                                        type="email"
                                        class="form-control"
                                        id="exampleInputEmail1"
                                        placeholder="email"
                                        aria-describedby="emailHelp"
                                        name="email"
                                        v-model="email"
                                      />
                                    </div>
                                    <div class="mb-3">
                                      <label
                                        for="exampleInputEmail1"
                                        class="form-label"
                                        >Address
                                      </label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        placeholder="address"
                                        aria-describedby="name"
                                        v-model="address"
                                      />
                                    </div>
                                    <div class="mb-3">
                                      <label
                                        for="exampleInputEmail1"
                                        class="form-label"
                                        >Postal_code
                                      </label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        placeholder="address"
                                        aria-describedby="name"
                                        v-model="postal_code"
                                      />
                                    </div>
                                    <div class="mb-3">
                                      <label
                                        for="exampleInputEmail1"
                                        class="form-label"
                                        >Remote_Code
                                      </label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        placeholder="remote_code"
                                        aria-describedby="name"
                                        name="remote_code"
                                        v-model="remote_code"
                                      />
                                    </div>
                                    <div class="mb-3">
                                      <label
                                        for="exampleInputEmail1"
                                        class="form-label"
                                        >Phone_Number
                                      </label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        placeholder="phone_number"
                                        aria-describedby="name"
                                        name="phone_number"
                                        v-model="phone_number"
                                      />
                                    </div>
                                    <div class="mb-3">
                                      <label
                                        for="exampleInputEmail1"
                                        class="form-label"
                                        >Country
                                      </label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        placeholder="country"
                                        aria-describedby="name"
                                        name="country"
                                        v-model="country"
                                      />
                                    </div>
                                    <button
                                      type="submit"
                                      class="btn btn-primary"
                                      v-on:click.prevent="saveCop()"
                                    >
                                      Save
                                    </button>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                          </div>
                                      </tr> 
                            </tbody>
                        </table>
                        <br>
                        <div class="text-center">
                <button class="btn bg-success  btn-sm" v-show='showPrev' @click.stop.prevent='renderList(currentPage-1)'>Prev</button>
                Page {{currentPage}} of {{totalPages}}
                <button class=" btn bg-success btn-sm" v-show='showNext' @click.stop.prevent='renderList(currentPage+1)'>Next</button>
            </div>
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

import axios from "axios";
import { HTTP } from "@/axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";

export default {
  name: "CorporateView",
  data() {
    return {
            isLoading:true,
            name:"",
            white_label:"",
            email:"",
            remote_code:"",
            phone_number:"",
            country:"",
      corporates: [],
      searchQuery:'',
      filteredData: [],
      perPage: "5",
      pageToOpen: 1,
      currentPage: 1,
    };
  },
  computed: {
    // filteredData() {
    //   return this.corporates.filter(cop => {
    //     return cop.name.toLowerCase().includes(this.searchQuery.toLowerCase());
              
    //   });
    // },
     totalPages(){
            //calculate the total number of pages based on the number of items to show per page and the total items we got from server
            return this.corporates.length && (this.corporates.length > this.perPage) ? Math.ceil(this.corporates.length/this.perPage) : 1;
        },
           start(){
            return (this.pageToOpen - 1) * this.perPage;
        },
          stop(){
            //stop at the end of the array if array length OR the items left are less than the number of items to show per page
            //do the calculation if otherwise
            if((this.corporates.length - this.start) >= this.perPage){
                return (this.pageToOpen * this.perPage) - 1;
            }

            else{
                return this.corporates.length - 1;
            }
        },
        showNext(){
            return this.currentPage < this.totalPages;
        },

        showPrev(){
            return this.currentPage > 1;
        }  
  },
  watch:{
    
    perPage:function(){
      this.renderList();

    }
  },
    created() {
    this.getCop();
  
  },

  methods: {
    getCop(){
      this.isLoading = true,
    HTTP.post(
        "/api/corporate/all-corporates/"
      )
      .then((response) => {
        this.corporates = response.data.corporates;
        this.isLoading = false,
        console.log(response);
        this.renderList();
      })
      .catch((error) => {
        console.log(error);
      });
    },
    async renderList(pageNumber=1){
            //clear currently displayed list
            this.filteredData = [];

            //set countries to display
            if(this.corporates.length){
                let _this = this;

                try {
await new Promise(function (res, rej) {
//set the page to open to the pageNumber in the parameter in order to allow start and stop to update accordingly
_this.pageToOpen = pageNumber;

//add the necessary data to `countriesToDisplay` array
for (let i = _this.start; i <= _this.stop; i++) {
_this.filteredData.push(_this.corporates[i]);
}

res();
});
//Now update the current page to the page we just loaded
_this.currentPage = _this.pageToOpen;
} catch {
console.log('render err');
}                  
            }
        },
    viewCOp(cop){
   this.name=cop.name,
      this.remote_code= cop.remote_code,
      this.white_label= cop.white_label,
      this.email= cop.email,
      this.phone_number= cop.phone_number,
      this.country= cop.country,
      this.address=cop.address,
      this.postal_code= cop.postal_code,
  HTTP.post(`/api/corporate/get-corporate/`,{

    remote_code:this.remote_code,
    
 
 }).then(response=>{
      this.cop = response.data.cop;
          console.log(response);
      })

    },
    editCop(cop){
      this.name=cop.name,
      this.remote_code= cop.remote_code,
      this.white_label= cop.white_label,
      this.email= cop.email,
      this.phone_number= cop.phone_number,
      this.country= cop.country,
      this.address=cop.address,
      this.postal_code= cop.postal_code,
      
      this.$root.$emit("bv::show::modal", "createCopModal");

    },
    saveCop(){
      HTTP.post(`/api/corporate/update/`,{
        remote_code:this.remote_code,
        name:this.name,
        white_label:this.white_label,
        email:this.email,
        phone_number:this.phone_number,
        address:this.address,
        postal_code:this.postal_code,
        country:this.country
      }).then((response) => {
          this.cop = response.data.cop;
          console.log(response);
          if (cop.code === "100.000.000") {
            this.$router.push("/corporate");
          }
        });
    },
    deleteCop(cop){
      this.name=cop.name,
      this.remote_code= cop.remote_code,
      this.white_label= cop.white_label,
      this.email= cop.email,
      this.phone_number= cop.phone_number,
      this.country= cop.country,
      this.address=cop.address,
      this.postal_code= cop.postal_code,
      
      HTTP.post(`/api/corporate/delete/`,{
      remote_code:this.remote_code
     
 
        

      }).then((response) => {
        this.getCop()
          this.cop = response.data.cop;
          console.log(response);
         
        });
    },
    addCop: async function (){
        
        const requestOption = {
        name:this.name,
        white_label: this.white_label,
        email:this.email,
        remote_code:this.remote_code,
        phone_number:this.phone_number,
        country:this.country
        };
        const url = "";
        this.success = false;
        this.error = null;
        HTTP.post(`/api/corporate/create/`, 
        requestOption,{
          headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
          },
        }).then(({requestOption})=>{
          console.log(requestOption);
        })
        }
    // saveItem() {
    //   this.items.push({ id: this.items.length + 1, label: this.newItem });
    //   this.newItem = "";
    // },
    // doEdit(editing) {
    //   this.editing = editing;
    //   this.newItem = "";
    // },
  },
};
</script>
<style>

.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 50px;
  height: 50px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}


.p-30{
    padding:30px;
}
.main-datatable {
    padding: 0px; 
    border: 1px solid #f3f2f2;
    border-bottom: 0;
    box-shadow: 0px 2px 10px 2px rgba(0,0,0,.05);
}
.d-flex{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.card_body{ 
    background-color: white;
    border: 1px solid transparent;
    border-radius: 2px;
    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}
.main-datatable .row {
    margin: 0;
} 
.searchInput {
    width: 50%;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: flex-end;
    margin: 20px 0px;
    padding: 0px 4px;
}
.searchInput input {
    border: 1px solid #e5e5e5;
    border-radius: 50px;
    margin-left: 8px;
    height: 34px;
    width: 100%;
    padding: 0px 25px 0px 10px;
    transition: all .6s ease;
}
.searchInput label {
    color: #767676;
    font-weight: normal;
}
.searchInput input:placeholder-shown {
    width: 13%;
}
.searchInput:hover input:placeholder-shown {
    width: 100%;
    cursor: pointer;
}
.searchInput:after {
    font-family: 'FontAwesome';
    color: #d4d4d4;
    position: relative;
    content: "\f002";
    right: 25px;
}

.dim_button {
    display: inline-block;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    padding-top: 6px;
    background: rgb(57, 85, 136);
    margin-right: 10px;
    position: relative;
    cursor: pointer;
    font-weight: 600;
    margin-bottom: 20px;
} 
.createSegment a { 
    margin-bottom: 0px;
    border-radius: 50px;
    background: #ffffff;
    border: 1px solid #008000;
    color: black;
    transition: all .4s ease;
}
.createSegment a:hover, .createSegment a:focus {
    transition: all .4s ease;
    background: #008000;
    color: #fff;
}
.add_flex{
    display: flex;
    justify-content: flex-end;
    padding-right:0px;
}
.main-datatable .dataTable.no-footer {
    border-bottom: 1px solid #eee;
}
.main-datatable .cust-datatable thead {
    background-color: #f9f9f9;
    text-align: left;
}
.main-datatable .cust-datatable>thead>tr>th {
    border-bottom-width: 0;
    color: #443f3f;
    font-weight: 600;
    padding: 16px 15px;
    vertical-align: middle;
    padding-left: 28px;
    text-align: left;
}
.main-datatable .cust-datatable>tbody td {
    padding: 10px 15px 10px 18px;
    color: #333232;
    font-size: 13px;
    font-weight: 500;
    word-break: break-word;
    border-color: #eee;
    text-align: left;
    vertical-align: middle;
}
.main-datatable .cust-datatable>tbody tr {
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
.btn-group i{
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
.main-datatable .actionCust a i{
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
.main-datatable .dropdown-menu > li > a:hover i{
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
    content: '';
}
.main-datatable .dropdown-menu:after {
    position: absolute;
    top: -6px;
    left: 78px;
    display: inline-block;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #ffffff;
    border-left: 6px solid transparent;
    content: '';
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
.main-datatable .dataTables_wrapper .dataTables_paginate .paginate_button:hover {
    color: #fff !important;
    border: 1px solid #3d96f5 !important;
    background: #4da3ff !important;
    box-shadow: none;
}
.main-datatable .dataTables_wrapper .dataTables_paginate .paginate_button.current, 
.main-datatable .dataTables_wrapper .dataTables_paginate .paginate_button.current:hover {
    color: #fff !important;
    border-color: transparent !important;
    background: #007bff !important;
}
.main-datatable .dataTables_paginate {
    padding-top: 0 !important;
    margin: 15px 10px;
    float: right !important;
}
.mode{
    padding:4px 10px;
    line-height: 13px;
    color:#fff;
    font-weight: 400;
    border-radius: 1rem;
    -webkit-border-radius: 1rem;
    -moz-border-radius: 1rem;
    -ms-border-radius: 1rem;
    -o-border-radius: 1rem;
    font-size:11px;
    letter-spacing: 0.4px;
}
.mode_on{
    background-color: #09922d;
}
.mode_off{
    background-color: #8b9096;
}
/* .mode_process{
    background-color: #ff8000;
}
.mode_done{
    background-color: #03a9f3;
} */
@media only screen and (max-width:1200px){
    .overflow-x{
        overflow-x:scroll;
    }
    .overflow-x::-webkit-scrollbar{
        width:5px;
        height:6px;
    }
    .overflow-x::-webkit-scrollbar-thumb{
        background-color: #888;
    }
    .overflow-x::-webkit-scrollbar-track{
         background-color: #f1f1f1;
    }
}

</style>