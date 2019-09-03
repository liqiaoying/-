import request from '@/utils/request'
import qs from 'qs'

export function loginByToken(data) { // 登录
  return request({
    baseURL: '/api', 
    url: '/cp4/system/userLogin/login',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function logout() { // 登出
  return request({
    baseURL: '/api', 
    url: '/cp4/system/userLogin/loginout',
    method: 'post'
  })
}

export function getUserInfo() { // 获取用户菜单
  return request({
    baseURL: '/api', 
    url: '/cp4/system/user/info',
    method: 'post'
  })
}

export function mergePasswd(data) { // 修改密码
  return request({
    baseURL: '/api', 
    url: '/cp4/system/user/mergePasswd',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function serverTime() { // 获取系统时间
  return request({
    baseURL: '/api', 
    url: '/cp4/opening/opening/serverTime',
    method: 'post'
  })
}
