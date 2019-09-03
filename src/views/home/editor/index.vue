<template>
  <div class="dashboard-editor-container">
    <div class=" clearfix">
      <pan-thumb :image="avatar" style="float: left">
        <span class="pan-info-roles"> 首页 </span>
      </pan-thumb>
      <!-- <github-corner style="position: absolute; top: 0px; border: 0; right: 0;"/> -->
      <div class="info-container">
        <span class="display-name">欢迎您　Cookies中的name放在这里</span>
      </div>
    </div>
    <div>
      <!-- <img :src="emptyGif"  class="emptyGif"> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PanThumb from '@/components/PanThumb'
// import GithubCorner from '@/components/GithubCorner'
import Cookies from 'js-cookie'

export default {
  name: 'Home',
  components: { PanThumb, },
  data() {
    return {
      emptyGif: require("../../../assets/home/home.gif"),
      avatar: require("../../../assets/home/icon.gif"),
      name:""
    }
  },
  computed: {
    ...mapGetters([
      // 'name',
      'roles'
    ])
  },
   created() {
      // this.name = Cookies.get('name') // 记录当前用户名
   }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .pan-info-roles{
    padding-top:45px;
    display: block;
  }
  .emptyGif {
    display: block;
    width: 45%;
    margin: 0 auto;
  }
  .display-remarks{
    font-size:20px;
    padding-top:20px;
    display:inline-block;
    letter-spacing: 10px
  }
  .dashboard-editor-container {
    background-color: #e3e3e3;
    height: calc(100vh - 70px);
    padding: 50px 60px 0px;
    .info-container {
      position: relative;
      margin-left: 190px;
      height: 150px;
      line-height: 200px;
      .display-name {
        font-size: 46px;
        line-height: 48px;
        color: #212121;
        position: absolute;
        top: 25px;
      }
    }
  }
</style>
