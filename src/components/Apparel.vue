<template>
  <div class="backdrop" @click.self="closeApparel">
    <div class="modal">
      
      <div class="positionexitbtn">
      
        <button @click="closeApparel" class="exitbtn">
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
        <item>
          <img src="https://images.unsplash.com/photo-1507553532144-b9df5e38c8d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=913&q=80"
          class="imgitem">
        </item>
        <item>
          <img src="https://images.unsplash.com/photo-1507553532144-b9df5e38c8d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=913&q=80"
          class="imgitem">
        </item>
        <item>
          <img src="https://images.unsplash.com/photo-1507553532144-b9df5e38c8d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=913&q=80"
          class="imgitem">
        </item>
        
      </div> 
      
      
     
    </div>
  </div>
  </template>
  
<script>
import item from './item.vue';
  export default {
   name: 'Apparel',
    data() {
      return {
        slides: [
          'https://images.unsplash.com/photo-1542838776-096d877b5aa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          'https://images.unsplash.com/photo-1632670549453-7a3dfac254a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          'https://images.unsplash.com/photo-1626307416562-ee839676f5fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        ],

        showItem: true,
      }
      
    },
    components: { 
      item,     
  },
  methods: {
        closeApparel() {
          this.$emit('close')
        },
    }
}
</script>