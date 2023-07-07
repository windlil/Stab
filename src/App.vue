<script setup lang="ts">
import { ref } from 'vue';
import SDarkToggle from './components/SDarkToggle.vue';

const isDark = ref(true)
const toggle = (emitValue:boolean) => {
  isDark.value = emitValue
}
</script>

<template>
  <div class="main" :style="{backgroundColor: isDark?'#000':'#fff'}">
    <SDarkToggle @toggle-emit="toggle"></SDarkToggle>
  </div>
</template>

<style scoped lang="less">
.main {
  width: 100%;
  height: 100%;
  background-color: #1b1a1a;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease;
}
</style>