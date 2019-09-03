import md5 from 'js-md5'  // 加密

export default function hmd5(a) {
    var saltstart = "W$!",  //定义一个salt值，程序员规定下来的随机字符串
    saltlast = "*&g@5",  //定义一个salt值，程序员规定下来的随机字符串
    b = saltstart + a + saltlast,  //把密码和salt连接
    b = md5(b);  //执行MD5散列
    return b;  //返回散列 
}