<style lang="scss" scoped>
.home{
  height: 100%;
  padding: 115px 0 50px;
  box-sizing: border-box;
  overflow-y: scroll;
  .video-list{
    display: flex;
    flex-wrap: wrap;
    padding: 0 6px;
    .preview{
      margin: 0 4px 12px;
      width: 100%;
      border-radius: 8px;
      overflow: hidden;
      display: flex;
      .left{
        width: 52%;
        height: 320px;
        position: relative;
        video{
          width: 100%;
        }
        .cover{
          
        }
      }
      .right{
        flex: 1;
        background-image: linear-gradient(135deg, #626b7c, #212227);
        box-sizing: border-box;
        padding: 12px;
        display: flex;
        flex-direction: column;
        .name{
          font-size: 16px;
          color: #fcfeff;
          font-weight: 600;
        }
        .score{
          font-size: 12px;
          color: #e9a14d;
          margin: 10px 0 5px;
        }
        .type{
          font-size: 12px;
          color: #999a9d;
        }
        .intro{
          font-size: 14px;
          color: #e0e0e1;
          margin-top: 5px;
          display: -webkit-box;
          overflow: hidden;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 6;
        }
        .collect{
          background-color: #3a3d42;
          color: #ffffff;
          height: 25px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          .icon{
            margin-right: 5px;
          }
        }
      }
    }
    .video{
      width: 33.33%;
      box-sizing: border-box;
      padding: 0 4px 12px;
      .cover{
        height: 170px;
        background-size: cover;
        background-position: center;
        border-radius: 6px;
        overflow: hidden;
        position: relative;
        .score{
          position: absolute;
          bottom: 0;
          right: 0;
          color: #ff7c2a;
          font-size: 12px;
        }
      }
      .name{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
        color: #1d1d1d;
        margin: 5px 0 7px;
      }
      .type{
        font-size: 12px;
        color: #999a9d
      }
    }
  }
}
.tag{
  position: absolute;
  right: 0;
  top: 0;
  background-color: #ff7c2a;
  color: #fff;
  border-bottom-left-radius: 8px;
  padding: 2px 3px;
  font-size: 12px;
}
.flex-1{
  flex: 1;
}
</style>

<template>
  <div 
  class="home"
  @scroll="scroll"
  >
    <type-filter @changeType="changeType"></type-filter>
    <van-pull-refresh
      class="scroll-box"
      v-model="isLoading"
      success-text="刷新成功"
      @refresh="onRefresh"
      ref="filterEl"
    >
      <div class="video-list">
        <template
        v-for="(video, index) in videoList"
        >
          <div class="preview" 
          v-if="index % 10 === 0" 
          :key="index"
          @click="intoDetail(video)"
          >
            <div class="left">
              <div class="tag">{{ video.tag }}</div>
              <!-- <div class="cover"
              :style="{ backgroundImage: `url(${video.cover})` }"
              >
                <van-icon name="play-circle-o"/>
              </div> -->
              <video
              rate="1"
              webkit-playsinline
              playsinline
              x5-playsinline
              muted 
              :ref="el => getVideoElList(el)" 
              :src="video.video"
              ></video>
            </div>
            <div class="right">
              <div class="name">{{ video.name }}</div>
              <div class="score">{{ video.score }}分</div>
              <div class="type">
                <span 
                v-for="(type, tindex) in video.type"
                :key="tindex"
                >{{ type }}</span>
              </div>
              <div class="intro">{{ video.intro }}</div>
              <div class="flex-1"></div>
              <div class="collect">
                <van-icon class="icon" name="star-o" v-if="video.collect !== 1" />
                {{ video.collect === 1 ? '在追' : '追剧' }}
              </div>
            </div>
          </div>
          <div class="video" 
          :key="index + 'i'" 
          v-else
          @click="intoDetail(video)"
          >
            <div class="cover"
            :style="{ backgroundImage: `url(${video.cover})` }"
            >
              <div class="tag">{{ video.tag }}</div>
              <div class="score">{{ video.score }}分</div>
            </div>
            <div class="name">{{ video.name }}</div>
            <div class="type">
              <span
              v-for="(type, tIndex) in video.type"
              :key="tIndex"
              >{{ type }}</span>
            </div>
          </div>
        </template>
      </div>
    </van-pull-refresh>
    <c-tabbar :curTab="0"></c-tabbar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'homePage'
})
</script>

<script setup lang="ts">
import type EventEmitter from 'events'
import TypeFilter from './component/TypeFilter.vue'
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import type { Ref } from 'vue'
import { useRouter } from 'vue-router'

type TypeRes = {
  type?: string | number,
  child?: string | number
}

type videoItem = {
  name: string,
  score: number | string,
  type: string[],
  tag: string,
  intro: string,
  cover: string,
  video: string,
  collect: number
}

onMounted(() => {
  nextTick(() => {
    watchVideoShow()
  })
})

const filterEl:Ref<HTMLElement | null> = ref(null)
const isLoading = ref(false)
const videoList:Ref<videoItem[]> = ref([])
const VideoElList = ref<HTMLElement[]>([])
const router = useRouter()

for(let i = 0; i < 20; i ++) {
  videoList.value.push({
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

let debounceTimer:any = null
const scroll = (e:EventEmitter) => {
  console.log(6, e)
  if (e.target.clientHeight + e.target.scrollTop === e.target.scrollHeight) {
    for(let i = 0; i < 20; i ++) {
      videoList.value.push({
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
    VideoElList.value = []
  }
  console.log(VideoElList.value)
  console.log(videoList.value.length)
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => {
    watchVideoShow()
  }, 150)
  // watchVideoShow()
}

const watchVideoShow = () => {
  VideoElList.value.forEach((el:any) => {
    el.play()
    if (el.getBoundingClientRect().y < 1 || el.getBoundingClientRect().y > window.innerHeight) {
      el.pause()
    }
    console.log(el.getBoundingClientRect().y, window.innerWidth / 375)
    if (el.getBoundingClientRect().y > 115 * window.innerWidth / 375 && el.clientHeight + el.getBoundingClientRect().y < window.innerHeight) {
      el.play()
    }
  })
}

const onRefresh = () => {
  console.log(1)
  setTimeout(() => { isLoading.value = false }, 1000)
}

const changeType = (query: TypeRes) => {
  console.log(query)
}

const getVideoElList = (el:HTMLElement | any) => {
  if (el) {
    VideoElList.value.push(el)
  }
}

const intoDetail = (query:videoItem) => {
  router.push(`/scrollPlay?id=${query.id}`)
}
</script>