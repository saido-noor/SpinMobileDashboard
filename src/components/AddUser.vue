<template>
  <div class="container">
    <form action="" class="form">
      <h2>Add User</h2>
      <div id="name">
        <label>Username</label>
      </div>
      <input
        id="input"
        type="text"
        placeholder="userName"
        name="username"
        v-model="input.username"
        :disabled="!isEditing"
           :class="{view: !isEditing}"
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
      :disabled="!isEditing"
           :class="{view: !isEditing}"
      />

      <div id="name">
        <label>First Name</label>
      </div>
      <input
        id="input"
        type="text"
        placeholder="first_name"
        name="first_name"
       v-model="input.first_name"
       :disabled="!isEditing"
           :class="{view: !isEditing}"
      />
      <div id="name">
        <label>Last Name</label>
      </div>
      <input id="input" type="text"
       placeholder="last_name"
       name="last_name"
       v-model="input.last_name"
       :disabled="!isEditing"
           :class="{view: !isEditing}"/>

      <!-- firstname lastname email role username -->

      <div id="name">
        <label>Role</label>
      </div>
      <input id="input" type="text"
       placeholder="role" 
       name="user_group"
       v-model="input.user_group"
       :disabled="!isEditing"
           :class="{view: !isEditing}"/>
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
        <button class="button bg-gradient-success mt-4 mb-0" v-on:click.prevent="addUser()">
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
            isEditing:false,
            input:{
            username:"",
            email:"",
            first_name:"",
            last_name:"",
            user_group:""
            }

        }
    },
    mounted(){
      
    },
    methods: {

        addUser: async function (){
        let username = this.input.username;
        let email = this.input.email;
        let first_name = this.input.first_name;
        let last_name = this.input.last_name;
        let user_group = this.input.user_group;
        const requestOption = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, email,first_name,last_name,user_group }),
        };
        const url = "";
        this.success = false;
        this.error = null;
        return fetch(`https://7766-197-248-70-213.eu.ngrok.io/api/users/register/`, 
        requestOption).then(response => response.json()).then((data) =>{
            console.log(data)
           if(data.code=== "100.000.000"){
            this.$router.push("/users");
           }

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
