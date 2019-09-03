import { loginByToken, logout, getUserInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import Cookies from 'js-cookie' // 设置cookie

const user = {
  state: {
    user: '',
    status: '',
    token: getToken(),
    name: '',          // 设置用户名
    userType: '',
    avatar: '',        // 设置头像
    introduction: '',  // 设置头像说明
    roles: [],         // 设置路由
    dropMenu: '',       // 设置头部下拉快捷功能
    ServerTime:"" // 服务器时间
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_USER_TYPE: (state, userType) => {
      state.userType = userType
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_DROPMENU: (state, dropMenu) => {
      state.dropMenu = dropMenu
    }
  },

  actions: {
    // 获取用户信息
    GetUserInfo({ commit }, data) {
      return new Promise((resolve, reject) => {
        getUserInfo(data).then(res => {
          let resData = res.data
          // resData.content = []
          if(resData.success == 1) {
            commit('SET_ROLES', resData.content)   // 设置路由
            resolve(resData.content)

          }else {
            this.$message.error(resData.respMsg)
          }
        })
          .catch(error => {
            reject(error)
          })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          // Cookies.remove('SET_NAME') // 测试 删除前端用户名
          commit('SET_NAME', '')
          commit('SET_USER_TYPE', '')
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])   // 设置路由
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        Cookies.remove('SET_NAME') // 测试 删除前端用户名
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },

    // 获取用户头部下拉信息
    GetNavBar({ commit }, url) {
      return new Promise(resolve => {
        if (url.includes('systemManage')) {
          commit('SET_DROPMENU', 'systemManage')
        } else if (url.includes('lc_reportManage')) {
          commit('SET_DROPMENU', 'lc_reportManage')
        } else {
          commit('SET_DROPMENU', '0')
        }
      })
    }
    // // 动态修改权限
    // ChangeRoles({ commit, dispatch }, role) {
    //   return new Promise(resolve => {
    //     commit('SET_TOKEN', role)
    //     setToken(role)
    //     getUserInfo(role).then(response => {
    //       const data = response.data
    //       commit('SET_ROLES', data.roles)  // 设置路由
    //       commit('SET_AVATAR', data.avatar)
    //       commit('SET_INTRODUCTION', data.introduction)
    //       dispatch('GenerateRoutes', data) // 动态修改权限后 重绘侧边菜单
    //       resolve()
    //     })
    //   })
    // }

  }
}

export default user
