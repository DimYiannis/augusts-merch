<template>
<header class="navbar">
    
    <div class="flex-1 basis-2/3 text-4xl text-black">
        August's
    </div>

     
    <div class="flex basis-1/3 justify-end justify-self-end 
    items-end gap-1 h-10 bg-transparent">
        <!--favorites-->
        <button 
        class="headerbtn">
            <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            class="headersvg">
            <path stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
        </button>
    
        <!--bag-->
        <div class="relative" 
        @mouseenter="showBar=false">
            <button  
            class="headerbtn">
                <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" stroke-width="1.5" 
                stroke="currentColor" 
                class="headersvg">
                <path stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
            </button>
        </div>    
            
        <!--drop down menu-->
        <div class="relative" @mouseover="showBar=true"
        >
            <button
            @click="toggleBar"
            class="headerbtn"
            >
                <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor" 
                class="headersvg text-white"
                >
                <path stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
                </svg>
            </button>
        </div>
        <div class="relative" @mouseleave="toggleBar" >
            <div v-if="showBar"  @click="toggleBar" class="bar ">
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
            this.showBar = !this.showBar
        },
    },
        
        
}
</script>

