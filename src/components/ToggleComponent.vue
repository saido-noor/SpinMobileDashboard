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


































<!-- <template>
  <div class="toggle-wrapper">
    <label class="toggle">
      <input 
        type="checkbox" 
        :checked="(mode === 'dark') ? 'checked' : false" 
        @change="$emit('toggle')"
      />
      <span class="toggler round"></span>
    </label>
  </div>
</template>

<script>
export default {
  props: ['mode']
  
}
</script>

<style>
.toggle {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}
.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}
.toggler {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #15202B;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.toggler:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background: #FFF;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
input:checked + .toggler {
  background: #2196F3;
}
input:focus + toggler {
  box-shadow: 0 0 2px #2196F3;
}
input:checked + .toggler:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
.toggler.round {
  border-radius: 34px;
}
.toggler.round:before {
  border-radius: 50%;
}
</style> -->


<template>

</template>

<script>


</script>