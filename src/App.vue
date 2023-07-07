<script setup lang="ts">
import { ref } from 'vue';
import SDarkToggle from './components/SDarkToggle.vue';
import SSearch from './components/SSearch.vue';

const isDark = ref(true)
const toggle = (emitValue:boolean) => {
  isDark.value = emitValue
}
</script>

<template>
  <div class="main" :style="{backgroundColor: isDark?'#121212':'#fff'}">
    <SDarkToggle @toggle-emit="toggle" class="toggle"></SDarkToggle>
    <SSearch></SSearch>
  </div>
</template>

<style scoped lang="less">
.main {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #1b1a1a;
  transition: 0.4s ease-in-out;

  .toggle {
    position: absolute;
    top: 20px;
    right: 20px;
  }
}

</style>