<style lang="scss" scoped>
.header{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 2;
    background-image: linear-gradient(#ffef90, #fffce8);
    .type-box{
        display: flex;
        padding: 0 12px;
        align-items: center;
        overflow: hidden;
        font-size: 16px;
        .type-tab{
            // flex: 1;
            width: 325px;
            margin-right: 10px;
            margin-left: -15px;
        }
        .type-active{
            font-weight: 600;
        }
        ::v-deep .van-tab__text{
            font-size: 16px;
        }
        i{
            font-weight: 600;
        }
    }
    ::v-deep .van-tab--active span{
        font-weight: 600 !important;
    }
    ::v-deep .van-tabs__nav{
        background-color: rgba(0,0,0,0)
    }
    ::v-deep .van-tabs__line{
        background-color: rgba(0,0,0,0)
    }
    ::v-deep .van-tabs__wrap{
        height: 25px
    }
    .title{
        height: 50px;
        font-size: 16px;
        color: #191919;
        padding: 0 12px;
        line-height: 50px;
        font-weight: 600;
    }
    .child-box{
        display: flex;
        align-items: center;
        // background-color: #191919;
        padding: 8px 12px;
        font-size: 14px;
        color: #333;
        .child{
            height: 23px;
            padding: 0 10px;
            border-radius: 2px;
            line-height: 23px;
            margin-right: 10px;
            font-size: 14px;
            border: 1px solid #fed70066;
            box-sizing: border-box;
        }
        .child-active{
            background-color: #fed700;
            border: 1px solid #fed700;
        }
    }
}
</style>

<template>
    <header class="header">
        <h1 class="title">短剧</h1>
        <div class="type-box">
            <van-tabs
                class="type-tab"
                v-model:active="curType"
                @change="changeType"
                title-inactive-color="#565656"
                title-active-color="#333"
            >
                <van-tab v-for="(type, index) in typeList"
                    :key="index"
                    :class="['type', {'type-active': curType === index}]"
                    :title="type.name"
                >
                </van-tab>
            </van-tabs>
            <van-icon @click="router.push('/searchPage')" name="search" size="16" color="#333" />
        </div>
        <div class="child-box">
            <div
            v-for="(child, index) in childType"
            :key="index"
            :class="['child', { 'child-active': curChild === index }]"
            @click="changeChild(index)"
            >{{ child.name }}</div>
        </div>
    </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const emits = defineEmits(['changeType'])
const typeList = ref([
    {
        name: '精选',
        value: 1
    },
    {
        name: '甜宠',
        value: 2
    },
    {
        name: '虐恋',
        value: 3
    },
    {
        name: '古装',
        value: 4
    },
    {
        name: '逆袭',
        value: 5
    },
    {
        name: '复仇',
        value: 6
    },
    {
        name: '重生',
        value: 7
    },
    {
        name: '悬疑',
        value: 8
    },
    {
        name: '神医',
        value: 9
    }
])

const childType = ref([
    {
        name: '推荐',
        value: 1
    },
    {
        name: '最热',
        value: 2
    },
    {
        name: '好评',
        value: 3
    },
    {
        name: '最新',
        value: 4
    }
])
const curType = ref(0)
const curChild = ref(0)


const changeType = (index:number) => {
    curType.value = index
    emits('changeType', {})
}
const changeChild = (index:number) => {
    curChild.value = index
    emits('changeType', {})
}

</script>
