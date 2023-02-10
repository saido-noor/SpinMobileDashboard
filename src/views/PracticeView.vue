

<template>
 <div class="container p-5">
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  User Login
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-danger" id="exampleModalLabel">Name </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
      </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-warning" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>

//importing bootstrap 5
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
export default {
 name:"PracticeView"
}
</script>



















<!-- <template>
    <div  id="shopping-list">
        <div class="header">
             <h1>{{ header || 'welcome' }}</h1>
             <button v-if="editing" @click="doEdit(false)" class="btn1 btn-cancel">Cancel</button>
             <button v-else @click="doEdit(true)" class="btn1 btn-primary">Add Item</button>
        </div>
       
        <div v-if="editing" class="add-item-form">
        <input type="text" v-model="newItem" placeholder="Add an Item" @keyup.enter="saveItem">
        <label>
            <input type="checkbox" v-model="newItemHighPriority">High Priority
        </label>
        <button v-bind:disabled="newItem.length === 0"
        class="btn btn-primary" 
     
        v-on:click="saveItem">
        Save Item
    </button>
        </div>
       
        <ul>
            <li v-for="item in items " :key="item.id">
                {{ item.label }}

            </li>
        </ul>
        
    </div>
    <p v-if="items.length===0">Nice job! you have bought all your items</p>
</template>
<script>
export default{
    name:'PracticeView',
    data(){
        return{
            header:'shopping list',
            newItem:'',
            newItemHighPriority:false,
            editing:false,
            items:[
            //    {id:1, label:'10'},
            //     {id:2, label:'40'},
            //       {id:3, label:'50'}
            ],
            
            
        }
    },
    methods:{
        saveItem(){
            this.items.push({id:this.items.length +1, label:this.newItem})
            this.newItem=''
        },
        doEdit(editing){
            this.editing=editing
            this.newItem=""
        }
    }
}
</script> -->


<!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
    Add New User
  </button>


<div class="modal fade" id="staticBackdrop" data-backdrop="static" tabindex="-1" role="dialog"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Add New User</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form autocomplete="off">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control " id="name"
                                aria-describedby="nameHelp" placeholder="Enter full name">
                        </div>

                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" class="form-control " id="email"
                                aria-describedby="nameHelp" placeholder="Enter full name">
                        </div>
                    </form>

                    <div class="form-group">
                        <label for="email">Password</label>
                        <input type="password" class="form-control " id="password"
                            aria-describedby="nameHelp" placeholder="Enter password">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div> -->