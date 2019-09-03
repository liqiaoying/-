import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import { getToken, removeToken } from '@/utils/auth'
import { drive } from '@/utils/judge'
// import { logout } from '@/api/login'
import Cookies from 'js-cookie' // 设置cookie

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 100000 // 请求超时时间
})


// request 拦截器
service.interceptors.request.use(
  config => {
    let datatoken = getToken()
    // Do something before request is sent
    config.headers.channel = drive();
    if(getToken()){
      config.headers.authtoken = getToken();
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  // response => response,
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  response => {
    const res = response.data
    return response
  },
  error => {
    Message({
      message: '您当前网络不稳定，请重新刷新页面',
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service