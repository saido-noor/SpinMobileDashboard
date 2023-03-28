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

    <nav class="header-nav ms-auto">
      <ul class="d-flex align-items-center">
        <li class="nav-item pe-5">
          <RouterLink
            class="nav-link nav-profile d-flex align-items-center pe-0"
            to="/profile"
            @click.prevent.stop=""
          >
            <img src="../assets/img.avif" alt="" class="rounded-circle" />
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>

  <aside id="sidebar" class="sidebar" :class="{ sidebar: sidebarCollapsed }">
    <ul class="sidebar-nav" id="sidebar-nav">
      <li class="nav-item">
        <a class="nav-link collapsed" href="">
          <i class="fa-solid fa-gauge"></i>

          <span class="nav-link-text ms-1">Dashboard</span>
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link collapsed" href="/transaction">
          <i class="fa-solid fa-wallet"></i><span>Transaction</span>
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link collapsed" href="/users">
          <i class="fa-solid fa-user"></i><span>Users</span>
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link collapsed" href="/wallet">
          <i class="fa-solid fa-wallet"></i><span>Wallet</span>
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link collapsed" href="/corporates">
          <i class="fa-solid fa-code-compare"></i><span>Corporates</span>
        </a>
      </li>
    </ul>
  </aside>

  <main id="main" class="main">
    <div class="pagetitle">
      <h1>Dashboard</h1>

      <nav>
        <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
          <li class="breadcrumb-item text-sm">
            <a class="opacity-5 text-dark" href="javascript:;">Pages</a>
          </li>

          <li
            class="breadcrumb-item text-sm text-dark active"
            aria-current="page"
          >
            Dashboard
          </li>
        </ol>
      </nav>
    </div>

    <section class="section1 dashboard">
      <div class="row">
        <div class="col-lg">
          <div class="row">
            <div class="col">
              <div class="card info-card sales-card">
                <div class="card-body">
                  <h5 class="card-title">Total Users</h5>

                  <div class="d-flex me-3">
                    <div
                      class="card-icon rounded-circle d-flex align-items-center justify-content-center"
                    >
                      <i class="fa-solid fa-user"></i>
                    </div>

                    <span class="">
                      <h6>{{ no_of_users }}</h6></span
                    >

                    <div class="">
                      <span class="text-muted small pt-2 ps-6"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card info-card revenue-card">
                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"
                    ><i class="bi bi-three-dots"></i
                  ></a>

                  <ul
                    class="dropdown-menu dropdown-menu-end dropdown-menu-arrow"
                  >
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a class="dropdown-item" href="#">Today</a></li>

                    <li><a class="dropdown-item" href="#">This Month</a></li>

                    <li><a class="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>

                <div class="card-body">
                  <h5 class="card-title">Number Of Transaction</h5>

                  <div class="d-flex align-items-center">
                    <div
                      class="card-icon rounded-circle d-flex align-items-center justify-content-center"
                    >
                      <i class="fa-solid fa-wallet"></i>
                    </div>

                    <div class="ps-3">
                      <h6>{{ number_of_transactions }}</h6>

                      <!-- <span class="text-success small pt-1 fw-bold">8%</span>


                     <span class="text-muted small pt-2 ps-1">increase</span> -->
                    </div>

                    <div>
                      <span class="text-muted small pt-2 ps-7"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card info-card customers-card">
                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"
                    ><i class="bi bi-three-dots"></i
                  ></a>

                  <ul
                    class="dropdown-menu dropdown-menu-end dropdown-menu-arrow"
                  >
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a class="dropdown-item" href="#">Today</a></li>

                    <li><a class="dropdown-item" href="#">This Month</a></li>

                    <li><a class="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>

                <div class="card-body">
                  <h5 class="card-title">Total TopUps</h5>

                  <div class="d-flex align-items-center">
                    <div
                      class="card-icon rounded-circle d-flex align-items-center justify-content-center"
                    >
                      <i class="fa-solid fa-regular fa-check-circle"></i>
                    </div>

                    <div class="ps-3">
                      <h6>{{ top_ups }}</h6>
                    </div>

                    <div>
                      <span class="text-muted small pt-2 ps-7"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card info-card sales-card">
                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"
                    ><i class="bi bi-three-dots"></i
                  ></a>

                  <ul
                    class="dropdown-menu dropdown-menu-end dropdown-menu-arrow"
                  >
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a class="dropdown-item" href="#">Today</a></li>

                    <li><a class="dropdown-item" href="#">This Month</a></li>

                    <li><a class="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>

                <div class="card-body">
                  <h5 class="card-title">Total Corporates</h5>

                  <div class="d-flex">
                    <div
                      class="card-icon rounded-circle d-flex align-items-center justify-content-center"
                    >
                      <i class="fa-solid fa-code-compare"></i>
                    </div>

                    <span class="">
                      <h6>{{ total_cop }}</h6></span
                    >

                    <div class="">
                      <span class="text-muted small pt-2 ps-5"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             <div class="col">
            <div class="card info-card customers-card">
              <div class="filter">
                <a class="icon" href="#" data-bs-toggle="dropdown"
                  ><i class="bi bi-three-dots"></i
                ></a>

                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li class="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>

                  <li><a class="dropdown-item" href="#">Today</a></li>

                  <li><a class="dropdown-item" href="#">This Month</a></li>

                  <li><a class="dropdown-item" href="#">This Year</a></li>
                </ul>
              </div>

              <div class="card-body">
                <h5 class="card-title">Total Balance</h5>

                <div class="d-flex align-items-center">
                  <div
                    class="card-icon rounded-circle d-flex align-items-center justify-content-center"
                  >
                    <i class="fa-solid fa-dollar-sign"></i>
                  </div>

                  <div class="ps-3">
                    <h6>{{ total_ba }}</h6>
                  </div>

                  <div>
                    <span class="text-muted small pt-2 ps-5"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
