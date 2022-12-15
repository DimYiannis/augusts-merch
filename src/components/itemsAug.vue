<template>
<div class="backdrop" @click.self="closeItems">
  <div class="modal"> 
      <h3 v-for="item in items" :key="item.id">
        <img :src="item.img" class="adjust"/>
        {{item.type}} {{item.price }}$
      </h3>
  </div>
</div>
</template>

<script>
  export default {
   name: 'itemsAug',
    data() {
      return {
        items : [
          {
          id:1 ,
          type: 't-shirts',
          price: 10,
          img: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          },
          {
          id:2 ,
          type: 'hoodies',
          price: 20, 
          img: "https://images.unsplash.com/photo-1572495673508-62a6b369c380?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"

          },
          {
          id: 3,
          type: 'jeans',
          price: 25, 
          img: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"

          },
        ],
      }
  },
  methods: {
    closeItems() {
      this.$emit('close')
    }
  }
}
</script>


