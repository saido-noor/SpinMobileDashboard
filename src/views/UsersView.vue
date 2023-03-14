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
        <!-- <li class="nav-item pe-4">
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
        </li> -->
      </ul>
    </nav>
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
        <a class="nav-link collapsed" href="#">
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
      <h1>Users</h1>
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
            Users
          </li>
        </ol>
      </nav>
    </div>

    <section class="section dashboard">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="col-md-12 main-datatable" v-cloak>
              <div class="card-body">
                <div class="row d-flex">
                  <div class="col-sm-4 createSegment">
                    <a
                      class="btn dim_button create_new"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#createUserModal"
                    >
                      <span class="glyphicon glyphicon-plus"></span> Create
                      New</a
                    >
                    <br />

                    <div class="col-xs-12 col-sm-6 col-sm-offset-3">
                      <label class="control-label">Show</label>
                      <select
                        class="form-control"
                        v-model="number_of_users"
                        @click="getU"
                      >
                        <option value="5">5</option>
                        <option value="20">10</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>
                    </div>

                    <br />
                  </div>

                  <div
                    class="modal fade"
                    id="createUserModal"
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
                              <label for="exampleInputEmail1" class="form-label"
                                >Username
                              </label>
                              <input
                                class="form-control"
                                type="text"
                                placeholder="userName"
                                name="username"
                                v-model="username"
                              />
                            </div>

                            <div class="mb-3">
                              <label for="exampleInputEmail1" class="form-label"
                                >FirstName
                              </label>
                              <input
                                class="form-control"
                                type="text"
                                placeholder="first_name"
                                name="first_name"
                                v-model="first_name"
                              />
                            </div>
                            <div class="mb-3">
                              <label for="exampleInputEmail1" class="form-label"
                                >LastName
                              </label>
                              <input
                                class="form-control"
                                type="text"
                                placeholder="last_name"
                                name="last_name"
                                v-model="last_name"
                              />
                            </div>
                            <div class="mb-3">
                              <label for="exampleInputEmail1" class="form-label"
                                >Email</label
                              >
                              <input
                                class="form-control"
                                type="email"
                                placeholder="email"
                                name="email"
                                v-model="email"
                              />
                            </div>
                            <div class="mb-3">
                              <label for="exampleInputEmail1" class="form-label"
                                >Role
                              </label>
                              <input
                                class="form-control"
                                type="text"
                                placeholder="role"
                                name="user_group"
                                v-model="user_group"
                              />
                            </div>
                            <div class="mb-3">
                              <label for="exampleInputEmail1" class="form-label"
                                >Organization
                              </label>
                              <select
                                class="form-control"
                                v-model="organization"
                              >
                                <option value="Corporates">Corporates</option>
                              </select>
                              <!-- <input
                              class="form-control"
                              type="text"
                              placeholder="role"
                              name="user_group"
                              v-model="user_group"
                            /> -->
                            </div>
                            <button
                              class="btn bg-gradient-success mt-4 mb-0"
                              v-on:click.prevent="addUser()"
                            >
                              Submit
                            </button>
                            <!-- <button @click="createUser" type="submit" class="btn btn-primary" >Save</button> -->
                          </form>
                        </div>
                      </div>
                    </div>
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
                        @input="debouncedHandler"
                      />
                    </div>
                  </div>
                </div>

                <div class="overflow-x">
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
                  <table
                    style="width: 100%"
                    ref="mainTable"
                    id="filtertable"
                    class="table cust-datatable dataTable no-footer"
                  >
                    <thead>
                      <tr>
                        <!-- <th style="min-width:50px;">ID</th> -->
                        <th style="min-width: 90px">Username</th>
                        <th style="min-width: 80px">First Name</th>
                        <th style="min-width: 80px">Last Name</th>
                        <th style="min-width: 80px">Email</th>
                        <th style="min-width: 80px">Organization</th>
                        <th style="min-width: 80px">Status</th>
                        <th style="min-width: 50px">Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr v-for="user in users">
                        <td>{{ user.username }}</td>
                        <td>{{ user.first_name }}</td>
                        <td>{{ user.last_name }}</td>
                        <td>{{ user.email }}</td>
                        <td>
                          <span>{{
                            user.organization ? "Corporates" : ""
                          }}</span>
                        </td>
                        <td>
                          <span
                            class="mode mode_on"
                            :class="{ mode_on: user.user_status_active }"
                            >{{
                              user.user_status_active ? "Active" : "Disabled"
                            }}</span
                          >
                        </td>

                        <!-- <td></td>
                                    <td></td>
                                    <td><span class="mode mode_process"></span></td>
                                    <td></td>
                                    <td></td>
                                    <td><span class="mode mode_on"></span></td> -->
                        <td>
                          <span class="actionCust">
                            <a
                              href="#"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#updateUserModal"
                              ><i
                                class="fa fa-pencil-alt text-success font-weight-600"
                                @click="editUser(user)"
                              ></i
                            ></a>
                          </span>
                          <span class="actionCust">
                            <a href="#" type="button" @click="toggleUser(user)"
                              ><i class="fa fa-toggle-on text-success">{{
                                user.isDisabled ? "" : ""
                              }}</i></a
                            >

                            <!-- <p v-if="successMessage">{{ successMessage }}</p> -->
                          </span>
                        </td>
                      </tr>

                      <div
                        class="modal fade"
                        id="updateUserModal"
                        ref="createUserModal"
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
                                    >Username
                                  </label>
                                  <input
                                    class="form-control"
                                    type="text"
                                    placeholder="userName"
                                    name="username"
                                    v-model="username"
                                  />
                                </div>
                                <div class="mb-3">
                                  <label
                                    for="exampleInputEmail1"
                                    class="form-label"
                                    >Email</label
                                  >
                                  <input
                                    class="form-control"
                                    type="email"
                                    placeholder="email"
                                    name="email"
                                    v-model="email"
                                  />
                                </div>
                                <div class="mb-3">
                                  <label
                                    for="exampleInputEmail1"
                                    class="form-label"
                                    >FirstName
                                  </label>
                                  <input
                                    class="form-control"
                                    type="text"
                                    placeholder="first_name"
                                    name="first_name"
                                    v-model="first_name"
                                  />
                                </div>
                                <div class="mb-3">
                                  <label
                                    for="exampleInputEmail1"
                                    class="form-label"
                                    >LastName
                                  </label>
                                  <input
                                    class="form-control"
                                    type="text"
                                    placeholder="last_name"
                                    name="last_name"
                                    v-model="last_name"
                                  />
                                </div>
                                <div class="mb-3">
                                  <label
                                    for="exampleInputEmail1"
                                    class="form-label"
                                    >Role
                                  </label>
                                  <input
                                    class="form-control"
                                    type="text"
                                    placeholder="role"
                                    name="user_group"
                                    v-model="user_group"
                                  />
                                </div>
                                <button
                                  type="submit"
                                  class="btn bg-gradient-success mt-4 mb-0"
                                  v-on:click.prevent="saveUser(user)"
                                >
                                  Save
                                </button>
                                <!-- <button @click="createUser" type="submit" class="btn btn-primary" >Save</button> -->
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </tbody>
                  </table>
                  <div class="row mb-2">
                    <div class="col-sm-2 mx-auto">
                      <div class="" v-if="isLoading">
                        <!-- <div
                            class="spinner-border align-middle"
                            role="status"
                          >
                            <span class="visually-hidden">Loading...</span>
                          </div> -->
                        <i
                          class="fas fa-spinner fa-spin fa-3x text-success"
                        ></i>
                      </div>
                    </div>
                  </div>
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
import axios from "axios";
import { HTTP } from "@/axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import debounce from "lodash.debounce";
import { SAVED_SINGLE_USER_CONNECTIONS } from "@/store/storeconstants";

