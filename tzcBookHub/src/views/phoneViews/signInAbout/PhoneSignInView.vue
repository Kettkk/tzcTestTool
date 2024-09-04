<script lang="ts" setup>
import { ref } from 'vue';

const phoneNumber = ref('');
const password = ref('');
const showPassword = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
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
        <input
            type="text"
            placeholder="手机号"
            v-model="phoneNumber"
            id="customInput"
        />
        <div id="passwordContainer">
          <input
              :type="showPassword ? 'text' : 'password'"
              placeholder="密码"
              v-model="password"
              id="customInput"
          />
          <button type="button" id="toggleButton" @click="togglePasswordVisibility">

            <svg
                v-if="!showPassword"
                t="1725418361458"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="5185"
                width="20"
                height="20">
              <path d="M512 256a416.853333 416.853333 0 0 1 376.32 234.666667C817.92 634.453333 673.706667 725.333333 512 725.333333s-305.92-90.88-376.32-234.666666A416.853333 416.853333 0 0 1 512 256m0-85.333333C298.666667 170.666667 116.48 303.36 42.666667 490.666667 116.48 677.973333 298.666667 810.666667 512 810.666667s395.52-132.693333 469.333333-320C907.52 303.36 725.333333 170.666667 512 170.666667z m0 213.333333a106.666667 106.666667 0 0 1 0 213.333333 106.666667 106.666667 0 0 1 0-213.333333m0-85.333333c-105.813333 0-192 86.186667-192 192S406.186667 682.666667 512 682.666667s192-86.186667 192-192S617.813333 298.666667 512 298.666667z" p-id="5186" data-spm-anchor-id="a313x.search_index.0.i14.65d43a81RV3wjL" fill="#AE782A" class="selected"></path>
            </svg>
            <svg
                v-else
                t="1725417413708"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4879"
                data-spm-anchor-id="a313x.search_index.0.i10.65d43a81RV3wjL"
                width="20"
                height="20">
              <path d="M512 256a416.853333 416.853333 0 0 1 376.32 234.666667 411.605333 411.605333 0 0 1-102.826667 133.12l60.16 60.16c59.306667-52.48 106.24-118.186667 135.68-193.28C907.52 303.36 725.333333 170.666667 512 170.666667c-54.186667 0-106.24 8.533333-155.306667 24.32l70.4 70.4C454.826667 259.84 482.986667 256 512 256z m-45.653333 48.64L554.666667 392.96c24.32 10.666667 43.946667 30.293333 54.613333 54.613333l88.32 88.32c3.413333-14.506667 5.973333-29.866667 5.973333-45.653333C704 384.426667 617.813333 298.666667 512 298.666667c-15.786667 0-30.72 2.133333-45.653333 5.973333zM85.76 165.12l114.346667 114.346667A500.821333 500.821333 0 0 0 42.666667 490.666667C116.48 677.973333 298.666667 810.666667 512 810.666667c64.853333 0 127.146667-12.373333 184.32-34.986667l145.92 145.92 60.16-60.16L145.92 104.533333 85.76 165.12z m320 320l111.36 111.36c-1.706667 0.426667-3.413333 0.853333-5.12 0.853333a106.666667 106.666667 0 0 1-106.666667-106.666666c0-2.133333 0.426667-3.413333 0.426667-5.546667z m-145.066667-145.066667l74.666667 74.666667a196.266667 196.266667 0 0 0-15.36 75.946667 192.298667 192.298667 0 0 0 267.52 176.64l41.813333 41.813333c-37.546667 10.24-76.8 16.213333-117.333333 16.213333a416.853333 416.853333 0 0 1-376.32-234.666666c29.866667-61.013333 73.386667-111.36 125.013333-150.613334z" p-id="4880" fill="#AE782A"></path>
            </svg>


          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#textContainer {}
#Title1 {
  font-size: 23px;
  font-weight: bold;
  margin-top: 45%;
  margin-left: 5%;
}
#EnTitle {
  font-size: 15px;
  font-weight: bold;
  color: rgb(233,168,69);
  margin-left: 5%;
}
#inputer {
  margin-left: 5%;
  margin-top: 5%;
}

#customInput {
  width: 90%;
  height: 30px;
  padding: 10px;
  border-radius: 8px;
  background-color: rgb(251,239,218); /* 背景色 */
  border: 1px solid transparent; /* 去除边框 */
  font-size: 16px; /* 字体大小 */
  color: rgb(222, 160, 66); /* 输入的字体颜色 */
  outline: none; /* 去掉点击时的外边框 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 5%;
}

/* 自定义占位符的颜色 */
#customInput::placeholder {
  color: rgb(224, 168, 83); /* 占位符文字颜色 */
}

#passwordContainer {
  position: relative;
  width: 100%;
}

#toggleButton {
  position: absolute;
  top: 40%;
  right: 40px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
}
</style>
