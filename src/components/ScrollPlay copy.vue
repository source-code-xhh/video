<style lang="scss" scoped>
.scroll-play-box{
    height: 100%;
    width: 100vw;
    background: #191919;
    .nav{
        width: 100%;
        background-image: linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.01));
        height: 50px;
        padding: 0 12px;
        color: #fff;
        position: fixed;
        left: 0;
        top: 0;
        font-size: 16px;
        font-weight: 500;
        display: flex;
        align-items: center;
        z-index: 5;
        font-weight: 600;
    }
    .video-item{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        background-color: #fff;
        video{
            width: 190px;
            height: auto;
        }
        .pop-box{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            // background-color: rgba(0,0,0,.5);
            z-index: 3;
            display: flex;
            align-items: center;
            justify-content: center;
            .play-icon{
                font-size: 40px;
                background-color: rgba(0,0,0,.6);
                border-radius: 50%;
            }
            .bottom-box{
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                .msg-box{
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    color: #fff;
                    padding: 0 10px;
                    margin-bottom: 10px;
                    .left{
                        .num{
                            font-size: 16px;
                            font-weight: 600;
                            margin-bottom: 15px;
                        }
                        .name{
                            font-size: 14px;
                        }
                    }
                    .right{
                        .item{
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            margin-top: 15px;
                            img{
                                width: 24px;
                                height: 24px;
                                border-radius: 50%;
                                margin-bottom: 3px;
                            }
                            .ac-icon{
                                font-size: 22px;
                                margin-bottom: 3px;
                            }
                        }
                    }
                }
                .total-num{
                    background-color: rgba(0, 0, 0, .3);
                    height: 22px;
                    display: flex;
                    align-items: center;
                    font-size: 12px;
                    color: #fff;
                    padding-left: 10px;
                    span{
                        margin: 0 8px;
                    }
                }
                .proccess{
                    padding: 15px 0;
                    position: absolute;
                    left: 0;
                    bottom: -15px;
                    width: 100%;
                    z-index: 5;
                    .all{
                        height: 2px;
                        background-color: rgba(255, 255, 255, .3);
                        display: flex;
                        align-items: center;
                    }
                    .cur{
                        background-color: #fff;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                        .point{
                            width: 5px;
                            height: 5px;
                            background-color: #fff;
                            border-radius: 50%;
                        }
                    }
                }
            }
        }
    }
    .back{
        margin-left: -8px;
    }
}
</style>

<template>
    <div
    class="scroll-play-box"
    @touchmove="(e) => e.preventDefault()"
    >
        <div class="nav"><van-icon class="back" @click="router.back()" v-if="props.type !== 'rec'" size="20" name="arrow-left" />短剧</div>
        <van-swipe
        @change="changeVideo"
        lazy-render
        style="height: 100%"
        :show-indicators="false"
        vertical
        v-model="curIndex"
        :loop="false"
        ref="swipe"
        >
        <!-- 
x5-video-player-type="h5"
                x5-video-player-fullscreen="true"
                x5-video-orientation="portraint"
                webkit-playsinline="true"
                x-webkit-airplay="true"
                playsinline="true"
                x5-playsinline="true"
         -->
            <van-swipe-item 
            class="video-item" 
            v-for="(video, index) in PlayList" 
            :key="index">
                <video
                class="video"
                :src="video.video"
                :ref="(el) => collectVideo(el, index)"
                @timeupdate="geproccess(index)"
                @pause="video.isPlay = false"
                @play="video.isPlay = true"
                @ended="playEnd(index)"
                :controls="false"
                ></video>
                <div class="pop-box" @click="changePlayState(index)">
                    <!-- 播放 -->
                    <van-icon class="play-icon" v-if="!video.isPlay" name="play-circle-o" color="#fff" />
                    <div class="bottom-box">
                        <div class="msg-box">
                            <div class="left">
                                <p class="num">第{{ 1 }}集</p>
                                <p class="name">{{ video.name }}</p>
                            </div>
                            <div class="right">
                                <div class="item" @click.stop="share">
                                    <img src="../assets//img/wechat.PNG" alt="">
                                    {{ 1 }}万
                                </div>
                                <div class="item">
                                    <!-- 未追剧 -->
                                    <van-icon v-if="video.collect == 1" class="ac-icon" name="star-o" color="#fff" />
                                    <!-- 已追剧 -->
                                    <van-icon v-else class="ac-icon" name="star" color="#ff3f00" />
                                    {{ 15 }}万
                                </div>
                                <!-- 选集 -->
                                <div class="item" @click.stop="openEpisode(video)">
                                    <van-icon class="ac-icon" name="points" color="#fff" />
                                    选集
                                </div>
                            </div>
                        </div>
                        <div class="total-num" v-if="props.type == 'rec'" @click="router.push(`/scrollPlay?id=${video.id}`)">
                            <van-icon name="points" color="#fff" />
                            <span>
                                共{{ 10 }}集
                            </span>
                            <van-icon name="arrow" color="#fff" />
                        </div>
                        <div class="proccess"
                        @click.stop
                        @touchmove.stop="gettouchPosition(index, $event)"
                        @touchend.stop="changeProcess(index)"
                        @touchstart.stop="gettouchPosition(index, $event)"
                        >
                            <div class="all">
                                <div class="cur"
                                :style="{
                                    width: `${(video.curTime / video.totalTime * 100) | 0}%`
                                }"
                                >
                                    <div class="point"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </van-swipe-item>
        </van-swipe>
    </div>
    <div class=""></div>
