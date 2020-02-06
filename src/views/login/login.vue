<template>
  <div class="login-container">
    <loginItem />
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      autocomplete="on"
      label-position="left"
    >
      <div class="title-container">
        <img
          :src="logoItem"
          alt="111"
        >
        <h3 class="title">运营管理系统</h3>
      </div>

      <el-form-item prop="username">
        <!-- <span class="svg-container">
          <svg-icon icon-class="user" />
        </span> -->
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="Username"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>

      <el-tooltip
        v-model="capsTooltip"
        content="Caps lock is On"
        placement="right"
        manual
      >
        <el-form-item prop="password">
          <!-- <span class="svg-container">
            <svg-icon icon-class="password" />
          </span> -->
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="Password"
            name="password"
            tabindex="2"
            autocomplete="on"
            @keyup.native="checkCapslock"
            @blur="capsTooltip = false"
            @keyup.enter.native="handleLogin"
          />
          <!-- <span
            class="show-pwd"
            @click="showPwd"
          >
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span> -->
        </el-form-item>
      </el-tooltip>
      <el-form-item
        class="yanzheng"
        prop="loginyzm"
        :rules="{ required: true, message: '验证码不能为空', trigger: 'blur'}"
      >
        <el-input
          type="text"
          placeholder="验证码"
          v-model="loginForm.loginyzm"
        ></el-input>&emsp;<span
          @click="randyzm()"
          class="word-img"
        >{{yzmn}}</span>
      </el-form-item>

      <el-button
        :loading="loading"
        type="primary"
        style="width:100%;margin-bottom:30px;"
        @click="handleLogin"
      >登录</el-button>

      <div class="login-footer">
        <div class="tips">
          <a @click="regiter">立即注册</a>
        </div>
        <div class="tips">
          <a @click="otherLogin">其他登陆方式</a>
        </div>
      </div>
    </el-form>
    <div
      class="log"
      v-show="share"
    >
      <i class="el-icon-edit"></i>
      <i class="el-icon-share"></i>
      <i class="el-icon-delete"></i>
    </div>
    <!-- //弹框 -->
    <!-- <el-dialog
      title="Or connect with"
      :visible.sync="showDialog"
    >
      Can not be simulated on local, so please combine you own business
      simulation! ! !
      <br />
      <br />
      <br />
      <social-sign />
    </el-dialog> -->
  </div>
</template>
<script>
import loginItem from '@/components/login/index.vue'
import logo from '@/assets/logo.png'

import { validUsername } from '@/utils/index.js'
import { mapGetters } from 'vuex'
export default {
  data () {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('请输入你的用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码最多6位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: '',
        loginyzm: ''
      },
      loginRules: {
        username: [
          { required: true, trigger: 'blur', validator: validateUsername }
        ],
        password: [
          { required: true, trigger: 'blur', validator: validatePassword }
        ]
      },
      passwordType: 'password',
      yzmn: '',
      yzm: '',
      share: false,
      capsTooltip: false,
      logoItem: logo,
      loading: false,
      showDialog: false,
      redirect: undefined,
      otherQuery: {}
    }
  },
  mounted () {
    console.log(this.todosALise)
    if (this.loginForm.username === '') {
      this.$refs.username.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
  },
  computed: {
    ...mapGetters({
      todosALise: 'userList'
    })
  },
  created () {
    let that = this
    document.onkeydown = function (e) {
      let key = window.event.keyCode
      if (key === 13) {
        that.handleLogin()
      }
    }

    this.randyzm()
  },

  methods: {
    checkCapslock ({ shiftKey, key } = {}) {
      if (key && key.length === 1) {
        if (
          (shiftKey && key >= 'a' && key <= 'z') ||
          (!shiftKey && key >= 'A' && key <= 'Z')
        ) {
          this.capsTooltip = true
        } else {
          this.capsTooltip = false
        }
      }
      if (key === 'CapsLock' && this.capsTooltip === true) {
        this.capsTooltip = false
      }
    },
    otherLogin () {
      this.share = !this.share
    },
    randyzm () {
      let code = ''
      let coden = ''
      var codeLength = 4 // 验证码的长度
      var random = new Array(
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z'
      ) // 随机数
      for (var i = 0; i < codeLength; i++) {
        var index = Math.floor(Math.random() * 62)
        code += random[index] // 根据索引取得随机数加到code上
        coden += random[index] + ' '
      }
      this.yzm = code // 把code值赋给验证码
      this.yzmn = coden
    },
    regiter () {
      this.$router.push('/regiter')
    },
    // showPwd () {
    //   if (this.passwordType === 'password') {
    //     this.passwordType = ''
    //   } else {
    //     this.passwordType = 'password'
    //   }
    //   this.$nextTick(() => {
    //     this.$refs.password.focus()
    //   })
    // },
    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.axios
            .post('/user/login', this.loginForm)
            .then(res => {
              if (res.code === 0) {
                const data = res.data
                this.loading = false
                var _this = this
                setTimeout(() => {
                  _this.$router.replace({ path: '/' })
                }, 1000)

                // this.$router.replace({ path: '/' })
                this.$store.dispatch('LoginAccent', data)
              }
            })
            .catch(err => console.log(err))
        } else {
          this.$message.error('请填入正确信息')
          return false
        }
      })
    },
    getOtherQuery (query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
    // afterQRScan() {
    //   if (e.key === 'x-admin-oauth-code') {
    //     const code = getQueryObject(e.newValue)
    //     const codeMap = {
    //       wechat: 'code',
    //       tencent: 'code'
    //     }
    //     const type = codeMap[this.auth_type]
    //     const codeName = code[type]
    //     if (codeName) {
    //       this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
    //         this.$router.push({ path: this.redirect || '/' })
    //       })
    //     } else {
    //       alert('第三方登录失败')
    //     }
    //   }
    // }
  },
  components: {
    loginItem
  }
}
</script>
<style lang="scss">
$bg: #283443;
$light_gray: #fff;
$cursor: #fff;
@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}
.el-form-item__content {
  width: 100%;
}
/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>
<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
.login-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 70px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    color: #fff;
    cursor: pointer;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img {
      width: 140px;
      height: 140px;
    }
    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
.yanzheng {
  display: flex;
  align-items: center;
}
.word-img {
  display: inline-block;
  text-align: center;
  width: 90px;
  font-size: 20px;
  height: 100%;
  color: #2b3b4b;
  background-color: #1ea7fe;
  position: absolute;
  right: 0;
  bottom: 0;
  padding-top: 2px;
}
.log {
  padding: 8px;
  text-align: center;
  color: #fff;
  i {
    margin-left: 10px;
    font-size: 20px;
  }
}
</style>
