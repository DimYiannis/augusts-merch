<template>
    <div class="backdrop" @click.self="closeSweats">
      <div class="modal"> 
        <div class="positionexitbtn">
      
          <button @click="closeSweats" class="exitbtn">
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
       name: 'sweats',
        data() {
          return {
            showItem: true,
            items: [
          {
            id: 'black-shirt',
            name: 'Black Shirt',
            price: 10,
            img: 'https://images.unsplash.com/photo-1565971987782-9fbc5f314329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
          },
          {
            id: 'bracelet',
            name: 'Wooden Bracelet',
            price: 7,
            img: 'https://images.unsplash.com/photo-1507553532144-b9df5e38c8d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=913&q=80',
          },
          {
            id: 'Bronze Jacket',
            name: 'Bronze Jacket',
            price:60,
            img: "https://images.unsplash.com/photo-1508853363419-a9263d752c59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          },
          {
            id: 'red jacket',
            name: 'Red Jacket',
            price: 60,
            img: 'https://images.unsplash.com/photo-1542053254535-def95e944232?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
          {
            id: 'white cap',
            name: 'White Cap',
            price: 10,
            img: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
          {
            id: 'grey beanie',
            name: 'Grey Beanie',
            price: 10,
            img: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
          },
          {
            id: 'black boots',
            name: 'Black Boots',
            price: 70,
            img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
          },
          {
            id: 'black boots',
            name: 'Black Boots',
            price: 70,
            img: "https://images.unsplash.com/photo-1601155866707-30829d8384d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
          },
        ],
          }
        },
        components: {
          item,
        },
    
        methods: {
        closeSweats() {
          this.$emit('close')
        },
      }
    }
    </script>