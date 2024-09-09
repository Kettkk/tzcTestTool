<script setup>
import { ref } from 'vue';

const isEndlessMode = ref(true);

const toggleMode = () => {
  isEndlessMode.value = !isEndlessMode.value;
};
</script>

<template>
  <div>
    <div id="SliderContainer">
      <div :class="{ active: isEndlessMode }" @click="toggleMode">无尽模式</div>
      <div :class="{ active: !isEndlessMode }" @click="toggleMode">普通模式</div>
      <div id="SliderButton" :class="{ moveRight: !isEndlessMode, moveLeft: isEndlessMode }">
        {{ isEndlessMode ? '无尽模式' : '普通模式' }}
      </div>
    </div>

    <div id="startBtnContainer">
      <div id="startBtn">开始答题</div>
    </div>
  </div>
</template>

<style scoped>
#SliderContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 35px;
  width: 70%;
  margin-left: 15%;
  background-color: rgb(247, 239, 222);
  border-radius: 20px;
  color: rgb(167,122,58);
  border: 1px solid rgb(233, 168, 69);
}

#SliderContainer div {
  width: 50%;
  text-align: center;
  z-index: 2;
  cursor: pointer;
}

#SliderButton {
  position: absolute;
  height: 100%;
  width: 50%;
  background-color: rgb(223,171,87);
  color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  transition: transform 0.3s ease-in-out;
  z-index: 1;
}

.moveRight {
  transform: translateX(100%);
}

.moveLeft {
  transform: translateX(0%);
}

#startBtn{
  width: 75%;
  height: 35px;
  background-color: rgb(231, 169, 74);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 5%;
  margin-left: 12.5%;
}

</style>