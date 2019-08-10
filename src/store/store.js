import Vue from 'vue'
import Vuex from 'vuex'
import { getUser, setUser } from '@/utils/auth.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 获取登录状态
    user: getUser()
  },
  mutations: {
    setUser (state, user) {
      state.user = user
      setUser(user)
    }
  },
  actions: {

  }
})