export default {
  name: "UsersView",

  data() {
    return {
      isLoading: true,
      username: "",
      email: "",
      first_name: "",
      last_name: "",
      user_group: "",
      organization: "",
      users: [],
      show: false,
      pageNumber: "1",
      number_of_users: "5",
      isDisabled: false,
      state: "",
      searchQuery: "",
      outputValue: "",
      timeout: null,
      buttonClicked: false,
      isSeaching: false,
      num: false,
      paginate: true,
      totalPages: "",
    };
  },
  mounted() {
    this.getUsers();
  },

  computed: {
    // filteredData() {
    //   return this.users.filter(user => {
    //     return user.username.toLowerCase().includes(this.searchQuery.toLowerCase());
    //   });
    // },
  },

  created() {
    this.UserConnections();

    this.debouncedHandler = debounce((event) => {
      this.paginate = false;
      const username = {
        username: this.searchQuery,
        page: this.pageNumber,
        number_of_users: this.number_of_users,
      };
      console.log(username);
      HTTP.post(`/api/users/search/`, username)
        .then((response) => {
          this.users = response.data.data;
          this.paginate = false;
          console.log(response);

          // this.$refs.mainTable.refresh();
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.isSeaching = false;
        });
      // console.log('New value:', event.target.value);
    }, 1000);
  },
  beforeUnmount() {
    this.debouncedHandler.cancel();
  },

  methods: {
    getU() {
      this.getUsers();
    },
    pagePrev() {
      this.isLoading = true;

      this.num = true;
      if ((this.num = true)) {
        this.pageNumber--;
      }
      this.getUsers();
      if (this.pageNumber <= 1) {
        this.show = false;
      }
    },
    pageNext() {
      this.isLoading = true;
      this.num = true;
      if ((this.num = true)) {
        this.pageNumber++;
      }
      this.getUsers();

      if (this.pageNumber > 1) {
        this.show = true;
      }
    },
    getUsers() {
      this.isLoading = true;

      console.log(this.pageNumber);
      HTTP.post(`/api/users/get-users/`, {
        page: this.pageNumber,
        number_of_users: this.number_of_users,
      })
        .then((response) => {
          this.users = response.data.user;
          this.isLoading = false;
          this.totalPages = response.data.total_pages;

          console.log(response);
        })
        .catch((error) => {
          console.log(error);
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
    // search(){
    //   if(this.isSeaching){
    //     return;
    //   }
    //   this.isSeaching=true
    //         setTimeout(()=>{
    //           this.performSearch()
    //         }, 1200)

    // },

    // performSearch() {

    // },

    toggleUser(user) {
      this.isLoading = false;
      this.username = user.username;
      this.first_name = user.first_name;
      this.email = user.email;
      this.last_name = user.last_name;
      this.user_group = user.user_group;
      this.state = user.state;
      this.isDisabled = !this.isDisabled;

      if (this.isDisabled) {
        HTTP.post("/api/users/disable/", {
          isDisabled: !user.isDisabled,
          username: this.username,
        })
          .then((response) => {
            this.getUsers();
            user.isDisabled = !user.isDisabled;
            this.user = response.data.user;
            this.state = response.data.state;
            console.log(response);
            console.log(response.data.user.state);

            this.buttonClicked = "User disabled ";
            setTimeout(() => {
              this.buttonClicked = "";
            }, 2000);
            // this.successMessage = 'Success! User is disabled.';
            // alert(`User ${!user.isDisabled ? 'enabled' : 'disabled'} successfully.`);
          })
          .catch((error) => {
            console.log(error);
          });
      }
      if (!this.isDisabled) {
        HTTP.post("/api/users/enable/", {
          isDisabled: !user.isDisabled,
          username: this.username,
        })
          .then((response) => {
            this.getUsers();
            user.isDisabled = !user.isDisabled;
            (this.user = response.data.user),
              (this.state = response.data.state);
            this.buttonClicked = "User enabled";
            setTimeout(() => {
              this.buttonClicked = "";
            }, 2000);
            // this.successMessage = 'Success! User is enabled.';
            console.log(response);
            console.log(response.data.user.state);
            // alert(`User ${!user.isDisabled ? 'enabled' : 'disabled'} successfully.`);
          })
          .catch((error) => {
            console.log(error);
            // alert('An error occurred.');
          });
      }
    },
    editUser(user) {
      this.username = user.username;
      this.first_name = user.first_name;
      this.email = user.email;
      this.last_name = user.last_name;
      this.user_group = user.user_group;

      this.$root.$emit("bv::show::modal", "createUserModal");
      // let element = this.$refs.createUserModal.$el;
      // $(element).modal("show");
    },
    saveUser(user) {
      this.isLoading = true;
      // this.first_name = user.first_name;
      // this.email = user.email;
      // this.last_name = user.last_name;
      // this.user_group = user.user_group;
      HTTP.post(`/api/users/update-profile/`, {
        username: this.username,
        new_first_name: this.first_name,
        new_last_name: this.last_name,
        new_email: this.email,
      }).then((response) => {
        this.user = response.data.user;
        this.getUsers();
        console.log(response);
        if (user.data === "100.000.000") {
          this.$router.push("/users");
        }
      });
    },
    resetUser(user) {
      this.username = user.username;
      this.first_name = user.first_name;
      this.email = user.email;
      this.last_name = user.last_name;
      this.user_group = user.user_group;
      HTTP.post(`/api/users/reset-password/`, {
        username: this.username,
        email: this.email,
      }).then((response) => {
        this.user = response.data.user;
        console.log(response);
      });
    },

    addUser() {
      const requestOption = {
        username: this.username,
        email: this.email,
        first_name: this.first_name,
        last_name: this.last_name,
        user_group: this.user_group,
        organization: this.organization,
      };
      const url = "";
      this.success = false;
      this.error = null;
      HTTP.post(`/api/users/register/`, requestOption, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then(({ requestOption }) => {
        console.log(requestOption);
      });
    },

    // async renderList(pageNumber = 1) {
    //   //clear currently displayed list
    //   this.filteredData = [];

    //   //set countries to display
    //   if (this.users.length) {
    //     let _this = this;

    //     try {
    //       await new Promise(function (res, rej) {
    //         //set the page to open to the pageNumber in the parameter in order to allow start and stop to update accordingly
    //         _this.pageToOpen = pageNumber;

    //         //add the necessary data to `countriesToDisplay` array
    //         for (let i = _this.start; i <= _this.stop; i++) {
    //           _this.filteredData.push(_this.users[i]);
    //         }

    //         res();
    //       });
    //       //Now update the current page to the page we just loaded
    //       _this.currentPage = _this.pageToOpen;
    //     } catch {
    //       console.log("render err");
    //     }
    //   }
    // },
  },
};
// methods:{
//   getUsers(){
//     axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
//      this.users= res.data.users
//       console.log(res);
//     })
//   }
// }
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
}
.success-message {
  position: absolute;
  top: 15px;

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
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
[v-cloak] {
  display: none;
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

.section {
  margin-right: 19px;
}
.section .dashboard {
  position: absolute;
  right: 0px;
  top: 20px;
}

.badge {
  font-size: 12px;
}
.badge {
  margin-left: 790px;
  display: flex;
}

.card-header .btn {
  float: right;
}

.p-30 {
  padding: 30px;
}
.main-datatable {
  padding: 0px;
  border: 1px solid #f3f2f2;
  border-bottom: 0;
  box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.05);
}
.d-flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.card_body {
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
  transition: all 0.6s ease;
}
.searchInput label {
  color: #767676;
  font-weight: normal;
}
/* .searchInput input:placeholder-shown {
    width: 13%;
}
.searchInput:hover input:placeholder-shown {
    width: 100%;
    cursor: pointer;
} */
.searchInput:after {
  font-family: "FontAwesome";
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
  transition: all 0.4s ease;
}
.createSegment a:hover,
.createSegment a:focus {
  transition: all 0.4s ease;
  background: #008000;
  color: #fff;
}
.add_flex {
  display: flex;
  justify-content: flex-end;
  padding-right: 0px;
}
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
</style>
