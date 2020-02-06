const mutation = {
  setUser: (state, data) => (state.userList = data),
  setFlag: (state, data) => (state.flag = data)
}
export default mutation