<br>
<br>
        <div class="row">
          <div class="col-lg-10">
          <div class="row">
            

            <div class="col-md-3">
              <div class="card info-card revenue-card">
                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"
                    ><i class="bi bi-three-dots"></i
                  ></a>

                  <ul
                    class="dropdown-menu dropdown-menu-end dropdown-menu-arrow"
                  >
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a class="dropdown-item" href="#">Today</a></li>

                    <li><a class="dropdown-item" href="#">This Month</a></li>

                    <li><a class="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>

                <div class="card-body">
                  <h5 class="card-title">Load Wallet Balance</h5>

                  <div class="d-flex align-items-center">
                    <div
                      class="card-icon rounded-circle d-flex align-items-center justify-content-center"
                    >
                      <i class="fa-solid fa-wallet"></i>
                    </div>

                    <div class="ps-3">
                      <h6>{{ total_load_wallet }}</h6>

                      <!-- <span class="text-success small pt-1 fw-bold">8%</span>


                     <span class="text-muted small pt-2 ps-1">increase</span> -->
                    </div>

                    <div>
                      <span class="text-muted small pt-2 ps-7"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div class="col-md-3">
              <div class="card info-card sales-card">
                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"
                    ><i class="bi bi-three-dots"></i
                  ></a>

                  <ul
                    class="dropdown-menu dropdown-menu-end dropdown-menu-arrow"
                  >
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a class="dropdown-item" href="#">Today</a></li>

                    <li><a class="dropdown-item" href="#">This Month</a></li>

                    <li><a class="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>

                <div class="card-body">
                  <h5 class="card-title">Debit Wallet Balance</h5>

                  <div class="d-flex">
                    <div
                      class="card-icon rounded-circle d-flex align-items-center justify-content-center"
                    >
                    <i class="fa-solid fa-wallet"></i>

                    </div>

                    <span class="">
                      <h6>{{ total_debit_wallet }}</h6></span
                    >

                    <div class="">
                      <span class="text-muted small pt-2 ps-5"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             
          </div>
        </div>
        </div>
      </div>
<br>

      <div class="row">
           <h1></h1>
        <div class="card">
       
          <!-- <div class="">
            <ApexChart/>
</div> -->
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { SAVED_SINGLE_USER_CONNECTIONS } from "@/store/storeconstants";

import { HTTP } from "@/axios";
// import ApexChart from "@/components/ApexChart.vue";

