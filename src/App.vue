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
})
</script>

<template>
  <div class="main" :style="{ backgroundColor: isDark ? '#1a1a1a' : '#BFC1C8' }">
    <SDarkToggle @toggle-emit="toggle" class="toggle"></SDarkToggle>
    <STime class="time" :is-dark="isDark" @click-time-emit="clickTime"></STime>
    <SSearch></SSearch>
    <SMark ref="SMarkRef" class="mark" @add-mark-emit="addMark"/>
    <SAddMark @close-mark-emit="closeMark" v-if="isAdd"/>
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