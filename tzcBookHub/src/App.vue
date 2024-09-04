<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const isMobile = ref(window.innerWidth <= 768);
const router = useRouter();

const checkDevice = () => {
  isMobile.value = window.innerWidth <= 768;
};

const navigateBasedOnDevice = () => {
  if (isMobile.value) {
    router.push('/PhoneHomeView'); // 手机端视图路由
  } else {
    router.push('/PCHomeView'); // PC端视图路由
  }
};

onMounted(() => {
  // 检查设备类型并导航
  navigateBasedOnDevice();

  // 监听窗口大小变化
  window.addEventListener('resize', checkDevice);

  // 如果设备类型发生变化，重新导航
  checkDevice(); // 初始检查
});

</script>

<template>
  <div id="pageContainer">
    <!-- 单一的 router-view 用于展示路由组件 -->
    <router-view />
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
</style>
