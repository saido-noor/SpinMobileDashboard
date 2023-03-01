<template>
  <div class="container-fluid py-4">
        <div class="container p-30">
        <div class="row">
            <div class="col-md-12 main-datatable">
                <div class="card_body">
                    
                    <div class="row d-flex">
                        
                        <div class="col-sm-4 createSegment"> 
                         <a class="btn dim_button create_new" type="button"  data-bs-toggle="modal"
                  data-bs-target="#createUserModal"> <span class="glyphicon glyphicon-plus"></span> Create New</a>
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
                                <input type="search" class="form-control" id="filterbox" placeholder=" " v-model="searchQuery">
                            </div>
                        </div> 
                    </div>
                    <div class="overflow-x">
                        <table style="width:100%;" id="filtertable" class="table cust-datatable dataTable no-footer" >
                            <thead>
                                <tr>
                                    <!-- <th style="min-width:50px;">ID</th> -->
                                    <th style="min-width:150px;">Username</th>
                                    <th style="min-width:150px;">First Name</th>
                                    <th style="min-width:100px;">Last Name</th>
                                    <th style="min-width:100px;">Email</th>
                                    <th style="min-width:150px;">Status</th>
                                    <th style="min-width:150px;">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                               
                                
                                <tr v-for="user in filteredData ">
                                    <td>{{ user.username }}</td>
                                    <td>{{ user.first_name }}</td>
                                    <td>{{ user.last_name }}</td>
                                    <td>{{ user.email }}</td>
                                    <td>
                                   <span class="mode mode_on" :class="{ mode_on: user.is_active } ">{{ user.is_active ? 'Active' : 'Disabled' }}</span></td>

                                    <!-- <td></td>
                                    <td></td>
                                    <td><span class="mode mode_process"></span></td>
                                    <td></td>
                                    <td></td>
                                    <td><span class="mode mode_on"></span></td> -->
                                    <td>
                                       <span class="actionCust">
                                            <a href="#" type="button" data-bs-toggle="modal"
                            data-bs-target="#updateUserModal"><i class="fas fa-pencil-alt text-success font-weight-600" @click="edit(user)"  ></i></a>
                                        </span>
                                        <span class="actionCust">
                                          
                                            <a href="#" type="button"  @click="toggle(user)"><i class="fa fa-toggle-on text-success">{{ user.isDisabled ? '' : '' }}</i></a>
                                             <p v-if="successMessage">{{ successMessage }}</p>
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
                    </div>
                </div>
            </div>
        </div>
    </div>
      </div>
</template>

<script>
</script>
<style>


</style>