import Storage from '../utils/storge'
let initUserList = Storage.getLocalStorage('user')
console.log(initUserList)
const state = {
  userList: initUserList || [],
  flag: false
}
export default state
