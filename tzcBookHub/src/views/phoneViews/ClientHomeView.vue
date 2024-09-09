<script setup>

import ClientHomeTitleComponent
  from "@/components/phoneComponents/phoneClientHomeViewComponent/ClientHomeTitleComponent.vue";
import ClientHomeMainComponent
  from "@/components/phoneComponents/phoneClientHomeViewComponent/ClientHomeMainComponent.vue";
import ClientHomeBottomComponent
  from "@/components/phoneComponents/phoneClientHomeViewComponent/ClientHomeBottomComponent.vue";
</script>

<template>
  <div id="titleContainer">
    <ClientHomeTitleComponent></ClientHomeTitleComponent>
  </div>

  <div id="mainContainer">
    <ClientHomeMainComponent></ClientHomeMainComponent>
  </div>

  <div id="buttomContainer">
    <ClientHomeBottomComponent></ClientHomeBottomComponent>
  </div>


</template>

<style scoped>

</style>