<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import PhoneHomeView from "@/views/PhoneHomeView.vue";
import PCHomeView from "@/views/PCHomeView.vue";

const isMobile = ref(window.innerWidth <= 768);

const checkDevice = () => {
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  window.addEventListener('resize', checkDevice);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkDevice);
});
</script>

<template>
  <div>
    <phone-home-view v-if="isMobile" />
    <PCHomeView v-else />
  </div>
</template>

<style scoped>

</style>
