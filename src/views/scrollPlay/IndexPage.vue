<style lang="scss" scoped>
.scroll-paly{
    height: 100%;
    box-sizing: border-box;
    padding-bottom: 50px;
    .play{
        height: 100%;
    }
}
</style>

<template>
    <div class="scroll-paly" @touchmove="e => e.preventDefault()">
        <scroll-play class="play" type="play"></scroll-play>
    </div>
</template>

<script lang="ts" setup>
    
</script>
