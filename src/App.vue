<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { saveData, getData } from './utils/storage'
import SDarkToggle from './components/SDarkToggle.vue';
import SSearch from './components/SSearch.vue';
import STime from './components/STime.vue';
import SMark from './components/SMark.vue';
import SAddMark from './components/SAddMark.vue';

const isDark = ref(true)
const SMarkRef = ref<InstanceType<typeof SMark>>()
const isAdd = ref(false)
const markList = ref<any[]>([])

const getMarkList = () => {
  const d = getData('mark')
  if (d) {
    markList.value = d
  } else {
    markList.value = [
      {name: 'GitHub', address: 'https://github.com/'},
      {name: 'bilibili',address: 'https://www.bilibili.com/'},
      {name: 'Vue', address: 'https://vuejs.org/'},
      {name: 'TypeScript', address: 'https://www.typescriptlang.org/'},
      {name: 'Vite', address: 'https://vitejs.dev/'},
      {name: 'MDN', address: 'https://developer.mozilla.org/'},
      {name: 'iconfont', address: 'https://www.iconfont.cn/'},
      {name: 'youtube', address: 'https://youtube.com/'}
    ]
    saveData('mark', markList.value)
  }
}

const listenMarkChange =() => {
  getMarkList()
}

const toggle = (emitValue:boolean) => {
  isDark.value = emitValue
  saveData('isDark', isDark.value)
}

const initTheme = () => {
  const d = getData('isDark')
  if (d !== undefined) {
    isDark.value = d
  }
}

const clickTime = () => {
SMarkRef.value?.open()
}

const addMark = () => {
  isAdd.value = true
}

const closeMark =() => {
  isAdd.value = false
}

onMounted(() => {
  initTheme()
  getMarkList()
})
</script>

<template>
  <div class="main" :style="{ backgroundColor: isDark ? '#1a1a1a' : '#BFC1C8' }">
    <SDarkToggle @toggle-emit="toggle" class="toggle"></SDarkToggle>
    <STime class="time" :is-dark="isDark" @click-time-emit="clickTime"></STime>
    <SSearch></SSearch>
    <SMark :mark-list="markList" ref="SMarkRef" class="mark" @add-mark-emit="addMark"/>
    <SAddMark @change-mark-emit="listenMarkChange" @close-mark-emit="closeMark" v-if="isAdd"/>
  </div>
</template>

<style scoped lang="less">
.main {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #1b1a1a;
  transition: 0.4s ease-in-out;

  .toggle {
    position: absolute;
    bottom: 20px;
    right: 20px;
  }

  .time {
    margin-top: 200px;
    margin-bottom: 20px;
  }
  
  .mark {
    position: absolute;
    top: 0;
    margin: 0 auto;
  }
}

</style>