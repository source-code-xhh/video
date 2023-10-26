<style lang="scss" scoped>
.play-list{
    padding: 115px 0 60px;
    .top-box{
        height: 115px;
        background-image: linear-gradient(#ffef90, #fffce8);
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        z-index: 3;
        .title{
            height: 50px;
            font-size: 16px;
            color: #191919;
            padding: 0 12px;
            line-height: 50px;
            font-weight: 600;
        }
    }
    .list-box{
        padding: 0 12px;
        .movie-item{
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            .cover{
                width: 60px;
                height: 90px;
                border-radius: 6px;
                background-size:cover;
                background-position: center;
                margin-right: 10px;
            }
            .msg{
                flex: 1;
                margin-right: 10px;
                .name{
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    font-size: 14px;
                    font-weight: 600;
                    color: #191919;
                    margin-bottom: 10px;
                }
            }
            .collect{
                display: flex;
                flex-direction: column;
                align-items: center;
                .ac-icon{
                    font-size: 18px;
                    margin-bottom: 5px;
                }
            }
        }
    }
}
</style>

<template>
    <div class="play-list">
        <div class="top-box">
            <h1 class="title">短剧</h1>
        </div>
        <div class="list-box">
            <div 
            class="movie-item"
            v-for="(movie, index) in PlayList"
            :key="index"
            @click="intoDetail(movie)"
            >
                <div class="cover"
                :style="{ backgroundImage: `url(${movie.cover})` }"
                ></div>
                <div class="msg">
                    <p class="name">{{ movie.name }}</p>
                    <p class="pcs">已看到{{ 1 }}集，共{{ 10 }}集</p>
                </div>
                <div class="collect">
                    <!-- 未追剧 -->
                    <van-icon v-if="movie.collect == 1" class="ac-icon" name="star-o" color="#fff" />
                    <!-- 已追剧 -->
                    <van-icon v-else class="ac-icon" name="star" color="#ff3f00" />
                    <p>{{ movie.collect == 1 ? '已追剧' : '追剧' }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, defineProps } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()
const props = defineProps({
    type: String
})

console.log(props.type)

const PlayList = ref([
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

const intoDetail = (query:any) => {
    router.push(`/scrollPlay?id=${query.id}`)
}
</script>