<script setup lang="ts">
import { ref } from 'vue';

const now = ref('17:20:20')
</script>

<template>
  <div class="s-time">
    {{ now }}
  </div>
</template>

<style scoped lang="less">

</style>