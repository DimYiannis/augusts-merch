<template>
    <div class="backdrop" @click.self="closeBottoms">
      <div class="modal"> 
        
        
        <div class="positionexitbtn">
      
          <button @click="closeBottoms" class="exitbtn">
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
          
          <item v-for="item in items" :key="item.id" :id="item.id" :item="item.name" :price="item.price">
            <img :src="item.img"
            class="imgitem">
          </item>
    
        </div> 
        
      </div>
    </div>
    </template>
    
    <script>
import item from '../views/item.vue';    
export default {
  name: 'bottoms',
    data() {
      return {
        showItem: true,
        items: [
          {
            id: 'black-shirt',
            name: 'Black Shirt',
            price: 10,
            img: 'https://images.unsplash.com/photo-1636016954413-44070ee44f8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
          },
          {
            id: 'bracelet',
            name: 'Wooden Bracelet',
            price: 7,
            img: 'https://images.unsplash.com/photo-1599030337145-5bec28bee393?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
          },
          {
            id: 'Bronze Jacket',
            name: 'Bronze Jacket',
            price:60,
            img: "https://images.unsplash.com/photo-1602479503323-4b7e5068a883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=841&q=80",
          },
          {
            id: 'red jacket',
            name: 'Red Jacket',
            price: 60,
            img: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          },
          {
            id: 'white cap',
            name: 'White Cap',
            price: 10,
            img: 'https://images.unsplash.com/photo-1584864783592-f1d6d4fcd1d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
          },
          {
            id: 'grey beanie',
            name: 'Grey Beanie',
            price: 10,
            img: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          },
          {
            id: 'black boots',
            name: 'Black Boots',
            price: 70,
            img: "https://images.unsplash.com/photo-1623629225725-23a723fd5bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
          },
        ],
      }
    },
    components: {
      item,    
    },
    methods: {
    closeBottoms() {
      this.$emit('close')
    },
  }
}
</script>