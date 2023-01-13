<template>
<header class="navbar">
    <img src="./assets/0022347955_100 (1).svg" class="h-9 tablet:h-12 w-24 tablet:w-36 md:w-44 laptop:w-60  " >
    
    <div class="flex-1 basis-1/2 text-2xl">
        August's
    </div>

    <div class=" flex flex-1 flex-col tablet:flex-row gap-1 laptop:gap-4 invisible tablet:visible text-sm">
        <a href="#sweats" class="navlink">Sweats</a>
        <a href="#shirts" class="navlink">Shirts</a>
        <a href="#pants" class="navlink">Bottoms</a>
    </div>

     <!--drop down menu-->
     <div class="flex tablet:invisible justify-center items-center h-screen bg-transparent">
        <div class="relative">
            <button
            @click="toggleBar"
            class="menubutton"
            >
            <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            class="w-6 h-8 text-white"
            >
            <path stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
            </svg>
            </button>
    
            <div 
            v-if="showBar" class="bar ">
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
        
        <span class="details" @click="merch">
            Exclusive Apparel
        </span>

        <Apparel v-show="showApparel" @close="merch"/>
    
    </section>
    <!--entry Section End-->

    <!--sweats Section Start-->
    <section id="sweats" class="section">
        <img src="./assets/gen6.jpg" alt="sweats Image" class="section_img">
    
        <span class="object-center text-xl animate-bounce 
        hover:text-2xl underline cursor-pointer absolute 
        top-[90%] left-[40%] laptop:left-[47%] text-white"
        @click="sweats">
        Sweats
        </span>

        <sweats v-show="showSweats" @close="sweats"/>

    </section>
    <!--sweats Section End-->
    
 <!--shirts Section Start-->
    <section id="shirts" class="section">
        <img src="./assets/gen1.jpg" alt="shirts Image" class=" section_img ">

        <span class="details" @click="shirts">
            Shirts
        </span>

        <shirts v-show="showShirts" @close="shirts"/>

    </section>
    <!--shirts Section End-->

    <!--bottoms Section Start-->
    <section id="pants" class="section">
        <img src="./assets/klaudia-piaskowska-Zy6oNZRdcjc-unsplash.jpg" alt="bottoms Image" class="section_img">

        <span class="details" @click="bottoms">
         Bottoms
        </span>
        
    <bottoms v-show="showBottom" @close="bottoms" />

    </section>
    <!--bottoms Section End-->
    
    <!--footer-->
    <footerSection/>
    
</template>

<script>
import Apparel from './components/Apparel.vue'
import sweats from './components/sweats.vue'
import shirts from './components/shirts.vue'
import bottoms from './components/bottoms.vue'
import footerSection from './components/footerSection.vue'



export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'App',
    components: { Apparel,footerSection,bottoms,sweats,shirts,},
    data() {
        return {
            showApparel: false, 
            showBar: false, 
            showSweats:false,     
            showShirts:false,     
            showBottom:false,     
        }
    },
    methods: {
        merch() {
            this.showApparel = !this.showApparel 
        },
        bottoms() {
            this.showBottom = !this.showBottom 
        },
        shirts() {
            this.showShirts = !this.showShirts 
        },
        sweats() {
            this.showSweats = !this.showSweats 
        },
        toggleBar() {
            this.showBar = !this.showBar;
        },
    },
        
        
}
</script>

