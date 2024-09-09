<script setup>
import { ref } from 'vue'

const isSelected = ref(false)
</script>

<template>
  <div id="card">
    <div id="cardHead">
      <div id="headSearchBtn">搜题&emsp;|</div>
      &emsp;
      <div id="headStudyInfoBtn">学习数据&emsp;|</div>
      &emsp;
      <div id="headWrongProblemBtn">错题本</div>
    </div>

    <div id="cardNameBig">TZC2024-1毛泽东思想概论题库</div>

    <div id="cardNameSmall">TZC2024-1毛泽东思想概论题库</div>

    <div id="problemInfoContainer">
      <div id="correctNum">做对0</div>
      <div id="wrongNum">做错0</div>
    </div>

    <div id="cardBottom">
      <div id="isChooseBox" @click="isSelected = !isSelected">
        <div class="custom-checkbox" :class="{ checked: isSelected }"></div>
        <span>选择题库</span>
      </div>

      <div id="rankBtn">查看排行榜</div>
    </div>
  </div>
</template>

<style scoped>
#card {
  width: 75%;
  height: 94%;
  margin-left: 12.5%;
  margin-top: 4%;
  padding-bottom: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(249,239,220);
  border-radius: 10px;
}
#cardHead {
  height: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: rgb(233,168,69);
}
#headSearchBtn {
  cursor: pointer;
}
#headStudyInfoBtn {
  cursor: pointer;
}
#headWrongProblemBtn {
  cursor: pointer;
}
#cardNameBig {
  font-size: 30px;
  font-weight: bold;
  width: 80%;
  color: rgb(175,120,42);
}
#cardNameSmall {
  font-size: 15px;
  font-weight: bold;
  color: rgb(192, 137, 54);
}
#problemInfoContainer {
  width: 60%;
  display: flex;
  justify-content: space-between;
}
#correctNum {
  width: 60px;
  height: 25px;
  font-size: 14px;
  font-family: "Apple Braille";
  background-color: rgb(247,217,228);
  color: rgb(223,53,98);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#wrongNum {
  width: 60px;
  height: 25px;
  font-size: 14px;
  font-family: "Apple Braille";
  background-color: rgb(217,228,247);
  color: rgb(53,98,223);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#cardBottom{
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(175,120,42);
}

#isChooseBox {
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 10%;
}

.custom-checkbox {
  width: 15px;
  height: 15px;
  border: 2px solid #e9a845;
  border-radius: 4px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.custom-checkbox.checked {
  background-color: #e9a845;
  border-color: #e9a845;
}

.custom-checkbox.checked::before {
  content: '✔';
  color: white;
  font-size: 14px;
}

span {
  color: rgb(175,120,42);
  font-size: 14px;
}

#rankBtn {
  margin-right: 10%;
  font-family: "Apple Braille";
  font-size: 14px;
  cursor: pointer;
}
</style>