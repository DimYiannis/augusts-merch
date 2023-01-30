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
        <!--i use v-bind to treat item.price as a number
        from here i can add the item and its price-discription-->
        <item v-for="item in items" :key="item.id" :id="item.id" :item="item.name" :price="item.price">
          <img :src="item.img"
          class="imgitem">
        </item>

        <accessories v-for="accessory in accessories" :key="accessory.id" :id="accessory.id" :accessory="accessory.name" :price="accessory.price">
          <img :src="accessory.img"
          class="imgitem">
        </accessories>

        <shoes v-for="shoe in shoes" :key="shoe.id" :id="shoe.id" :shoe="shoe.name" :price="shoe.price">
          <img :src="shoe.img"
          class="imgitem">
        </shoes>
        
      </div> 
      
      
    </div>
  </div>
  </template>
  
<script>
import item from '../views/item.vue';
import accessories from '../views/accessories.vue'
import shoes from '../views/shoes.vue';
  export default {
   name: 'Apparel',
    data() {
      return {
        cost: '',
        showItem: true,
        items: [
          
          {
            id: 'Bronze Jacket',
            name: 'Bronze Jacket',
            price:60,
            img: "https://images.unsplash.com/photo-1626307416562-ee839676f5fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
          },
          {
            id: 'red jacket',
            name: 'Red Jacket',
            price: 60,
            img: 'https://images.unsplash.com/photo-1608113562252-b320e7628e17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
          },
          
        ],
        accessories: [
          {
            id: 'white cap',
            name: 'White Cap',
            price: 10,
            img: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80',
          },
          {
            id: 'grey beanie',
            name: 'Grey Beanie',
            price: 10,
            img: 'https://images.unsplash.com/photo-1618354691792-d1d42acfd860?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80',
          }, 
          {
            id: 'bracelet',
            name: 'Wooden Bracelet',
            price: 7,
            img: 'https://images.unsplash.com/photo-1632670549453-7a3dfac254a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
        ],
        shoes: [
          {
            id: 'brown-boots',
            name: 'Brown Boots',
            price: 60,
            img: 'https://images.unsplash.com/photo-1542838776-096d877b5aa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          },
          {
            id: 'black boots',
            name: 'Black Boots',
            price: 70,
            img: "https://images.unsplash.com/photo-1581803274516-209c2e3c1472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          },
        ]
      }
      
    },
  components: { 
    item,accessories,shoes,     
  },
  methods: {
    closeApparel() {
      this.$emit('close')
    },
    

    }
}
</script>