<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['toggleEmit'])
const isDark = ref(true)

const toggle = () => {
  isDark.value = !isDark.value
  emit('toggleEmit', isDark.value)
}
</script>

<template>
  <div class="s-darktoggle" :class="isDark ? 'dark' : 'light'" @click="toggle">
    <div class="icon">
      <img v-if="isDark" src="/images/moon.svg" alt="">  
      <img v-else src="/images/sun.svg" alt="">    
      </div>
  </div>
</template>

<style scoped lang="less">
.dark {
  color: #ffffff;
  background-color: #232323;
  border: 1px solid #555555;

  &:hover {
    border-color: #a1a1a1;
    background-color: #3a3a3a;
  }
}

.light {
  color: #404040;
  background-color: #bab9b9;
  border: 1px solid #8b8b8b;
  
  &:hover {
    border-color: #393939;
    background-color: #676767;
  }
}
.s-darktoggle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 25px;
  padding: 0 8px;
  border-radius: 8px;
  user-select: none;
  cursor: pointer;
  transition: 0.2s;
  .icon {
    width: 18px;
    height: 18px;
  }
  .text {
    font-size: 12px;
    margin-left: 4px;
  }
}
</style>