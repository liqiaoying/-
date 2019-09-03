import Axios from "axios";

export function fetch(url,params){
  return new Promise((resolve, reject) => {
    axios.get(url,params)
      .then(response  => {
        alert('Api--ok');
        resolve(response.data);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default{
  //获取后台数据
  mineBaseMsgApi(){
    return fetch('');
  }
}