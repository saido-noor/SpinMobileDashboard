<template>
  <div class="container">
    <div class="row">
      <div class="col-xl-4 col-lg-5 col-md-9 d-flex flex-column mx-auto">
        <div class="card card-plain mt-7">
          <div
            class="card-body"
            style="border-radius: 1rem 0 0 3rem; background-color: #fdfdfd"
          >
            <form @submit.prevent="handleSubmit">
              <label>New Password</label>
              <div class="mb-3">
                <input
                  class="form-control"
                  type="password"
                  v-model="new_password"
                />
              </div>
              <label>Confirm Password</label>
              <div class="mb-3">
                <input
                  class="form-control"
                  type="password"
                  v-model="confirm_password"
                />
              </div>

              <div class="text-center">
                <button
                  class="btn bg-gradient-success w-100 mt-4 mb-0"
                  type="button"
                  v-on:click.prevent="resetPassword()"
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
</template>
<style>
.container {
  padding: 2%;
  font-size: 20px;
}
</style>
<script>
import { HTTP } from "@/axios";


export default {
  name: "ResetPassword",
  data() {
    return {
      new_password: "",
      confirm_password: "",
    };
  },
  mounted: function () {
    const data = {
      token:this.$route.query.token
    }

    console.log(data);
    if (data != "") {
      HTTP.post(`/api/users/verify-token/`, data)
        .then((response) => {
          console.log(response.data);
       
     
          if ((response.data.code != "100.000.000")) {
            this.$router.push("/");
          }
          // if ((response.code = "100.000.000")) {
          // }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  methods: {
    async resetPassword() {
      const userData = {
      token:this.$route.query.token,
        new_password: this.new_password,
        confirm_password: this.confirm_password,
    }
      const response = await HTTP.post(`/api/users/reset-password/`, userData);
      console.log(response.data);
      this.$router.push("/");
    },
  },
};
</script>
