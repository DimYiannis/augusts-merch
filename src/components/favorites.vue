<template>
    <div class="invbackdrop" @click.self="closeFav">    
        <div class="fav" >

            <div class="carttitle">Products</div>

            <!--the item-->
            <div class="favitem">
                
               

                <div v-for="product in products" key="product.id" 
                class="flex gap-8">

                    <img :src="product.img" 
                    class="imgshop">

                    <div class=" cartdetails">
                        <h1 class="font-bold">{{ product.id}}</h1>
                        <h2>{{ product.size }}</h2>
                        <h3>price: {{product.price}}$</h3>
                    </div>

                </div>
            
            </div>
            
        </div>
    </div>
</template>

<script>
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
    methods: {
        closeFav() {
            this.$emit('close')
        },
        
    },
}
</script>

