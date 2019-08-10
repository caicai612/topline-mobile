<template>
  <div class="login_warp">
    <van-nav-bar title="登录" />
    <van-cell-group>
      <van-field v-model="user.mobile" label="手机号" placeholder="请输入手机号"  clearable left-icon="contact" :error-message="mobileErrorMsg"/>
      <van-field v-model="user.code" clearable label="验证码" placeholder="请输入验证码" left-icon="envelop-o" >
      <van-button slot="button" size="small" type="default">发送验证码</van-button>
      </van-field>
          <div class="login-btn">
        <van-button @click=" handleLogin" class="btn" type="info" >登录</van-button>
      </div>
    </van-cell-group>

  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810'

      },
      mobileErrorMsg: ''
    }
  },
  methods: {
    async handleLogin () {
      // 表单验证
      if (this.user.mobile.trim().length === 0) {
        this.mobileErrorMsg = '请输入手机号码'
      } else {
        this.mobileErrorMsg = ''
      }
      try {
        const data = await login(this.user)
        // console.log(data)
        // 跳转之前保持登录状态
        this.$store.commit('setUser', data)
        this.$router.push({
          name: 'home'
        })
      } catch (err) {
        console.log('登录失败' + err)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-btn{
    padding: 10px;
    .btn {
        width: 100%;
    }
}
</style>
