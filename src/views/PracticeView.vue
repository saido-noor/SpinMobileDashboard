<template>
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
</script>