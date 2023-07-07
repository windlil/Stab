<script setup lang="ts">
import { ref } from 'vue';

const markRef = ref<HTMLDivElement>()
const listItem = ref(['github', 'douyu'])

const open = () => {
  markRef.value?.classList.toggle('open')
}

defineExpose({
  open
})
</script>

<template>
  <div class="s-mark" ref="markRef">
    <div class="add">
      <img src="/images/add.svg" alt="">
    </div>
    <div class="mark-list" v-if="listItem.length > 0">
      <a class="list-item" v-for="item in listItem">
          {{ item }}
      </a>
    </div>
  </div>
</template>

<style scoped lang="less">
.open {
  transform: translateX(-2px) !important;
}

.s-mark {
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  background-color: #000000;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  transform: translateX(-82px);
  transition: 0.2s ease;

  .title {
    box-sizing: border-box;
    position: absolute;
    right: -35px;
    top: -2px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 30px;
    border: 1px solid #fff;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #fffefed1;
    cursor: pointer;
    box-shadow: 2px 2px 12px rgb(46, 46, 46);

    img {
      margin-right: 5px;
      width: 20px;
      height: 20px;
    }
  }

  .add {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    margin: 8px 0;
    cursor: pointer;
    border-radius: 50%;
    transition: 0.2s;

    &:hover {
      background-color: #505050;
    }

    img {
      width: 25px;
      height: 25px;
    }
  }

  .mark-list {
    display: flex;
    flex-direction: column;
    padding-bottom: 5px;

    .list-item {
      padding: 10px;
      margin: 10px 0;
      cursor: pointer;
      font-weight: bold;
      font-size: 12px;
      color: #bbbbbb;
      border-bottom: 1px solid #6666668d;

      &:hover {
        color: #fff;
      }
    }
  }
}
</style>