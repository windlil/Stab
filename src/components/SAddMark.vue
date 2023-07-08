<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['closeMarkEmit'])
const maskRef = ref<HTMLDivElement>()
const list = ref([{ name: 'baidu', address: 'https://www.baidu.com/' },
{ name: 'baidu5464564564', address: 'https://www.baidu.com/' },
{ name: 'github', address: 'https://www.baidu.com/' },
{ name: 'test', address: 'https://www.baidu.com/' },
{ name: 'douyu', address: 'https://www.baidu.com/' },
{
  name: 'youku', address: 'https://www.baidu.com/',
}, {
  name: 'youku', address: 'https://www.baidu.com/',
}, {
  name: 'youku', address: 'https://www.baidu.com/',
}, {
  name: 'youku', address: 'https://www.baidu.com/',
}])

const closeMark = () => {
  emit('closeMarkEmit')
}

</script>

<template>
  <div class="mask" ref="maskRef" @click.self="closeMark">
    <div class="s-add-mark">
      <div class="title">
        <span>name</span>
        <span>address</span>
      </div>
      <div class="list" v-if="list.length > 0">
        <div class="item" v-for="item in list">
          <div class="name">{{ item.name }}</div>
          <div class="address">{{ item.address }}</div>
          <div class="remove">
            <img src="/images/remove.svg" alt="">
          </div>
        </div>
      </div>
      <div class="form">
        <div class="input-name">
          <input class="input" type="text">
        </div>
        <div class="input-address">
          <input class="input" type="text">
        </div>
        <div class="add">
          <img src="/images/add.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #767676b0;

  .s-add-mark {
    width: 400px;
    min-height: 160px;
    margin: 260px auto;
    border-radius: 10px;
    background-color: #2c2c2c;
    z-index: 999;

    .title {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      height: 40px;
      color: #919090;
      font-size: 14px;

      span {
        &:nth-child(1) {
          margin-left: 30px;
        }

        &:nth-child(2) {
          margin-left: 45px;
        }
      }
    }

    .list {
      max-height: 200px;
      padding-left: 20px;
      overflow-y: scroll;

      &::-webkit-scrollbar {
        width: 3px;
      }

      &::-webkit-scrollbar-thumb {
        width: 3px;
        background-color: #fff;
      }

      .item {
        position: relative;
        display: flex;
        align-items: center;
        width: 95%;
        height: 30px;
        margin: 2px 0;
        color: #fff;
        border-bottom: 1px solid #434343;
        font-size: 12px;

        .name {
          width: 70px;
          margin-left: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .address {
          width: 240px;
          margin-left: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .remove {
          position: absolute;
          right: 10px;
          width: 18px;
          height: 18px;
          cursor: pointer;
        }
      }
    }

    .form {
      display: flex;
      padding: 12px 0;

      .input {
        width: 100%;
        outline: none;
        border: 0;
        background-color: transparent;
        color: #c2c1c1;
        font-size: 12px;
      }

      .input-name {
        width: 70px;
        margin-left: 15px;
        padding-left: 14px;
        border-bottom: 1px solid rgb(158, 79, 158);

      }

      .input-address {
        width: 240px;
        margin-left: 20px;
        border-bottom: 1px solid rgb(158, 79, 158);

        input {
          width: 100%;
        }
      }

      .add {
        width: 20px;
        height: 20px;
        margin-left: 11px;
        cursor: pointer;

        &:hover {
          background-color: #434343;
        }
      }
    }
  }
}
</style>