</template>

<script lang="ts" setup>
import NativeShare from 'nativeshare'
import { ref, defineProps, watch } from 'vue'
import type { Ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const props = defineProps({
    type: String
})

// onBeforeUpdate(() => {
//     videoElList.value = []
// })
const router = useRouter()
const route = useRoute()

watch(() => route.path, (newPath) => {
    console.log(newPath)
    if (newPath === '/recommend') {
        videoElList.value[curIndex.value].play()
    }
})

type VideoItem = {
    name: string,
    score: string | number,
    type: string[],
    tag: string,
    collect: number,
    intro: string,
    cover: string,
    video: string,
    totalTime?: string | number,
    curTime?: string | number,
    isPlay?: boolean
}

const openEpisode = (query: VideoItem) => {
    console.log(query)
}

const swipe = ref(null)
const videoElList = ref<HTMLElement[] | any[]>([])
const curIndex = ref(0)
const PlayList:Ref<VideoItem[]> = ref([
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

for (let i = 0; i < 100; i ++) {
    PlayList.value.push(
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
    )
}

const changeVideo = (index:number) => {
    videoElList.value.forEach((videoEl:any) => {
        videoEl.pause()
    })
    videoElList.value[index].play()
    curIndex.value = index
    console.log(videoElList.value)
}

const collectVideo = (el:HTMLElement | any, index:number) => {
    videoElList.value[index] = el
}

const changePlayState = (index:number) => {
    if (PlayList.value[index].isPlay) {
        videoElList.value[index].pause()
    } else {
        videoElList.value[index].play()
    }
}

const geproccess = (index:number) => {
    console.log('11', PlayList.value[index].isPlay)
    if (PlayList.value[index].isPlay) {
        PlayList.value[index].totalTime = videoElList.value[index].duration
        PlayList.value[index].curTime = videoElList.value[index].currentTime
    }
}

const playEnd = (index:number) => {
    if (index === PlayList.value.length) {
        return
    }
    swipe.value.next()
}

const changeProcess = (index:any) => {
    console.log(index)
    videoElList.value[index].currentTime = PlayList.value[index].curTime
    videoElList.value[index].play()
}
const gettouchPosition = (index:number, event:any) => {
    console.log(7, event.targetTouches[0].clientX, index)
    PlayList.value[index].isPlay = false
    videoElList.value[index].pause()
    PlayList.value[index].curTime = event.targetTouches[0].clientX / window.innerWidth * PlayList.value[index].totalTime
    event.preventDefault()
}

const share = () => {
    const nativeshare = new NativeShare()
    nativeshare.setShareData({
        icon: 'https://www.baidu.com/img/flexible/logo/pc/result.png',
        link: location.href,
        title: 'title',
        desc: 'desc',
        success() {
            console.log('suc')
        },
        fail() {
            console.log('fail')
        }
    })
    try{
        console.log(999, nativeshare.call)
        nativeshare.call('default')
    } catch(e) {
        console.log(111, e)
        navigator.share({
            // icon: 'https://www.baidu.com/img/flexible/logo/pc/result.png',
            url: location.href,
            title: 'title',
            text: 'desc',
        })
        alert(e)
    }
}
</script>
