<template>
  <div class="login-container" ref="loginBox" @keyup.enter.native="handleLogin">
    <el-form ref="loginForm1" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
      <div class="title-container">
        <div class="title" style="max-width: 22%;margin: 40px auto 80px 0px;">
          <!-- <span><img class="pic-404__parent" src="@/assets/comm/logo.png" alt="logo"></span>
          <span><img class="pic-404__parent" src="@/assets/comm/logoName.png" alt="logoName"></span> -->
          <img class="pic-404__parent" src="@/assets/comm/logos.svg" alt="logos">
        </div>
      </div>

      <div class="logo-form-wapper">
        <div class="logo-form">
          <label class="logo-lable">用户名：</label>
          <!-- 第一个input 框用来隐藏，因为在多次进入页面的时候，input框会点击选中不了 -->
            <el-form-item style="display: none;">
              <el-input  name="username" type="text"  />
            </el-form-item>
          <div class="logo-inp logo-usernaem">
            <el-form-item>
              <el-input style="user-select: text;"  v-model="loginForm.username" :placeholder="defult.username" name="username" type="text"  @keyup.enter.native="handleLogin"/>
            </el-form-item>
          </div>
        </div>

      <div class="logo-form">
          <label class="logo-lable">密&nbsp;&nbsp;&nbsp;&nbsp;码：</label>
          <div class="logo-inp logo-psd">
              <!-- 第一个input 框用来隐藏，因为在多次进入页面的时候，input框会点击选中不了 -->
            <el-form-item style="display: none;">
              <el-input :type="passwordType"   name="password" />
              <span class="show-pwd" @click="showPwd">
                <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
              </span>
            </el-form-item>

            <el-form-item>
              <el-input style="user-select: text;" auto-complete="new-password" v-model="loginForm.password" :type="passwordType" :placeholder="defult.password" v-on:input ="inputFunc" name="password"  @keyup.enter.native="handleLogin"/>
              <span class="show-pwd" @click="showPwd">
                <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
              </span>
            </el-form-item>
          </div>
        </div>

       <el-button :loading="loading" type="primary" @click.native.prevent="handleLogin">登  录</el-button>
      </div>
      <div class="logo-validate">
        <!-- <div class="logo-validate-logo"><img class="pic-404__parent" src="@/assets/comm/logoName.png" alt="logoName"></div>
        <div class="logo-validate-val">{{ validate }}</div> -->
        <div class="logo-validate-val">温馨提示</div>
        <div class="logo-validate-val tishiyu">{{ validate }}</div>
      </div>
     
    </el-form>   
     <p class="logo-validate-floor-sign">Copyright 2004-2019 GG. ALL Rights Reserved</p>
  </div>
</template>

