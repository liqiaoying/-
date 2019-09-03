<template>
  <div class="app-headLogo">
      <!-- <img :src="h_logo" alt="logo" class="hlogo">
      <div class="hname">
        <p class="cname">{{ c_name }}</p>
        <p class="ename">{{ e_name }}</p>
      </div> -->
      <div class="showlogos">
        <img class="pic-404__parent" src="@/assets/comm/logos.svg" alt="logos">
      </div>
     
  </div>
</template>

<script>
export default {
  name: 'HeadCname',
  data() {
    return {
      h_logo: require("@/assets/comm/logo.png"),
      c_name: 'WG彩票',
      e_name: 'www.wgsy.com'
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";

.app-headLogo {
  height:$topHeight;
  position: fixed;
  top:0px;
  background:$headBg;
  width: $sideBarWidth;
  z-index: 1000;
  transition: width 0.28s;
  img{
    max-width: 100%;
  }
}
.showlogos{
  padding-top: 15px;
  text-align: center;
  padding-right: 7px;
  img{
    max-width: 60%;
  }
}
.hlogo{
  float:left;
  width: 30%;
  padding-left:5%;
  padding-top:10px;
  text-align: center
}
.hname{
  float:right;
  width: 65%;
  line-height:14px;
  color:$menuText;
  padding-top:10px
}
.cname{
  line-height: 30px;
  font-size: 18px;
}
.ename{
  line-height: 14px;
  font-size: 12px;
}
</style>

