<style scoped lang="scss">
.tab-list{
    display: flex;
    width: 100vw;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 50px;
    background-color: #fff;
    border-top: 1px solid #eee;
    box-sizing: border-box;
    .tab{
        width: 25%;
        color: #565656;
        font-size: 14px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .tab-active{
        color: #191919;
        font-weight: bold;
    }
}
</style>

<template>
    <nav class="tab-list">
        <div
        v-for="(tab, index) in tabList"
        :key="index"
        @click="changePage(tab.path)"
        :class="['tab', { 'tab-active': props.curTab === index }]">
            {{ tab.name }}
        </div>
    </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const props = defineProps({
    curTab: Number
})

const changePage = (path: string) => {
    router.push(path)
}

const tabList = ref([
    {
        name: '剧场',
        path: '/'
    },
    {
        name: '推荐',
        path: '/recommend'
    },
    {
        name: '追剧',
        path: '/movie'
    },
    {
        name: '看过',
        path: '/history'
    }
])
</script>