<template>
    <div class="carousel">
        <slot></slot>

        <button @click="next" class="btn right-0">Next</button>
        <button @click="prev" class="btn left-0">Prev</button>
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

