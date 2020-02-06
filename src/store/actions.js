// import axios from '@/api/index.js'
import Storage from '../utils/storge.js'
const actions = {
  LoginAccent (context, data) {
    console.log(data)
    Storage.setLocalStorage('user', data)
    context.commit('setUser', data)
  },
  SiderAccent (context, data) {
    console.log(data)
    // Storage.setLocalStorage('user', data)
    context.commit('setFlag', data)
  }
}
export default actions
