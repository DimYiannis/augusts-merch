<template>
    <div class="grid grid-rows-2 gap-36 h-64">
        
        <!--using slot i can add img in apparel and rendering 
        it here so i can add an item right away when i add an
        item in apparel-->
        <slot></slot>
    
        
        <div class="buybar">
          <div class="flex gap-1 p-1 ml-3">
          <!--heart icon-->
          <button class="btnmodal"
          >
          <svg xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke-width="1.5" 
          stroke="currentColor" 
          class="btnmodalsvg">
  
          <path stroke-linecap="round" 
          stroke-linejoin="round" 
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" 
          />
          </svg>
          Add to favorites
          </button>
           <!--plus icon-->
          <button class="btnmodal"
          >
          <svg xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke-width="1.5" 
          stroke="currentColor" 
          class="btnmodalsvg">

          <path stroke-linecap="round" 
          stroke-linejoin="round" 
          d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Add to basket
          </button>
          
          <!--2 elements: the "size" and the options-->
          <div class="grid gap-0">
            <!--when u hover options are shown -->
            <div @mouseenter="toggleSize" class="show">size</div>
            <!--need to save the choice-->
            <div v-if="showSize" @mouseleave="toggleSize" class="size"> 
                <option value="Small" class="dropdown hover:rounded-t-md">S</option>
                <option value="Medium" class="dropdown">M</option> 
                <option value="Large" class="dropdown">L</option> 
                <option value="XLarge" class="dropdown hover:rounded-b-md"> XL</option> 
            </div>
          </div>
          </div>
        </div>  
    </div>
</template>

<script>
    export default {
        data() {
            return {
            showSize: false,}
        },
        
        methods: {
            toggleSize() {
                this.showSize = !this.showSize
            },
        }
    }
</script>

