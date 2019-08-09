import axios from 'axios'
// 封装登录相应接口
const request = axios.create({
  baseURL: 'http://toutiao.course.itcast.cn'
})

export default request
