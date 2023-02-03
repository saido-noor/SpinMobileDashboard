<template>
  <div class="container">
    <form action="" class="form">
      <h2>Add Corporate</h2>
      <div id="name">
        <label>Name</label>
      </div>
      <input
        id="input"
        type="text"
        placeholder="name"
        name="name"
        v-model="input.name"
      />
      <div id="name">
        <label>White_Label</label>
      </div>
      <input
        id="input"
        type="text"
        placeholder="white_label"
        name="white_label"
      v-model="input.white_label"
      />

      <div id="name">
        <label>Email</label>
      </div>
      <input
        id="input"
        type="email"
        placeholder="email"
        name="email"
      v-model="input.email"
      />

      <div id="name">
        <label>Remote_Code</label>
      </div>
      <input
        id="input"
        type="text"
        placeholder="remote_code"
        name="remote_code"
       v-model="input.remote_code"
      />
      <div id="name">
        <label>Phone_Number</label>
      </div>
      <input id="input" type="text"
       placeholder="phone_number"
       name="phone_number"
       v-model="input.phone_number"/>

      <!-- firstname lastname email role username -->

      <div id="name">
        <label>Country</label>
      </div>
      <input id="input" type="text"
       placeholder="country" 
       name="user_group"
       v-model="input.country"/>
      <!-- <input id='input' type='text' placeholder='role' onChange={handleChange}/> -->
      <!-- <select v-model="selected" id="input">
                    <option disabled value=""  placeholder="role">Please select one</option>
                    <option>FInance</option>
                    <option>Admin</option>
                    <option>C</option>
                    </select> -->
      <br />
      <br />
      <div>
        <button class="button bg-gradient-success mt-4 mb-0" v-on:click.prevent="addCop()">
          Save
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "AddUser",
    data(){
        return{
            
            input:{
            name:"",
            white_label:"",
            email:"",
            remote_code:"",
            phone_number:"",
            country:""
            }
        }
    },
    methods: {

        addCop: async function (){
        let name = this.input.name;
        let white_label = this.input.white_label;
        let email = this.input.email;
        let remote_code = this.input.remote_code;
        let phone_number = this.input.phone_number;
        let country = this.input.country;
        const requestOption = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, white_label,email,remote_code,phone_number,country }),
        };
        const url = "";
        this.success = false;
        this.error = null;
        return fetch(`https://7766-197-248-70-213.eu.ngrok.io/api/corporate/create/`, 
        requestOption).then(response => response.json()).then((data) =>{
            console.log(data)

        })
        }
    },
};
</script>
<style>
.container {
  background-color: white;
  overflow: hidden;
}
.form {
  margin-top: 5%;
}
h2 {
  margin-left: 33%;

  font-size: 30px;
  font-weight: normal;
}
#name {
  margin-left: 33%;
  width: 80%;
}
#input {
  margin-top: 10px;
  margin-left: 33%;
  width: 30%;
  height: 5%;
  padding: 10px;
  border-radius: 0px;
  border: 1px solid;
  font-size: 15px;
}

.button {
  height: 5vh;
  width: 30%;
  border-radius: 10px;
  border: 0px solid;
  font-size: 15px;
  font-weight: bold;
  background-color: #008000;

  margin-left: 33%;
  padding: 2px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
}
</style>

