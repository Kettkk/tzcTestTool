<script lang="ts" setup>
import { ref } from 'vue';
const phoneNumber = ref('');
// 动态绑定样式
const inputStyles = {
  color: 'blue', // 输入文本的颜色
  backgroundColor: 'rgb(251,239,218)', // 输入框背景色
  borderRadius: '8px', // 圆角
};

</script>

<template>
<div>
  <div id="textContainer">
    <div id="Title1">开启刷题之旅</div>
    <div id="EnTitle">Sign in</div>
  </div>

  <div id="FormContainer">
    <div id="inputer">
      <el-input
          v-model="phoneNumber"
          placeholder="手机号"
          :style="inputStyles"
      />
    </div>
  </div>

</div>
</template>

<style scoped>
#textContainer{}
#Title1{
  font-size: 23px;
  font-weight: bold;
  margin-top: 45%;
  margin-left: 5%;
}
#EnTitle{
  font-size: 15px;
  font-weight: bold;
  color: rgb(233,168,69);
  margin-left: 5%;
}

/* 自定义占位符的颜色 */
.el-input__inner::placeholder {
  color: black; /* 占位符文字颜色 */
}

</style>