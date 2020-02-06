export default {
  setLocalStorage (name, value) {
    const values = JSON.stringify(value)
    return localStorage.setItem(name, values)
  },
  getLocalStorage (name) {
    return JSON.parse(localStorage.getItem(name))
  },
  removeLocalStorage (name) {
    return localStorage.removeItem(name)
  },
  setSessionStorage (name, value) {
    const values = JSON.stringify(value)
    return sessionStorage.setItem(name, values)
  },
  getSessionStorage (name) {
    console.log(11111111)
    return JSON.parse(sessionStorage.getItem(name))
  },
  removeSessionStorage (name) {
    return sessionStorage.removeItem(name)
  }
}
