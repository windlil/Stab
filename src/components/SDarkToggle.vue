<script setup lang="ts">
import { ref } from 'vue';

const isDark = ref(false)

const toggle = () => {
  isDark.value = !isDark.value
  console.log(isDark.value)
}
</script>

<template>
  <div class="s-darktoggle" @click="toggle">
    <div class="icon">
      <img src="/images/moon.svg" alt="">      
    </div>
    <div class="text">
      Dark
    </div>
  </div>
</template>

<style scoped lang="less">
.s-darktoggle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 62px;
  height: 30px;
  padding: 0 8px;
  background-color: #313131;
  color: #ffffff;
  border-radius: 8px;
  border: 1px solid #555555;
  user-select: none;
  cursor: pointer;
  transition: 0.2s;
  .icon {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
  .text {
    font-size: 12px;
  }

  &:hover {
    border-color: #a1a1a1;
    background-color: #3a3a3a;
  }
}
</style>