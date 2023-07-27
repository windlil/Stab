<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  isDark: boolean
}>()

const emit = defineEmits(['clickTimeEmit'])

const hour = ref<string>('')
const minute = ref<string>('')

const getTime = () => {
  const date = new Date()
  const hh = (date.getHours() < 10? '0' + date.getHours(): date.getHours())
  const mm = (date.getMinutes() < 10? '0' + date.getMinutes(): date.getMinutes())
  hour.value = hh as string
  minute.value = mm as string
}

getTime()

const runTime = (fn: () => void) => {
  setInterval(() => {
    fn()
  }, 1000)
}
const clickTime = () => {
  emit('clickTimeEmit')
}

runTime(getTime)
</script>

<template>
  <div class="s-time" :style="{color: isDark?'#fff':'#000'}" @click="clickTime">
    {{ hour }}<sapn class="m">:</sapn>{{ minute }}
  </div>
</template>

<style scoped lang="less">
.m {

  margin-top:-2px;
  animation: active 1.5s infinite !important;
}

@keyframes active {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.s-time {
  display: flex;
  font-size: 22px;
  color: #fff;
  letter-spacing: 6px;
  user-select: none;
  font-weight: bold;
  cursor: pointer;
  transition: 0.4s ease;
  &:hover {
    transform: scale(1.3);
  }
}
</style>