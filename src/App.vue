<template>
<header class="navbar">
    <img src="./assets/0022347955_100 (1).svg" class="h-6 tablet:h-8 w-24 tablet:w-36 md:w-44 laptop:w-60  " >
    
    <div class="flex-1 basis-1/2 text-2xl">
        August's
    </div>

    <div class=" flex flex-1 flex-col tablet:flex-row gap-1 laptop:gap-4 invisible tablet:visible text-sm">
        <a href="#sweats" class="navlink">Sweats</a>
        <a href="#shirts" class="navlink">Shirts</a>
        <a href="#pants" class="navlink">Bottoms</a>
    </div>
    
    <div class="flex tablet:invisible justify-center items-center h-screen bg-transparent">
        <div class="relative">
            <button
            @click="toggleVisibility"
            class="relative z-10 block rounded-md bg-white p-3 focus:outline-none"
            >
            <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            class="w-6 h-6 text-black"
            >
            <path stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
            </svg>

                <div class="absolute w-3 h-3 rounded-full
                bg-slate-400 top-3 right-3 border border-white "></div>
            </button>
            <div @click="toggleVisibility" class="fixed inset-0 h-full w-full z-10"></div>
            <div 
            v-if="isVisible" class="absolute w-48 mt-2 right-8 bg-white rounded-md shadow-xl z-20 text-black ">
                <a href="#sweats" class="dropdown">Sweats</a>
                <a href="#shirts" class="dropdown">Shirts</a>
                <a href="#pants" class="dropdown">Bottoms</a>
            </div>
        </div>
    </div>
   
</header>


   <!--entry Section Start-->
   <section id="entry" class="section">
        <img src="./assets/nonchal2.jpg" class="section_img">
        
    <span class="details">
        Exclusive Apparel
    </span>
        
    
    </section>
    <!--entry Section End-->

    <!--sweats Section Start-->
    <section id="sweats" class="section">
        <img src="./assets/gen6.jpg" alt="sweats Image" class="section_img">
    
        <span class=" text-xl animate-bounce hover:text-2xl underline cursor-pointer absolute top-[90%] left-[50%] text-white ">
        Sweats
        </span>

    </section>
    <!--sweats Section End-->
    
 <!--shirts Section Start-->
    <section id="shirts" class="section">
        <img src="./assets/gen1.jpg" alt="shirts Image" class=" section_img ">

        <span class="details ">
            Shirts
        </span>

    </section>
    <!--shirts Section End-->

    <!--bottoms Section Start-->
    <section id="pants" class="section">
        <img src="./assets/klaudia-piaskowska-Zy6oNZRdcjc-unsplash.jpg" alt="bottoms Image" class="section_img">

        <span class="details ">
         Bottoms
        </span>
    
    </section>
    <!--bottoms Section End-->
    <footer>
        <div class="flex flex-row gap-4">
        
    </div>
    <div class="hidden tablet:flex">
        <a href="#instagram" class="social"><font-awesome-icon class="fa-brands fa-instagram" /></a>
        <a href="#facebook" class="social"><font-awesome-icon class="fa-brands fa-facebook"  /></a>
        <a href="#twitter" class="social"><font-awesome-icon class="fa-brands fa-twitter" /></a>
        <a href="#pinterest" class="social"><font-awesome-icon class="fa-brands fa-pinterest" /></a>
    </div>
    </footer>

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
    components: { ModsItem, itemsAug, FormSubm,},
    data() {
        return {
            showItems: false,
            showModels: false,
            bucket: 0,
            showBucket: false,
            showForm: false,
            isVisible: false,
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
        toggleVisibility() {
            this.isVisible = !this.isVisible;
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

