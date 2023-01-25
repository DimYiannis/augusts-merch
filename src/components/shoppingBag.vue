<template>
    <div class="invbackdrop" @click.self="closeShoppingbag">    
        <div class="shoppings" >
           
            <!--the item-->
            <div class="bg-white w-[370px] h-[400px] 
            place-self-center self-start border-solid 
            border-b-2 border-black overflow-auto overscroll-none">
                
                <div class="font-bold w-fit relative
                top-0 left-[40%]">Products</div>

                <div v-for="product in products" key="product.id" 
                class="flex gap-8">

                    <img :src="product.img" 
                    class="imgshop">

                    <div class=" relative place-self-center">
                        <h1 class="font-bold">{{product.id}}</h1>
                        <h2>{{ product.size }}</h2>
                        <h3>price: {{product.price}}$</h3>
                    </div>

                </div>
            
            </div>

            <!--the cost-->
            <div class=" h-[70px] sticky flex items-center justify-between">
                <h1 class=" font-bold">Total Cost: {{ cost }}</h1>
                
                <button class="border-2 rounded-lg border-solid 
                w-fit h-fit flex p-1 hover:text-black 
                text-gray-600 hover:border-black 
                text-xs tablet:text-base font-bold mt-3 mr-6">
                Order</button>
            </div>
            
            
        </div>
    </div>
</template>

<script>
import item from '../views/item.vue';
export default {
    data() {
        return {
            products: [
                {
                    id: 'Black t-shirt',
                    size: 'XL',
                    price:10,
                    img: "https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                },
                {
                    id: 'White Cap',
                    size: 'M',
                    price:10,
                    img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
                },
                {
                    id: 'Bronze Jacket',
                    size: 'L',
                    price:60,
                    img: "https://images.unsplash.com/photo-1626307416562-ee839676f5fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
                },
                
            ]
        }
    },
    components: item,   
       
    methods: {
        closeShoppingbag() {
            this.$emit('close')
        },
    }
}
</script>

