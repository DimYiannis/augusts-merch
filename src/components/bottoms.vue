<template>
    <div class="backdrop" @click.self="closeBottoms">
      <div class="modal"> 
        
        
        <div class="buybar">
          <div class="flex gap-3 p-3 ml-3 tablet:ml-3">
            <h1 class="hmodal">item.id</h1>
            <h2 class="hmodal">item.price</h2>
          </div>
          
          <div class="flex gap-3 p-3 ml-3 tablet:mr-3">
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
  
          </div>
        </div>
        
      </div>
    </div>
    </template>
    
    <script>
    
      export default {
       name: 'bottoms',
        data() {
          return {
            slides: [
              'https://images.unsplash.com/photo-1636016954413-44070ee44f8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
              'https://images.unsplash.com/photo-1599030337145-5bec28bee393?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
              'https://images.unsplash.com/photo-1602479503323-4b7e5068a883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=841&q=80',
            ],
            visibleSlide : 0,
            direction : 'left',
          }
        },
        components: {
          
        },
        methods: {
        closeBottoms() {
          this.$emit('close')
        },
      }
    }
    </script>