<script setup>
import router from "@/router/index.js";
const go2SignIn = () => {
  console.log("go2SignIn");
  router.push("/phoneSignInView");
};

</script>

<template>
  <div id="pageContainer">
    <div id="textContainer">
      <div id="title1">巅峰对决</div>
      <div id="titleEN">pinnacle</div>
    </div>
    <div id="btnContainer">
      <div id="Btn" @click="go2SignIn">
        开启刷题之旅
      </div>
    </div>
  </div>
</template>

<style scoped>
  #pageContainer {
    width: 100%;
    height: 100vh;
    background-color: rgb(253,249,241);
    display: flex;
    flex-direction: column;
  }
  #textContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #title1 {
    font-size: 25px;
    font-weight: bold;
    margin-top: 60%;
  }

  #titleEN {
    font-size: 18px;
    font-weight: bold;
    color: rgb(233,168,69);
  }

  #btnContainer {
    display: flex;
    justify-content: center;
    margin-top: 30%;
  }

  #Btn {
    width: 200px;
    height: 35px;
    background-color: rgb(233,168,69);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
  }
</style>
