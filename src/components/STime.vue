<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  isDark: boolean
}>()
const now = ref<string>('')

const getTime = () => {
  const date = new Date()
  const hh = (date.getHours() < 10? '0' + date.getHours(): date.getHours())
  const mm = (date.getMinutes() < 10? '0' + date.getMinutes(): date.getMinutes())
  now.value = `${hh}:${mm}`
}

getTime()

const runTime = (fn: () => void) => {
  setInterval(() => {
    fn()
  }, 1000)
}

runTime(getTime)
</script>

<template>
  <div class="s-time" :style="{color: isDark?'#fff':'#000'}">
    {{ now }}
  </div>
</template>

<style scoped lang="less">
.s-time {
  font-size: 22px;
  color: #fff;
  letter-spacing: 6px;
  user-select: none;
  font-weight: bold;
}
</style>