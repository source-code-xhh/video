<style lang="scss" scoped>
.nav{
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #333;
    padding: 12px;
    .back-icon{
       font-size: 20px;
       margin-left: -3px;
    }
    .ipt-box{
        margin: 0 8px;
        flex: 1;
        height: 35px;
        background-color: #f2f3f5;
        border-radius: 18px;
        display: flex;
        align-items: center;
        .search-icon{
            font-size: 16px;
            margin: 0 8px;
        }
        input{
            outline: none;
            border: none;
            flex: 1;
            height: 100%;
            background-color: rgba(0, 0, 0, 0);
        }
    }
}
.result-title{
    font-size: 16px;
    color: #333;
    margin: 10px 12px;
    font-weight: 600;
}
.list-box{
    display: flex;
    flex-wrap: wrap;
    padding: 0 8px;
    height: calc(100% - 100px);
    overflow-y: scroll;
    .item{
        width: 33.33%;
        box-sizing: border-box;
        padding: 0 4px;
        .cover{
            border-radius: 6px;
            position: relative;
            height: 165px;
            background-position: center;
            background-size: cover;
            font-size: 12px;
            .tag{
                background-color: #ff7c2a;
                color: #fff;
                padding: 1px 4px;
                position: absolute;
                right: 0;
                top: 0;
                border-bottom-left-radius: 4px;
            }
            .score{
                position: absolute;
                color: #f7a846;
                font-weight: 600;
                right: 2px;
                bottom: 1px;
                text-align: right;
            }
            .type{
                font-size: 12px;
                color: #999
            }
        }
        .name{
            font-size: 14px;
            font-weight: 600;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            margin: 8px 0 3px;
        }
        .type{
            margin: 0 0 10px;
            color: #999
        }
    }
}
</style>

<template>
    <div class="nav">
        <van-icon @click="router.back()" class="back-icon" name="arrow-left" />
        <div class="ipt-box">
            <van-icon class="search-icon" name="search" />
            <input v-model="searchText" type="text" placeholder="搜剧名">
        </div>
        <div @click="search">搜索</div>
    </div>
    <p class="result-title">{{ showType }}</p>
    <div class="list-box">
        <div
        v-for="(item, index) in searchList"
        :key="index"
        class="item"
        @click="intoDetail(item)"
        >
            <div class="cover"
            :style="{ backgroundImage: `url(${item.cover})` }"
            >
                <div class="tag">{{ item.tag }}</div>
                <div class="score">{{ item.score }}分</div>
            </div>
            <p class="name">{{ item.name }}</p>
            <p class="type">
                <span
                v-for="(type, tIndex) in item.type"
                :key="tIndex"
                >{{ type }}</span>
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import router from '@/router';
import { ref } from 'vue';

const searchText = ref('')
const showType = ref('今日热门')

const searchList = ref([
    {
        name: '夭折了：柔弱皇帝竟是绝世强龙',
        score: 9.9,
        type: ['强者'],
        tag: '标签',
        collect: 0,
        intro: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
        cover: 'https://dzzt-video.cbread.cn/01/6x3/63x7/637x0/63700100014/552682010_1/552682010.mp4.jpg',
        video: 'http://m3.relay17.com/1.mp4'
    },
    {
        name: '夭折了：柔弱皇帝竟是绝世强龙',
        score: 9.9,
        type: ['强者'],
        tag: '标签',
        collect: 0,
        intro: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
        cover: 'https://dzzt-video.cbread.cn/01/6x3/63x7/637x0/63700100014/552682010_1/552682010.mp4.jpg',
        video: 'http://m3.relay17.com/1.mp4'
    },
    {
        name: '夭折了：柔弱皇帝竟是绝世强龙',
        score: 9.9,
        type: ['强者'],
        tag: '标签',
        collect: 0,
        intro: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
        cover: 'https://dzzt-video.cbread.cn/01/6x3/63x7/637x0/63700100014/552682010_1/552682010.mp4.jpg',
        video: 'http://m3.relay17.com/1.mp4'
    },
    {
        name: '夭折了：柔弱皇帝竟是绝世强龙',
        score: 9.9,
        type: ['强者'],
        tag: '标签',
        collect: 0,
        intro: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
        cover: 'https://dzzt-video.cbread.cn/01/6x3/63x7/637x0/63700100014/552682010_1/552682010.mp4.jpg',
        video: 'http://m3.relay17.com/1.mp4'
    }
])

const search = () => {
    showType.value = "搜索结果"
    searchList.value.push({
        name: '夭折了：柔弱皇帝竟是绝世强龙',
        score: 9.9,
        type: ['强者'],
        tag: '标签',
        collect: 0,
        intro: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
        cover: 'https://dzzt-video.cbread.cn/01/6x3/63x7/637x0/63700100014/552682010_1/552682010.mp4.jpg',
        video: 'http://m3.relay17.com/1.mp4'
    })
}

const intoDetail = (query: any) => {
    router.push(`/scrollPlay?id=${query.id}`)
}
</script>