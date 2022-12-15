<template>
<header class="navbar  bg-[#070707]"  >
<img src="./assets/0022347955_100 (1).svg" class="h-14" >
<div>
    <a href="#sweats" class="navlink">Sweats</a>
    <a href="#shirts" class="navlink">Shirts</a>
    <a href="#pants" class="navlink">Bottoms</a>
</div>
<div>
    <a href="#instagram" class="social"><font-awesome-icon class="fa-brands fa-instagram" /></a>
    <a href="#facebook" class="social"><font-awesome-icon class="fa-brands fa-facebook"  /></a>
    <a href="#twitter" class="social"><font-awesome-icon class="fa-brands fa-twitter" /></a>
    <a href="#pinterest" class="social"><font-awesome-icon class="fa-brands fa-pinterest" /></a>
</div>
</header>


   <!--entry Section Start-->
   <section id="entry" class="section">
        <img src="./assets/nonchal2.jpg">

        <div class="details">
            <h1 class="p-2">The Finest At August's Place </h1>
            <h2 class="p-2">Nonchalant Apparel</h2>
            <h3 class="p-2">Urban Style</h3>
            <h4 class="p-2">Street Clothes</h4>
            
        </div>
    <span class="underline cursor-pointer absolute top-[90%] left-[50%] ">
                Press For Order</span>

        <div class="car_buttons tranform_50">
            <button class="btn">Custom Order</button>
            <button class="btn inventory">Existing Inventory</button>
        </div>
    
    </section>
    <!--entry Section End-->

    <!--sweats Section Start-->
    <section id="sweats" class="section">
        <img src="./assets/gen6.jpg" alt="sweats Image" class="section_image">

        <div class="absolute top-[20%] left-[5%] 
        text-center text-5xl text-[#d89585]">
            <h1 class="p-2 ">Sweats</h1>
        </div>
    
        <div class="car_buttons tranform_50">
            <button class="btn">Custom Order</button>
            <button class="btn inventory">Existing Inventory</button>
        </div>

    </section>
    <!--sweats Section End-->

 <!--shirts Section Start-->
    <section id="shirts" class="section">
        <img src="./assets/gen3.jpg" alt="shirts Image" class=" w-screen h-full ">

    
        <div class=" bg-black absolute h-full top-[0%] left-[65%] text-center text-5xl  text-[#a7b4ae]">  
            <h1 class="p-4 absolute top-[30%]">Cotton Made Shirts</h1>
            <h2 class="p-4">Order Online For <span class="underline cursor-pointer">
                Touchless</span ></h2>
            <span class="underline cursor-pointer ">
                Delivery </span>
            
        </div>
    
        <div class="car_buttons tranform_50">
            <button class="btn">Custom Order</button>
            <button class="btn inventory">Existing Inventory</button>
        </div>

    </section>
    <!--shirts Section End-->

    <!--bottoms Section Start-->
    <section id="pants" class="section">
        <img src="./assets/klaudia-piaskowska-Zy6oNZRdcjc-unsplash.jpg" alt="bottoms Image" class="section_image">

        <div class="absolute top-[60%] left-[75%] text-center text-5xl text-[#0f0f0f]">
            <h1 class="">Jeans And More</h1>
            
        </div>
    
        <div class="car_buttons tranform_50">
            <button class="btn">Custom Order</button>
            <button class="btn inventory">Existing Inventory</button>
        </div>
    
    </section>-->
    <!--bottoms Section End-->

  <!--<h2>Street Outwear and More</h2>
  <img  src="./assets/street.jpg" />

  <button @click="merch"
   :class="showItems ? 'secondphase' : 'firstphase'">
   Press For Merchantise</button>

 <itemsAug v-show="showItems" @close="merch"/>  
 
 <button 
  @click="modelz"
  :class="showModels ? 'secondphase' : 'firstphase'">
  Our Models:</button>

 <ModsItem v-show="showModels" @close="modelz"/> 

 <button @click="form" :class="showForm ? 'secondphase' : 'firstphase'">Submit your Information</button>

 <FormSubm v-show="showForm" @close="form" />

 <div>
    <button :class="bucket" @click="bucket -= 1" >reduce from bucket</button>
    <button :class="bucket" @click="bucket += 1">add to bucket</button>

    <h2 v-show="bucket" style="font-size:large; color:teal; font-style:oblique">items in bucket {{bucket}}</h2>
</div> -->
</template>

<script>
import ModsItem from './components/ModsItem.vue'
import itemsAug from './components/itemsAug.vue'
import FormSubm from './components/FormSubm.vue'



export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Practise',
    components: { ModsItem, itemsAug, FormSubm, },
    data() {
        return {
            showItems: false,
            showModels: false,
            bucket: 0,
            showBucket: false,
            showForm: false,
        }
    },
    methods: {
        merch() {
            this.showItems = !this.showItems 
        },
        modelz() {
            this.showModels = !this.showModels
        },
        form() {
            this.showForm = !this.showForm
        },
        
       
    },
        watch: {
            bucket(newValue, oldValue) {
                if(newValue < oldValue && newValue === -1) {
                    alert(
                        'items cant be less than 0'
                    )
                }
            },
        }
}
</script>

