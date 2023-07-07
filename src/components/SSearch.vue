<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { saveData, getData } from '../utils/storage'

const dropRef = ref<HTMLDivElement>()
const aRef = ref<HTMLAnchorElement>()
const inputRef = ref<HTMLInputElement>()
const currentSearch = ref('bing')
const searchValue = ref('')
const isDorp = ref(false)
const list = [
  'https://www.google.com/search?q=',
  'https://cn.bing.com/search?q=',
  'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=',
]
const searchWay = ref<string>(list[1])

const dropdown = () => {
  isDorp.value = !isDorp.value
  dropRef.value?.classList.toggle('dropdown')
}

const close = () => {
  isDorp.value = false
  dropRef.value?.classList.remove('dropdown')
}

const changeSearch = (value: string) => {
  currentSearch.value = value
  if (value == 'google') {
    searchWay.value = list[0]
  } else if (value == 'bing') {
    searchWay.value = list[1]
  } else {
    searchWay.value = list[2]
  }
  saveData('search', {
    searchWay: searchWay.value,
    currentSearch: currentSearch.value
  })
  close()
}

const search = () => {
  if (aRef.value) {
    aRef.value!.href = searchWay.value + searchValue.value
    aRef.value.click()
  }
}

const closeHook = () => {
  document.addEventListener('click', () => {
    if (isDorp.value) {
      close()
    }
  })
}


const initDataHook = () => {
  const d = getData('search')
  if (d) {
    searchWay.value = d.searchWay
    currentSearch.value = d.currentSearch
  }
}

const enterInputHook = () => {
  if (inputRef.value) {
    const isComposition = ref(false)
    inputRef.value.addEventListener('keydown', (e:KeyboardEvent) => {
      if (e.code == 'Enter' || e.code == 'NumpadEnter') {
        if (!isComposition.value) {
          search()
        }
      }
    })
    inputRef.value.addEventListener('compositionstart', () => {
      isComposition.value = true
    })
    inputRef.value.addEventListener('compositionend', () => {
      isComposition.value = false
    })
  }
}

const autoFocusHook = () => {
  document.addEventListener('keydown', () => {
    setTimeout(() => {
      inputRef.value?.focus()
    }, 100)
  },false)
}

onMounted(() => {
  initDataHook()
  enterInputHook()
  closeHook()
  autoFocusHook()
})
</script>

