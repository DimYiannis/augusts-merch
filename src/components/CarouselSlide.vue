<template>
    <transition :name="direction" mode="in-out">
        <div v-show="visibleSlide===index" class="CarouselSlide">
            <slot></slot>
        </div>
    </transition>
</template>

<script>

export default {
    props: ['visibleSlide', 'index', 'direction'],
    data() {
        return {}
    }
}
</script>

