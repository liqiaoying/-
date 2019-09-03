import { param2Obj } from '@/utils'
import userInfo from '@/assets/data/login/userinfo.json'
const userToken = {
  "msg": "success",
  "code": "0",
  "data": [],
  "name": "admin",
  "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"
}

export default {
  loginByToken: config => { //获取用户名
    return userToken
  },
  getUserInfo: config => { //获取用户详细信息
    return userInfo
  },
  logout: () => 'success'
}