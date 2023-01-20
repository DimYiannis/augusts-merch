<template>
    <div class="backdrop" @click.self="closeShoppingbag">    
        <div class="shoppings" >

            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
       
           
    methods: {
        closeShoppingbag() {
            this.$emit('close')
        },
    }
}
</script>

