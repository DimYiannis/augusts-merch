<template>
     <!--entry Section Start-->
   <section id="entry" class="section">
        <img src="../assets/nonchal2.jpg" class="section_img">
        
        <router-link to="/Apparel" class="details">
            Exclusive Apparel
        </router-link>

    </section>
    <!--entry Section End-->

    <!--sweats Section Start-->
    <section id="sweats" class="section">
        <img src="../assets/gen6.jpg" alt="sweats Image" class="section_img">
    
        <router-link to="/sweats" class="object-center text-xl animate-bounce 
        hover:text-2xl underline cursor-pointer absolute 
        top-[90%] left-[40%] laptop:left-[47%] text-white"
        >
        Sweats
        </router-link>
    </section>
    <!--sweats Section End-->
    
 <!--shirts Section Start-->
    <section id="shirts" class="section">
        <img src="../assets/gen1.jpg" alt="shirts Image" class=" section_img ">

        <router-link to="/shirts" class="details" >
            Shirts
        </router-link>
    </section>
    <!--shirts Section End-->

    <!--bottoms Section Start-->
    <section id="pants" class="section">
        <img src="../assets/klaudia-piaskowska-Zy6oNZRdcjc-unsplash.jpg" alt="bottoms Image" class="section_img">

        <router-link to="/bottoms" class="details">
         Bottoms
        </router-link>
        
        

    </section>
    <!--bottoms Section End-->
</template>

<script>
import Apparel from './Apparel.vue'
import sweats from './sweats.vue'
import shirts from './shirts.vue'
import bottoms from './bottoms.vue'
import footerSection from '../components/footerSection.vue'
import shoppingBag from '../components/shoppingBag.vue'
import favorites from '../components/favorites.vue'



export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'App',
    components: { Apparel,footerSection,bottoms,sweats,shirts,shoppingBag,favorites, 
    },
    data() {
        return {
            showApparel: false, 
            showBar: false, 
            showSweats:false,     
            showShirts:false,     
            showBottom:false,
            showBagtip:false,
            showFavtip:false,
            showShoppings:false,
            showFav:false,
            activeTab: '',
               
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
        toggleBagtip() {
            this.showBagtip = !this.showBagtip
        },
        togglefavtip() {
            this.showFavtip = !this.showFavtip
        },
        closeTab() {
            this.activeTab=''
        },
    
        
    },
        
        
}
</script>