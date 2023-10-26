<style lang="scss" scoped>
.recommend{
    height: calc(100% - 50px);
    display: flex;
    .scroll-view{
        flex: 1;
    }
}
</style>

<template>
    <div class="recommend" ref="recommend" @touchmove="(e) => e.preventDefault()">
        <scroll-play class="scroll-view" type="rec"></scroll-play>
        <c-tabbar :curTab="1"></c-tabbar>
    </div>
</template>

<script lang="ts" >
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'recommendPage'
})

</script>

<script lang="ts" setup>
import { onMounted, nextTick, ref } from 'vue';

const recommend = ref<HTMLElement | any>(null)

onMounted(() => {
    nextTick(() => {
        // new BScroll(recommend.value, {})
    })
})
</script>