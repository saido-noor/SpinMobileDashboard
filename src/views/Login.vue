<template>
  <div class="container py-2">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-md-9">
        <div
          class="card"
          style="border-radius: 1rem; background-color: #f5f0f0"
        >
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block h-10" style="border-radius: 1rem 0 0 1rem; background-color: #FDFDFD">
              <img
                src="../assets/infosp.png"
                alt="login form"
                class="img-fluid"
              />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">
                <form @submit.prevent="handleSubmit">
                  <div class="d-flex align-items-center mb-3 pb-1">
                    <span class="h1 fw-bold mb-0">
                      <img src="../assets/logo.png" alt="" />
                    </span>
                  </div>
                  <div class="pb-0 text-left bg-transparent">
                    <h3 class="text-success">Welcome back</h3>
                    <p class="m-1">
                      Enter your username and password to sign in
                    </p>
                  </div>
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example17"
                      >Username</label
                    >

                    <input
                      type="email"
                      id="form2Example17"
                      class="form-control form-control-lg"
                      v-model="input.username"
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example27"
                      >Password</label
                    >

                    <input
                      type="password"
                      id="form2Example27"
                      class="form-control form-control-lg"
                      v-model="input.password"
                    />
                  </div>

                  <div class="pt-1 mb-4">
                    <button
                      class="btn bg-gradient-success w-100 mt-4 mb-0"
                      type="button"
                      v-on:click.prevent="login()"
                    >
                      Login
                    </button>
                    <h3 class="f-3">{{ this.output }}</h3>
                    <div class="modal-footer">
                      <a
                        href="#"
                        class=""
                        type="submit"
                        data-bs-toggle="modal"
                        data-bs-target="#resetPasswordModal"
                        >Forgot Password</a
                      >
                      <!-- <button type="button" >
  User Login
</button> -->
                      <div
                        class="modal fade"
                        id="resetPasswordModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <p
                                class="modal-title text-danger"
                                id="exampleModalLabel"
                              >
                                Enter Your Email
                              </p>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <form>
                                <div class="mb-3">
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
                                  <button
                                    type="button"
                                    class="btn bg-gradient-success w-100 mt-4 mb-0"
                                    v-on:click.prevent="proceedUser()"
                                  >
                                    proceed
                                  </button>
                               <h3 class="f-3">{{ this.output }}</h3>

                                </div>
                              </form>
                            </div>
                            <div class="modal-footer">
                              <!-- <button type="submit" class="btn btn-warning" data-bs-dismiss="modal">Close</button> -->
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
/* .card {
} */
.img-fluid{
  padding-top: 17%;
  
}
</style>

<script>
import {
  SET_AUTHENTICATION,
  SET_USERNAME,
  SET_PASSWORD,
  SET_EMAIL,
  SET_TOKEN,
} from "../store/storeconstants";
import axios from 'axios'
import { HTTP } from "@/axios";
export default {
  name: "SigIn",

  data() {
    return {
      input: {
        username: "",
        password: "",
      },
      output: "",
      email:"",
    };
  },
  methods: {
    proceedUser(){
    
    HTTP.post(`/api/users/forgot-password/`,{
      
        email:this.email
      }).then((response) => {
          this.email = response.data.email;
          console.log(response);
          
          
          // if(data.code==="100.000.000"){
          // this.output = "Password sent to email";
          
          // }else{
          //   this.output = "wrong email";
          // }
        });
    },
    login: async function () {
      if (this.input.username != "" && this.input.password != "") {
        this.$store.commit(`auth/${SET_USERNAME}`, this.input.username)
        const data = {
          username:this.input.username,
          password:this.input.password,
          token:this.$route.query.token
        };
        const url = "";
        this.success = false;
        this.error = null;

        HTTP.post(`/api/users/login/`,data,{
          headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
          },
        })
          .then(({data}) => {
            // login successful if there's a user in the response
            //make sure username or password are not empty

            console.log(data);
            if (data.code == "100.000.000") {
              this.output = "Authentication complete";
              //store true to the set_authentication and username to the username
              this.$store.commit(`auth/${SET_AUTHENTICATION}`, true);
              this.$store.commit(`auth/${SET_USERNAME}`, this.input.username);
              this.$store.commit(`auth/${SET_PASSWORD}`, this.input.password);
              this.$store.commit(`auth/${SET_TOKEN}`, this.token)
              this.output = this.$router.push("/display");

            } else {
              this.$store.commit(`auth/${SET_AUTHENTICATION}`, false);
              this.output = "wrong username and password";
            }
            localStorage.setItem('username', username)
          });
          
      } else {
        
        this.output = "Username and password can not be empty";
      }
    },
  },
};
</script>