<script>
import { validateCommonUserName, validatePwd } from '@/utils/validate.js'
import { logout } from '@/api/login'
import { mapState } from "vuex";
import { getToken, setToken, removeToken } from '@/utils/auth'
import { Message, MessageBox } from 'element-ui'
import { loginByToken } from '@/api/login'
import Cookies from 'js-cookie'
export default {
  name: 'Login',
  computed: {
    ...mapState({
      ip: state => state.getIp.ip,
      ipAddress: state => state.getIp.ipAddress,
      validate: state => state.getIp.validate,
    })
  },
  data() {
    return {
      defult: {
        username: '帐号',
        password: '密码'
      },
      loginForm: {
        username: '',
        password: ''
        // ,
        // cip: '',
        // cname: ''
      },
      loginRules: {
        username: [{ required: true }],
        password: [{ required: true }]
      },
      passwordType: 'password',
      loading: false,
      showDialog: false,
      redirect: undefined,
      isClick: true,  // 判断是否可以点击  
      timer:null, // 定时器

    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  created() {
    let that = this;
    that.loginForm.password = "";
    document.onkeydown = function (e) {
      let key = window.event.keyCode;
      if (key === 13){
        that.handleLogin();//方法
      }
    }   
  },
  destroyed() {
  },
   mounted() {
      this.loginForm = {username: '', password: ''}
      let timeout = this.$route.query.timeout
      if(timeout && timeout == 10014){ 
        this.$store.state.getIp.validate = '您已超时，请重新登录。';
        this.logOutClearCata()
      }else if(timeout && timeout == 10009){
        this.$store.state.getIp.validate = '您的账号在其他地方登录，请重新登录。';
        this.$store.state.tagsView.visitedViews = []
        this.logOutClearCata()
      }else if(timeout && timeout == 10002){
        this.$store.state.getIp.validate = '未登陆，请先登陆，请重新登录。';
        this.logOutClearCata()
      } else if(timeout && timeout == 10013){
        this.$store.state.getIp.validate = '您的账号已被平台禁用。';
        this.logOutClearCata()
      }else if(timeout && timeout == 10015){
        this.$store.state.getIp.validate = '您的账号已被禁用。';
        this.logOutClearCata()
      }
  },
  methods: {
    logOutClearCata() { // 
              this.$store.dispatch('delAllViews').then(({ visitedViews }) => {  
                  if(!this.affixTags){
                    return 
                  }
                  if (this.affixTags.some(tag => tag.path === view.path)) {
                    return
                  }
                  const latestView = visitedViews.slice(-1)[0]
                  if (latestView) {
                    this.$router.push(latestView)
                  } else {
                    this.$router.push('/')
                  }
                })
                this.$store.dispatch('removeAll')
                this.$store.commit('SET_NAME', '')
                this.$store.commit('SET_USER_TYPE', '')
                this.$store.commit('SET_TOKEN', '')
                this.$store.commit('SET_ROLES', [])   // 设置路由
               removeToken()
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
    },
    handleLogin() { // 登录
      let that = this
      if(this.isClick == false) {
        return;
      }
      let username = this.loginForm.username;
      let password = this.loginForm.password;
      if (!validateCommonUserName(username.toLocaleLowerCase())) {
        this.$store.state.getIp.validate = '用户名必须是字母、字母+数字、纯字母的组合';
        return;
      }
      if (!validatePwd(password)) {
        this.$store.state.getIp.validate = '请输入4~15位数字和字母的密码';
        return;
      }
      this.isClick = false;  // 防多点击

      this.$refs.loginForm1.validate(valid => {
        setTimeout(() => {
          if (valid) {
          this.loading = true;
          let data = {
            username: username,
            passwd: this.$md5(password) // 加密传送
            // passwd: password  // 不加密传送
          };

          loginByToken(data).then(res => { // 登录方法
            let resData = res.data
            if(resData.success == 1) {
              setToken(resData.content.token) // 设置token
              // this.$store.commit('SET_AVATAR', avatar) // 设置头像信息
              this.$store.commit('SET_NAME', resData.content.username) // 设置用户名
              this.$store.commit('SET_USER_TYPE', resData.content.userType) // 这只用户类型
              Cookies.set('name',resData.content.username)
              Cookies.set('userType',resData.content.userType)
              // this.$message.success(resData.respMsg)
              this.loading = false
              this.isClick = true;  // 防多点击
              this.$router.push({ path: this.redirect || '/' })
            }else {
              this.$store.state.getIp.validate = resData.respMsg
              this.loading = false
              this.isClick = true;  // 防多点击
              this.$router.push({ path: this.redirect || '/' })
            }
          }).catch(() => {
            this.isClick = true;  // 防多点击
            this.loading = false
          })
        } else {
          this.isClick = true;  // 防多点击
          return false
        }
        }, 1000);
        
      })
    },
    inputFunc(){
      // let that = this;
      // let data = this.$refs.passworddata.currentValue;
      // debugger
      // // this.loginForm.password;
      // this.$refs.passworddata.currentValue = data.replace(/.(?!$)/g,"*")
      // clearTimeout(this.timer);
      // this.timer=setTimeout(function(){
      //       that.loginForm.password = data.replace(/./g,"*");
      // },1000);

    }

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scope>
  $bg:#283443;
  $light_gray:#223041;
  $cursor: rgb(0, 0, 0);
  @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
    .login-container .el-input input{
      color: $cursor;
      &::first-line {
        color: $light_gray;
      }
    }
  }
  .tishiyu{
    color: #EE9C3C !important;
  } 
  .logo-validate-floor-sign{
    color: #fff;
    width: 100%;
    text-align: center;
    margin-top:calc(100vh - 390px);
    opacity: 0.6;
  }
  .logo-validate-val{
    color:#fff;
    margin-left:42px;
    padding-top: 18px
  }
  .logo-validate{
    border-left:1px solid rgba(255,255,255,0.5);
    height: 160px;
    width: 300px;
    overflow: hidden;
    float:left;
    margin-left:50px;
    padding-top: 30px;
  }
  .logo-validate-logo{
    padding-left:40px;
    padding-top:12px;
    width: 200px;
    img{
      width: 70%;
    }
  }
  .logo-form-wapper{
    clear: both;
    width: 300px;
    float:left;
    padding-top:20px;
  }
  .logo-usernaem{
    // position: relative;
  }
  .logo-psd{
    // position: relative;
  }
  .logo-form{
    clear: both;
    width: 300px;
  }
  .logo-lable{
    float:left;
    width: 60px;
    line-height: 30px;
    color:#ffffff;
    font-weight:normal;
  }
  .logo-inp{
    float:left;
    width: 240px;
  }
  /* reset element-ui css */
  .login-container {
    .el-button--primary{
      height: 28px;
      width: 80px;
      font-size: 16px;
      float:right
    }
    .el-button {
      padding: 0px 15px;
    }
    .el-input {
      display: inline-block;
      height: 30px;
      width: 100%;
      input {
        background: #fff!important;
        border: 0px;
        -webkit-appearance: none;
        padding: 12px 5px 12px 15px;
        color: #000000;
        height: 36px;
        caret-color: $cursor;
        // &:-webkit-autofill {
        //   -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        //   -webkit-text-fill-color: #ffffff !important;
        // }
      }
    }
    .el-form-item {
      border-radius: 4px;
      color: #000000;
      height: 30px;
      margin-bottom:15px;
      .el-input__inner {
        height: 28px;
        line-height: 28px;
        padding: 0 4px;
        border: 1px solid white;
        background: white;
      }
    }
  }
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-image: url('../../assets/comm/bg.jpg');
  background-size: 100% 100%;
  overflow: hidden;
  .login-form {
    position: relative;
    width: 720px;
    max-width: 100%;
    margin-top: 30px;
    margin-left: 60px;
    overflow: hidden;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      margin: 40px auto 80px auto;
      font-weight: bold;
      overflow: hidden; 
      span{
        float:left;
        padding-right:5px;
        img{
          width: 85%;
        }
      }
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 3px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: text;
  }
}
</style>
