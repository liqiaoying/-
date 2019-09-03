<template>
  <div class="navbar">
    <hamburger :toggle-click="toggleSideBar" :is-active="sidebar.opened" class="hamburger-container"/>

    <breadcrumb class="breadcrumb-container"/>

    <div class="user-changeinfo-box">
      <div id="clock">
        <span>北京时间 : 2013559</span>
        <!-- <span>{{date}}</span>
        <span>{{week}}</span>
        <span>{{time}}</span> -->
      </div>
      <!-- <el-button :autofocus="false" v-if="isLogIn" :plain="true" >
        <template v-if="userType == 1">admin</template>
        <template v-if="userType == 2">平台运营用户</template>
        <template v-if="userType == 3">代理商老板</template>
        <template v-if="userType == 4">代理商员工</template>
        _{{ name }}
        </el-button> /
      <el-button :plain="true" @click="handleChangeInfo('修改密码')">修改密码</el-button> /
      <el-button :plain="true" @click="handleChangeInfo('退出登录')">退出登录</el-button> -->
    </div>

     <!-- 修改admin密码弹窗 -->
      <!-- <el-dialog :visible.sync="changePwdDialogVisible" title="修改密码" width="360px" :close-on-click-modal="false" :lock-scroll="false" :append-to-body="true" :top="dialogMt">
        <div class="dialog-box">       
          <p>
            <span class="dialog-label-item">
              <span class="required">*</span>新密码：
            </span>
            <el-input placeholder="请输入新密码" v-model="newPassword" autocomplete="off" :type="newPasswordType" minlength="4" max-length="15"/>
            <span class="show-pwd" @click="showPwd(2)">
              <svg-icon :icon-class="newPasswordType === 'password' ? 'eye' : 'eye-open'" />
            </span>
          </p>
          <p>
            <span class="dialog-label-item">
              <span class="required">*</span>确认密码：
            </span>
            <el-input placeholder="请输入确认密码" v-model="confirmPassword" autocomplete="off" :type="confirmPasswordType" minlength="4" max-length="15"/>
            <span class="show-pwd" @click="showPwd(3)">
              <svg-icon :icon-class="confirmPasswordType === 'password' ? 'eye' : 'eye-open'" />
            </span>
          </p>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="okUpdatePwd" size="mini">确 定</el-button>
          <el-button @click="changePwdDialogVisible = false" size="mini">取 消</el-button>
        </span>
      </el-dialog> -->
 
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import { logout,mergePasswd,serverTime } from '@/api/login'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import ErrorLog from '@/components/ErrorLog'
import Screenfull from '@/components/Screenfull'
import Search from '@/components/HeaderSearch'
import { validatePwd } from "@/utils/validate";
import { removeToken } from '@/utils/auth'
import Cookies from 'js-cookie'
export default {
  data() {
    return {
      allowChangeLogo: 1, // 是否允许更换LOGO
      isLogIn: true, // 是否为登录状态，控制'_'显示
      changePwdDialogVisible: false,
      changeBaseInfoDialogVisible: false,
      oldPasswordType: 'password', // 密码是否显示
      newPasswordType: 'password',
      confirmPasswordType: 'password',
      oldPassword: '', // 密码数据字段
      newPassword: '',
      confirmPassword: '',
      changeinfoType: '', // 修改信息类型
      dialogHeight:0,
      dialogMt:this.dialogMt, // 弹出框上边距
      // 时钟使用数据
      // cd: '',
      currentDate: '', // 当前服务器系统时间
      tempStr: '',
      time: '', // 时间
      date: '', // 日期
      week: '', // 星期
      name: '', // 用户名
      userType: '' // 用户类型
    }
  },
  components: {
    Breadcrumb,
    Hamburger,
    ErrorLog,
    Screenfull,
    // SizeSelect,
    // ThemePicker,
    Search,
  },
  computed: {
    ...mapGetters([
      'sidebar',
      // 'name',
      // "userType",
      // 'avatar',
      // 'device',
      // 'dropMenu',
    ]),
  },
  mounted() {
    this.$nextTick(() => {
      this.judgeScree(this.dialogHeight);  // 判断屏幕大小进行操作
    })
    window.onresize = () =>{
      this.judgeScree(this.dialogHeight);
    };
    
  },
  created() {
    serverTime().then(res => {
      if(res) {
        let resData = res.data
        if(resData.success == 1) {
          this.week = resData.content.serverTime.split(' ')[2]
          this.tempStr = resData.content.serverTime.split(' ')[0] + ' ' + resData.content.serverTime.split(' ')[1]
          this.tempStr = this.tempStr.substring(0,19);
          this.tempStr = this.tempStr.replace(/-/g,'/');
          let cd = new Date(this.tempStr).getTime();
          setInterval(() => {
            cd += 1000
            let a = new Date(cd)
            this.date = a.getFullYear() + '-' + (a.getMonth()+1) + '-' + a.getDate()
            this.time = a.getHours() + ':' + (a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes()) + ':' + (a.getSeconds() < 10 ? '0'+a.getSeconds() : a.getSeconds());
          }, 1000); 
        }else {
          this.$message.error(resData.respMsg)
        }
      }
    })
    this.name = Cookies.get('name') // 记录当前用户名
    this.userType = Cookies.get('userType') // 记录当前用户类型
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('toggleSideBar')
    },
    judgeScree(val) { // 判断屏幕大小进行操作
      let a = document.body.offsetHeight - val;
      this.dialogMt = a / 2 + 'px';
    },
    
    // handleChangeInfo(type) { // 具体的点击事件
    //   if(type == '修改密码') {
    //     this.judgeScree(250);
    //     this.oldPassword = '';
    //     this.newPassword = '';
    //     this.confirmPassword = ''; 
    //     this.changePwdDialogVisible = true;
    //   }else if(type == '退出登录') {
    //     this.isLogIn = false;
    //     logout().then(res => {
    //       let resData = res.data
    //       if(resData.success == 1) {
    //         this.$store.commit('SET_NAME', '')
    //         this.$store.commit('SET_USER_TYPE', '')
    //         this.$store.commit('SET_TOKEN', '')
    //         this.$store.commit('SET_ROLES', [])   // 设置路由
    //         removeToken()
    //         location.reload()
    //       }
    //     })
    //   }
    // },
 
    // okUpdatePwd() { // 确认修改密码
    //   // if(validatePwd(this.oldPassword) == false) {
    //   //   this.$message.warning('原密码限制4-15位字符,不可纯数字或纯字母,必须数字和字母组合')
    //   //   return false;
    //   // }

    //   if(validatePwd(this.newPassword) == false) {
    //     this.$message.warning('新密码限制4-15位字符,不可纯数字或纯字母,必须数字和字母组合')
    //     return false;
    //   }

    //   if(validatePwd(this.confirmPassword) == false) {
    //     this.$message.warning('确认密码限制4-15位字符,不可纯数字或纯字母,必须数字和字母组合')
    //     return false;
    //   }
      
    //   if (this.confirmPassword == this.newPassword) {
        
    //     mergePasswd({passwd: this.$md5(this.newPassword),confirmPasswd: this.$md5(this.confirmPassword)}).then(res => {
    //       let resData = res.data
    //       if(resData.success == 1) {
    //         this.$message.success(resData.respMsg)
    //         this.changePwdDialogVisible = false;
    //       }else {
    //         this.$message.error(resData.respMsg)
    //       }
    //     })
    //   } else {
    //     this.$message.warning('确认密码和新密码不一致!')
    //     return false;
    //   } 
    // },
    // showPwd(passtype) { // 显示-隐藏密码
    //   if(passtype == 1) {
    //     if (this.oldPasswordType === 'password') {
    //       this.oldPasswordType = 'text'
    //     } else {
    //       this.oldPasswordType = 'password'
    //     }
    //   }else if(passtype == 2) {
    //     if (this.newPasswordType === 'password') {
    //       this.newPasswordType = 'text'
    //     } else {
    //       this.newPasswordType = 'password'
    //     }
    //   }else if(passtype == 3) {
    //     if (this.confirmPasswordType === 'password') {
    //       this.confirmPasswordType = 'text'
    //     } else {
    //       this.confirmPasswordType = 'password'
    //     }
    //   }
    // }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
// #clock {
//   margin-right: 20px;
//   padding-top: 4px;
// }
.changeBaseInfo {
  .el-dialog .dialog-label-item {
    width: 120px;
  }
}
.navbar {
  height: 35px;
  overflow: hidden;
  position: fixed;
  top:0px;
  z-index: 1;
  background:#fff;
  display: block;
  width:calc(100% - 200px); 
  
  
  .user-changeinfo-box {
    padding-right: 20px;
    float: right;
    margin-top:5px;
    display: flex;
    align-items: center;
    #clock {
      line-height: 14px;
      padding-top: 1px;
      margin-right: 20px;
      color: #606266;
    }
    .el-button {
      margin: 0 5px;
      padding: 6px 0;
      border:none;
      &:hover {
        background-color: none;
      }
    }
  }
  .hamburger-container {
    line-height: 34px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }
  .pt5{
    padding-top:5px!important;
  }
  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 24px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        font-size: 16px;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 5px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
