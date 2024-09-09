<script setup>

import router from "@/router/index.js";

const go2ClientHome = () => {
    router.push('/phoneClientView');
};

</script>

<template>
    <div style="display: flex">
        <div id="titleContainer">
            <div id="title1-ClientHome">
                <div class="title1">
                    设置
                </div>
                <div id="clientHomeBtnContainer">
                    <div id="clientHomeBtn" @click="go2ClientHome">
                        <svg t="1725887351642" class="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="1517"
                             width="23" height="23">
                            <path
                                d="M1002.7584 475.776L566.2784 39.68 537.1584 10.24a35.584 35.584 0 0 0-50.176 0L21.2544 475.776A72.192 72.192 0 0 0 0.0064 527.744a72.96 72.96 0 0 0 73.28 71.488h48v367.872h781.44V599.232h49.024c19.264 0 37.44-7.552 51.136-21.184 13.696-13.696 21.12-31.872 21.12-51.2 0-19.2-7.552-37.376-21.248-51.072z m-427.52 410.048H448.7744v-230.4h126.464v230.4z m246.144-367.872v367.872h-173.824V628.288a45.184 45.184 0 0 0-45.184-45.184H421.6384a45.184 45.184 0 0 0-45.184 45.184v257.536H202.6304V517.952H94.2144l417.92-417.6 26.048 26.112 391.68 391.488h-108.48z"
                                fill="#B4520A" p-id="1518">
                            </path>
                        </svg>
                    </div>
                </div>


            </div>
            <div class="titleEN">
                pinnacle
            </div>
        </div>
    </div>
</template>

<style scoped>
#titleContainer {
    width: 100%;
    margin-top: 15%;
}

#title1-ClientHome {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 30px;
}

.title1 {
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    flex: 1;
}

.titleEN {
    font-size: 15px;
    font-weight: bold;
    color: rgb(233, 168, 69);
    text-align: center;
}

#clientHomeBtnContainer {
    width: 60px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 7%;
}

#clientHomeBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
}

#clientHomeBtn:hover {
    cursor: pointer;
}
</style>