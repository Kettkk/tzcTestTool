<script setup>
import ClientHomeMainCard from "@/components/phoneComponents/phoneClientHomeViewComponent/ClientHomeMainCard.vue";
import {ref} from "vue";
const name = ref("毛泽东思想概论");

</script>

<template>
 <div id="mainContainer">
    <div id="cardsContainer">
      <ClientHomeMainCard></ClientHomeMainCard>

    </div>
   <div id="cardsChooseText">
     <div style="color: rgb(233,168,69)">当前题库&ensp;</div>
     <div style="color: rgb(211,144,43);font-size: 18px;font-family: 'Apple Braille'">{{name}}</div>
   </div>
 </div>
</template>

<style scoped>

#mainContainer{
  height: 50%;
  width: 100%;
  margin-top: 10%;
  //background-color: gray;
}
#cardsContainer{
  height: 370px;
  //background-color: aqua;
}
#cardsChooseText{
  height: 80px;
}
#cardsChooseText{
  display: flex;
  justify-content: center;
  align-items: center;
}




</style>