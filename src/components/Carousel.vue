<template>
    <div class="carousel">
        <slot></slot>

        <button @click="next" class="btn right-0"><i class="fa fa-angle-right"></i></button>
        <button @click="prev" class="btn left-0"><i class="fa fa-angle-left"></i></button>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            next() {
                this.$emit('next')
            },
            prev() {
                this.$emit('prev')
            },
        },
    }
</script>