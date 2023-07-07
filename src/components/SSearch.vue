<script setup lang="ts">

</script>

<template>
  <div class="s-search">
    <div class="icon1">
      <img src="/images/bing.svg" alt="">
    </div>
    <div class="input">
      <input type="text">
    </div>
    <div class="icon2">
      <img src="/images/search.svg" alt="">
    </div>
  </div>
</template>

<style scoped lang="less">
.s-search {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 560px;
  height: 42px;
  padding: 0 15px;
  background-color: #fff;
  border-radius: 25px;
  border: 1px solid #b8b8b8;
  box-shadow: 0 0 5px #929292;
  overflow: hidden;

  .input {
    flex: 1;
    margin: 0 10px;

    input {
      width: 100%;
      border: 0;
      outline: none;
      background-color: transparent;
      font-size: 16px;
      color: rgb(65, 65, 65);
    }
  }

  .icon1 {
    width: 20px;
    height: 20px;
  }

  .icon2 {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
}
</style>