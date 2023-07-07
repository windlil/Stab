<script setup lang="ts">
import { ref } from 'vue';
import SDarkToggle from './components/SDarkToggle.vue';
import SSearch from './components/SSearch.vue';
import STime from './components/STime.vue';

const isDark = ref(true)
const toggle = (emitValue:boolean) => {
  isDark.value = emitValue
}
</script>

<template>
  <div class="main" :style="{backgroundColor: isDark?'#121212':'#BFC1C8'}">
    <SDarkToggle @toggle-emit="toggle" class="toggle"></SDarkToggle>
          <STime class="time" :is-dark="isDark"></STime>
    <SSearch></SSearch>
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
}

</style>