<template>
  <div class="s-search">
    <div class="icon1" @click.stop="dropdown">
      <svg v-if="currentSearch == 'google'" t="1688716462557" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2298" ><path d="M881 442.4H519.7v148.5h206.4c-8.9 48-35.9 88.6-76.6 115.8-34.4 23-78.3 36.6-129.9 36.6-99.9 0-184.4-67.5-214.6-158.2-7.6-23-12-47.6-12-72.9s4.4-49.9 12-72.9c30.3-90.6 114.8-158.1 214.7-158.1 56.3 0 106.8 19.4 146.6 57.4l110-110.1c-66.5-62-153.2-100-256.6-100-149.9 0-279.6 86-342.7 211.4-26 51.8-40.8 110.4-40.8 172.4S151 632.8 177 684.6C240.1 810 369.8 896 519.7 896c103.6 0 190.4-34.4 253.8-93 72.5-66.8 114.4-165.2 114.4-282.1 0-27.2-2.4-53.3-6.9-78.5z" p-id="2299" fill="#000"></path></svg>
      <svg v-if="currentSearch == 'bing'"  t="1688711899584" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3602" ><path d="M213.333333 128v682.666667l158.72 85.333333L768 674.986667v-174.506667L416.853333 381.866667l68.693334 165.973333L594.773333 597.333333 371.2 721.92V182.186667L213.333333 128" fill="#000" p-id="3603"></path></svg>
      <svg v-if="currentSearch == 'baidu'" t="1688716506468" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3902"><path d="M265.258667 532.736c83.797333-18.005333 72.234667-118.272 69.845333-140.245333-4.096-33.621333-43.861333-92.672-97.749333-87.936-67.754667 6.016-77.696 104.106667-77.696 104.106666-9.216 45.226667 21.973333 142.08 105.6 124.074667m155.562666-168.277333c46.250667 0 83.584-53.376 83.584-119.125334 0-65.578667-37.162667-118.826667-83.413333-118.826666-46.336 0-83.882667 52.992-83.882667 118.826666s37.546667 119.125333 83.84 119.125334m199.296 7.936c62.037333 8.32 101.546667-57.813333 109.568-107.946667 8.021333-49.749333-32.170667-107.861333-75.776-117.888-43.989333-10.112-98.261333 60.202667-103.722666 105.984-5.802667 56.234667 8.021333 112.085333 69.717333 120.021333m245.376 84.181334c0-23.978667-19.626667-96.128-93.44-96.128-73.770667 0-83.84 68.096-83.84 116.309333 0 45.952 3.797333 109.781333 95.872 107.861333 91.648-2.218667 81.621333-104.021333 81.621333-128.085333M772.266667 666.709333s-95.872-74.197333-151.765334-154.154666c-75.776-118.101333-183.637333-69.973333-219.477333-10.197334-36.053333 60.501333-91.861333 98.389333-99.797333 108.544-8.021333 9.898667-115.584 68.096-91.605334 174.037334 24.021333 105.941333 107.861333 104.064 107.861334 104.064s61.696 6.058667 133.674666-9.984c71.936-16 133.546667 3.882667 133.546667 3.882666s167.253333 56.192 213.546667-51.712c45.738667-108.245333-26.026667-164.138667-26.026667-164.138666" p-id="3903" fill="#000"></path></svg>
    </div>
    <div class="drop" ref="dropRef">
      <svg @click="changeSearch('google')" t="1688716462557" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2298" ><path d="M881 442.4H519.7v148.5h206.4c-8.9 48-35.9 88.6-76.6 115.8-34.4 23-78.3 36.6-129.9 36.6-99.9 0-184.4-67.5-214.6-158.2-7.6-23-12-47.6-12-72.9s4.4-49.9 12-72.9c30.3-90.6 114.8-158.1 214.7-158.1 56.3 0 106.8 19.4 146.6 57.4l110-110.1c-66.5-62-153.2-100-256.6-100-149.9 0-279.6 86-342.7 211.4-26 51.8-40.8 110.4-40.8 172.4S151 632.8 177 684.6C240.1 810 369.8 896 519.7 896c103.6 0 190.4-34.4 253.8-93 72.5-66.8 114.4-165.2 114.4-282.1 0-27.2-2.4-53.3-6.9-78.5z" p-id="2299" fill="#fff"></path></svg>
      <svg @click="changeSearch('bing')" t="1688711899584" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3602" ><path d="M213.333333 128v682.666667l158.72 85.333333L768 674.986667v-174.506667L416.853333 381.866667l68.693334 165.973333L594.773333 597.333333 371.2 721.92V182.186667L213.333333 128" fill="#fff" p-id="3603"></path></svg>
      <svg @click="changeSearch('baidu')" t="1688716506468" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3902"><path d="M265.258667 532.736c83.797333-18.005333 72.234667-118.272 69.845333-140.245333-4.096-33.621333-43.861333-92.672-97.749333-87.936-67.754667 6.016-77.696 104.106667-77.696 104.106666-9.216 45.226667 21.973333 142.08 105.6 124.074667m155.562666-168.277333c46.250667 0 83.584-53.376 83.584-119.125334 0-65.578667-37.162667-118.826667-83.413333-118.826666-46.336 0-83.882667 52.992-83.882667 118.826666s37.546667 119.125333 83.84 119.125334m199.296 7.936c62.037333 8.32 101.546667-57.813333 109.568-107.946667 8.021333-49.749333-32.170667-107.861333-75.776-117.888-43.989333-10.112-98.261333 60.202667-103.722666 105.984-5.802667 56.234667 8.021333 112.085333 69.717333 120.021333m245.376 84.181334c0-23.978667-19.626667-96.128-93.44-96.128-73.770667 0-83.84 68.096-83.84 116.309333 0 45.952 3.797333 109.781333 95.872 107.861333 91.648-2.218667 81.621333-104.021333 81.621333-128.085333M772.266667 666.709333s-95.872-74.197333-151.765334-154.154666c-75.776-118.101333-183.637333-69.973333-219.477333-10.197334-36.053333 60.501333-91.861333 98.389333-99.797333 108.544-8.021333 9.898667-115.584 68.096-91.605334 174.037334 24.021333 105.941333 107.861333 104.064 107.861334 104.064s61.696 6.058667 133.674666-9.984c71.936-16 133.546667 3.882667 133.546667 3.882666s167.253333 56.192 213.546667-51.712c45.738667-108.245333-26.026667-164.138667-26.026667-164.138666" p-id="3903" fill="#fff"></path></svg>
    </div>
    <div class="input">
      <input type="text" ref="inputRef" v-model="searchValue">
    </div>
    <div class="icon2" @click="search">
      <img src="/images/search.svg" alt="">
    </div>
    <a target="_blank" ref="aRef" style="display: none;"></a>
  </div>
</template>

<style scoped lang="less">
.dropdown {
  transform: scale(1) !important;
  opacity: 1 !important;
}
.s-search {
  user-select: none;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  width: 560px;
  height: 42px;
  padding: 0 15px;
  background-color: #fff;
  border-radius: 25px;
  border: 1px solid #b8b8b8;
  box-shadow: 0 0 5px #929292;

  .drop {
    position: absolute;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 140px;
    width: 36px;
    left: 8px;
    bottom: -145px;
    background-color: #4a4a4a;
    border: 2px solid #686868;
    border-radius: 5px;
    transform: scale(0);
    transform-origin: top;
    transition: 0.2s ease;
    opacity: 0;
    z-index: 999;

    svg {
      width: 22px;
      height: 22px;
      padding: 2px;
      margin: 6px;
      cursor: pointer;
      border-radius: 5px;

      &:hover {
        background-color: rgb(164, 164, 164);
      }
    }
  }

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
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  .icon2 {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
}
</style>