export default {
    name: "DisplayUserView",
    data() {
        return {
            sidebarCollapsed: false,
            no_of_users: "",
            pageNumber: "1",
            number_of_users: "",
            number_of_transactions: "",
            top_ups: "",
            total_ba: "",
            number_of_corporates: "",
            total_cop: "",
            total_load_wallet:"",
            total_debit_wallet:""

       
        };
    },
    created() {
     
      this.getUserConnections();
      this.getAll();
      

        
       
    },
    mounted() {
        this.getUserConnections()
    },
    methods: {

      getAll() {
            HTTP.post(`/api/corporate/account-balances/`)
                .then((response) => {
                this.top_ups = response.data.total_top_ups
                this.total_ba = response.data.total_balance;
                this.total_debit_wallet = response.data.debit_wallet_balance;
                this.total_load_wallet = response.data.load_wallet_balance;
                console.log(response);
                this.totalUser();
                this.noTransaction();
                this.totaCorporates()
                
            })
            
                .catch((error) => {
                console.log(error);
            });
        },
  
        totalUser() {
            HTTP.post(`/api/users/get-users/`, {
                page: this.pageNumber,
                number_of_users: "5",
            })
                .then((response) => {
                this.no_of_users = response.data.total_number_of_users;
                console.log(response);
            })
                .catch((error) => {
                console.log(error);
            });
        },
        noTransaction() {
            HTTP.post(`/api/dt-all-transaction-summary/`, {
                draw: 1,
                columns: [],
                start: 0,
                length: 10,
                search: {
                    value: "",
                    regex: false,
                },
                state_filter: "",
                status_filter: "",
                transaction_type_filter: "",
                organization_id: "",
            })
                .then((response) => {
                this.number_of_transactions = response.data.successfulTransactionsTotal,
                    console.log(response);
            })
                .catch((error) => {
                console.log(error);
            });
        },
    
        totaCorporates() {
            HTTP.post(`/api/corporate/all-corporates/`, {
                page: "1",
                number_of_corporates: "5",
            })
                .then((response) => {
                this.total_cop = response.data.total_number_of_corporates;
                console.log(response);
            })
                .catch((error) => {
                console.log(error);
            });
        },
        getUserConnections() {
            var savedConnections = this.$store.state.SAVED_SINGLE_USER_CONNECTIONS;
            if (savedConnections) {
                this.DisplayUserView = savedConnections;
            }
            else {
                this.$store.commit(`auth/${SAVED_SINGLE_USER_CONNECTIONS}`, this.DisplayUserView);
            }
            //    let username = this.$store.getters[`auth/${GET_USERNAME}`];
            //    let user_profile = {
            //   "username":username
            // }
            // if(user_profile) {
            //   this.username = user_profile
            //    console.log(username);
            // } else{
            //   this.$store.commit(`auth/${SET_USERPROFILE}`,this.user_profile)
            // }
        },
        // getUsers(){
        //    let username = this.$store.getters[`auth/${GET_USERNAME}`];
        // let user_profile = {
        //   "username":username
        // }
        // console.log(user_profile);
        // },
        toggleSidenav() {
            this.sidebarCollapsed = !this.sidebarCollapsed;
        },
        //         getUsername() {
        //   return this.$store.getters[`auth/${GET_USERNAME}`]
        // },
        //   getPassword() {
        //   return this.$store.getters[`auth/${GET_PASSWORD}`]
        // },
    },
    // components: { ApexChart }
};
</script>

<style>
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

h1,
h2,
h3,
h4,
h5,
h6 {
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
    padding: 10px;
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

.dropdown-menu .dropdown-header,
.dropdown-menu .dropdown-footer {
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

.card-header,
.card-footer {
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

.nav-tabs-bordered .nav-link:hover,
.nav-tabs-bordered .nav-link:focus {
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

.header .search-form input:focus,
.header .search-form input:hover {
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

.sidebar.collapsed {
  width: 50px;
}

.sidebar:not(.collapsed) {
  width: 250px;
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
  #main,
  #footer {
    margin-left: 250px;
  }
}

@media (max-width: 1199px) {
  .toggle-sidebar .sidebar {
    left: 0;
  }
}

@media (min-width: 1200px) {
  .toggle-sidebar #main,
  .toggle-sidebar #footer {
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

  background: white;
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

.sidebar-nav .nav-content a:hover,
.sidebar-nav .nav-content a.active {
  color: white;
}

.sidebar-nav .nav-content a.active i {
  background-color: white;
}

/*--------------------------------------------------------------


 # Dashboard


 --------------------------------------------------------------*/

/* Filter dropdown */

.section1 {
  margin-right: 9px;
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

.dashboard .filter .icon:hover,
.dashboard .filter .icon:focus {
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
