<template>
<header class="navbar">
    <img src="./assets/0022347955_100 (1).svg" class="h-6 tablet:h-8 w-24 tablet:w-36 md:w-44 laptop:w-60  " >
    
    <div class="flex-auto">
        August's
    </div>

    <div class=" flex flex-row gap-4 invisible tablet:visible">
        <a href="#sweats" class="navlink">Sweats</a>
        <a href="#shirts" class="navlink">Shirts</a>
        <a href="#pants" class="navlink">Bottoms</a>
    </div>
    
    <ul class="visible tablet:invisible">
        <li>
            <a href="#sweats" class="navlink">Sweats</a>
            <a href="#shirts" class="navlink">Shirts</a>
            <a href="#pants" class="navlink">Bottoms</a>
        </li>
    </ul>
</header>


   <!--entry Section Start-->
   <section id="entry" class="section">
        <img src="./assets/nonchal2.jpg" class="section_img">
        
    <span class="underline cursor-pointer absolute top-[90%] left-[50%] ">
        Exclusive Apparel
    </span>
        
    
    </section>
    <!--entry Section End-->

    <!--sweats Section Start-->
    <section id="sweats" class="section">
        <img src="./assets/gen6.jpg" alt="sweats Image" class="section_img">
    
        <span class="underline cursor-pointer absolute top-[90%] left-[50%] text-white ">
        Sweats
        </span>

    </section>
    <!--sweats Section End-->
    
 <!--shirts Section Start-->
    <section id="shirts" class="section">
        <img src="./assets/gen1.jpg" alt="shirts Image" class=" section_img ">

        <span class="underline cursor-pointer absolute top-[90%] left-[50%] ">
            Shirts
        </span>

    </section>
    <!--shirts Section End-->

    <!--bottoms Section Start-->
    <section id="pants" class="section">
        <img src="./assets/klaudia-piaskowska-Zy6oNZRdcjc-unsplash.jpg" alt="bottoms Image" class="section_img">

        <span class="underline cursor-pointer absolute top-[90%] left-[50%] ">
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

