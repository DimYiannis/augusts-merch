<template>
<div class="backdrop" @click.self="closeApparel">
  <div class="modal"> 
      <div class="grid justify-items-center">
        <Carousel
        @next="next"
        @prev="prev">
          <CarouselSlide class="" v-for="(slide,index) in slides" 
            :key="slide" 
            :index="index"
            :visibleSlide = "visibleSlide"
            :direction ="direction">
            <img :src="slide" class="adjust" />
          </CarouselSlide>
        </Carousel>
      </div>      
  </div>
</div>
</template>

<script>
import Carousel from './Carousel.vue';
import CarouselSlide from './CarouselSlide.vue';
  export default {
   name: 'Apparel',
    data() {
      return {
        slides: [
          'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          'https://images.unsplash.com/photo-1572495673508-62a6b369c380?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
          'https://images.unsplash.com/photo-1582552938357-32b906df40cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
        ],
        visibleSlide : 0,
        direction : 'left',
      }
    },
    components: {
      Carousel,CarouselSlide,
    },
//next prev function
    computed: {
      slidesLen() {
        return this.slides.length;
      }
    },

    methods: {
    closeApparel() {
      this.$emit('close')
    },
// next prev function    
    next() {
      if(this.visibleSlide >= this.slidesLen - 1) {
        this.visibleSlide = 0;
      }else {
        this.visibleSlide++;
      }
      this.direction = "left"
    },
    prev() {
      if(this.visibleSlide <= 0) {
        this.visibleSlide = this.slidesLen - 1;
      }else {
        this.visibleSlide--;
      }
      this.direction = "right"
    },
        
  }
}
</script>


