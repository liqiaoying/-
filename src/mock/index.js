import Mock from 'mockjs'
import loginAPI from './login' // 登入模块
import adminAPI from './systemAdmin' // 系统管理模块
import rolePermissions from './sm_role_or_ppermissions'


// 修复在使用 MockJS 情况下，设置 withCredentials = true，且未被拦截的跨域请求丢失 Cookies 的问题
// https://github.com/nuysoft/Mock/issues/300
Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
Mock.XHR.prototype.send = function() {
  if (this.custom.xhr) {
    this.custom.xhr.withCredentials = this.withCredentials || false
  }
  this.proxy_send(...arguments)
}

// Mock.setup({
//   timeout: '350-600'
// })

// 登录相关
// Mock.mock(/\/system\/login/, 'post', loginAPI.loginByToken)
// Mock.mock(/\/login\/logout/, 'post', loginAPI.logout)
// Mock.mock(/\/system\/userByPermisssions\/\w+/, 'post', loginAPI.getUserInfo)



// 系统管理 =》 权admin管理
// Mock.mock(/\/systemManager\/admin\/list/, 'get', adminAPI.getAdminList)


// 系统管理 =》 权限管理
// role  /systemManger/permissions/list
// Mock.mock(/\/system-manger\/systemManger\/permissions\/list/, 'get', rolePermissions.getPermissionsList)
// Mock.mock(/\/system-manger\/systemManger\/permissions\/permissionTree/, 'get', rolePermissions.getPermissionhandleNodeShow)
// Mock.mock(/\/system-manger\/systemManger\/permissions\/saveOrUpdate/, 'get', rolePermissions.postPermissionSaveOrUpdate)
// Mock.mock(RegExp("/system-manger/systemManger/permissions/saveOrUpdate" + ".*"), 'post',rolePermissions.postPermissionSaveOrUpdate)


export default Mock
