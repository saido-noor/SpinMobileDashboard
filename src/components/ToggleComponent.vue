<!-- <template>

    <label for="toggle__button" class="btn btn-link">
        <span class="toggle__label" v-if="isActive" @click="on()">On</span>
        <span class="toggle__label" v-if="! isActive" @click="off">Off</span>
        
        <input type="checkbox" id="toggle__button" v-model="checkedValue">

         <span class="toggle__switch"></span>
    </label>
</template>


<script>
import { HTTP } from '@/axios';

export default{
    props:{
        defaultState:{
            type:Boolean,
            default:false
        }
    },
    
data() {
        return {
            currentState: this.defaultState
        }
    },
 
    
   computed: {
    isActive() {
        return this.currentState;
    },

    checkedValue: {
        get() {
            return this.defaultState
        },
        set(newValue) {
            this.currentState = newValue;
            this.$emit('change', newValue)
        }
    }
}
}
</script>





<style scoped>

.toggle__button {
    vertical-align: middle;
    user-select: none;
    cursor: pointer;
}
.toggle__button input[type="checkbox"] {
    opacity: 0;
    position: absolute;
    width: 1px;
    height: 1px;
}
.toggle__button .toggle__switch {
    display:inline-block;
    height:12px;
    border-radius:6px;
    width:40px;
    background: #BFCBD9;
    box-shadow: inset 0 0 1px #BFCBD9;
    position:relative;
    margin-left: 10px;
    transition: all .25s;
}

.toggle__button .toggle__switch::after, 
.toggle__button .toggle__switch::before {
    content: "";
    position: absolute;
    display: block;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    left: 0;
    top: -3px;
    transform: translateX(0);
    transition: all .25s cubic-bezier(.5, -.6, .5, 1.6);
}

.toggle__button .toggle__switch::after {
    background: #4D4D4D;
    box-shadow: 0 0 1px #666;
}
.toggle__button .toggle__switch::before {
    background: #4D4D4D;
    box-shadow: 0 0 0 3px rgba(0,0,0,0.1);
    opacity:0;
}
</style> -->



































<template>
  <div>
    <h1>Toggle</h1>
    <div class="tContainer">
      <label class="toggle">
        <span class="onoff">{{ toggleText }}</span>
        <input type="checkbox" v-model="isEnabled" @click="toggleStatus">
        <span class="slider round"></span>
      </label>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { HTTP } from "@/axios";
export default {
  name: "ToggleComponent",
  data() {
    return {
      isEnabled: false,
      toggleText: "Disabled",
    };
  },
  methods: {
    toggleStatus() {
      HTTP
        .post("/api/users/disable/", { isEnabled: this.isEnabled })
        .then((response) => {
          this.toggleText = response.data.isEnabled ? "Enabled" : "Disabled";
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>