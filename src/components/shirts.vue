<template>
    <div class="backdrop" @click.self="closeShirts">
      <div class="modal"> 
        
        <div class="positionexitbtn">
      
          <button @click="closeShirts" class="exitbtn">
            <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" stroke="currentColor" 
            class="w-6 h-6 hover:fill-gray hover:w-8 
            hover:h-8 place-self-center">
            <path stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>

        </div>

        <div class="items">
         <!--i use v-bind to treat 10 as a number-->
          <item id="black-shirt"  item="black shirt" :price="10">
            <img src="https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            class="imgitem">
          </item>
          <item>
            <img src="https://images.unsplash.com/photo-1508160703418-fde5a61fdf38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
           class="imgitem">
          </item>
          <item>
            <img src="https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            class="imgitem">
          </item>
          <item>
            <img src="https://images.unsplash.com/photo-1513188447171-ecf00455f051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=856&q=80"
            class="imgitem">
          </item>
          <item>
            <img src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            class="imgitem">
          </item>
          <item>
            <img src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
            class="imgitem">
          </item>
          <item>
            <img src="https://images.unsplash.com/photo-1519568470290-c0c1fbfff16f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=604&q=80"
            class="imgitem">
          </item>

        </div> 
        
      </div>
    </div>
    </template>
    
    <script>
import item from './item.vue';    
export default {
  name: 'shirts',
  data() {
    return {
      showItem: true,
    }
  },
  components: {
       item,   
  },

  methods: {
    closeShirts() {
      this.$emit('close')
    },
            
  }
}
    </script>