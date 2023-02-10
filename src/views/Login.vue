<template>
  <div class="vh-100" style="background-color: #008000">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-10">
          <div class="card" style="border-radius: 1rem">
            <div class="row g-0">
              <div class="col-md-6 col-lg-5 d-none d-md-block">
                <img
                  src="../assets/infosp.png"
                  alt="login form"
                  class="img-fluid "
                  style="border-radius: 1rem 0 0 1rem" 
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
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>

<script>
import {
  SET_AUTHENTICATION,
  SET_USERNAME,
  SET_PASSWORD,
} from "../store/storeconstants";

export default {
  name: "SigIn",

  data() {
    return {
      input: {
        username: "",
        password: "",
      },
      output: "",
    };
  },
  methods: {
    login: async function () {
      if (this.input.username != "" && this.input.password != "") {
        let password = this.input.password;
        let username = this.input.username;
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        };
        const url = "";
        this.success = false;
        this.error = null;
        return fetch(
          `https://9a77-197-248-70-213.eu.ngrok.io/api/users/login/`,
          requestOptions
        ).then(response => response.json()).then((data) => {
          // login successful if there's a user in the response
          //make sure username or password are not empty

          console.log(data);
          if (data.code == "100.000.000") {
          this.output = "Authentication complete";
          //store true to the set_authentication and username to the username
          this.$store.commit(`auth/${SET_AUTHENTICATION}`, true);
          this.$store.commit(`auth/${SET_USERNAME}`, this.input.username);
          this.$store.commit(`auth/${SET_PASSWORD}`, this.input.password);
          this.output = this.$router.push("/dashboard");
          }else{
            this.output = "wrong username and password";
          }

          
        });
      } else {
        this.$store.commit(`auth/${SET_AUTHENTICATION}`, false);
        this.output = "Username and password can not be empty";
      }
    },
  },
};
</script>
