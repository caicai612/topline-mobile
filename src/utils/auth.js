// 操作本地存储把读写用户封装

export const setUser = (user) => {
  window.localStorage.setItem('user', JSON.stringify(user))
}
export const getUser = () => {
  return JSON.parse(window.localStorage.getItem('user'))
}

export const removeUser = () => {
  return JSON.parse(window.localStorage.removeItem('user'))
}
