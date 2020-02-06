import axios from 'axios'
axios.defaults.baseURL = '/api'// 设置默认的基本路径
axios.interceptors.response.use((res) => {
  return res.data
})
axios.interceptors.request.use((config) => {
  // Indicator.open();//请求提示
  return config
})
export let post = (url, data) => {
  return axios.post(url, data)
}
export let get = (url) => {
  return axios.get(url)
}
