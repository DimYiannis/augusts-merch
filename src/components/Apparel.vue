<template>
  <div class="backdrop" @click.self="closeApparel">
    <div class="modal"> 
      <item v-show="showItem"/>
      <item v-show="showItem"/>
      <item v-show="showItem"/>
     
   
    
        
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