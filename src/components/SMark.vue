<script setup lang="ts">
import { ref } from 'vue';

const SMarkRef = ref<HTMLDivElement>()
const list = ref([])

const open = () => {
  SMarkRef.value?.classList.toggle('open')
}

const test = (e:WheelEvent) => {
  const currentTarget = e.currentTarget as HTMLDivElement
  if (e.deltaY > 0) {
    currentTarget.scrollLeft += 20
  } else {
    currentTarget.scrollLeft -= 20
  }
}

defineExpose({
  open
})
</script>

<template>
  <div class="s-mark" ref="SMarkRef">
    <div class="add">
      <img src="/images/add.svg" alt="">
    </div>
    <div class="mark-list" v-if="list.length > 0" @wheel="test">
      <a href="" class="item" v-for="item in list">{{ item }}</a>
    </div>
  </div>
</template>

<style scoped lang="less">
.open {
  transform: translateY(0) !important;
}
.s-mark {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  padding: 0 10px;
  background-color: #000;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  transform: translateY(-100%);
  transition: 0.3s ease;

  .add {
    width: 20px;
    height: 20px;
    margin: 0 5px;
    padding: 2px;
    border-radius: 50%; 
    transition: 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: #686868;
    }
  }

  .mark-list {
    display: flex;
    margin: 0 5px;
    max-width: 420px;
    overflow-x: scroll;
    user-select: none;
    .item {
      font-size: 12px;
      font-weight: bold;
      margin: 0 10px;
      padding: 10px 0;
      color: #a3a3a3;
      transition: 0.2s ease;

      &:hover {
        color: #fff;
      }
    }
    &::-webkit-scrollbar {
        height: 2px;
      }

      &::-webkit-scrollbar-thumb {
        height: 2px;
        background-image: linear-gradient(to right, #4d5dcb, #7360d2, #9462d6, #b263d9, #cf65da);
      }
  }
}
</style>