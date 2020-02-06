<template>
  <div class="regiter-container">
    <el-form
      ref="regiterForm"
      :model="regiterForm"
      :rules="regiterRules"
      class="regiter-form"
      autocomplete="on"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">注册</h3>
      </div>

      <el-form-item prop="username">
        <!-- <span class="svg-container">
          <svg-icon icon-class="user" />
        </span> -->
        <el-input
          ref="username"
          v-model="regiterForm.username"
          placeholder="Username"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <!-- <span class="svg-container">
          <svg-icon icon-class="password" />
        </span> -->
        <el-input
          ref="password"
          v-model="regiterForm.password"
          placeholder="Password"
          name="password"
          type="password"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>

      <el-form-item prop="passwordTow">
        <!-- <span class="svg-container">
          <svg-icon icon-class="password" />
        </span> -->
        <el-input
          ref="passwordTow"
          v-model="regiterForm.passwordTow"
          placeholder="Two Password"
          name="passwordTow"
          type="password"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>

      <el-button
        :loading="loading"
        type="primary"
        style="width:100%;margin-bottom:30px;"
        @click.native.prevent="handleRegiter"
      >立即注册</el-button>
      <div style="color:#fff ;margin-bottom:30px;"> 其他注册方式</div>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      regiterForm: {
        username: '',
        passwordTow: '',
        password: ''
      },
      regiterRules: {
        username: [{ required: true, trigger: 'blur', validator: '' }],
        password: [{ required: true, trigger: 'blur', validator: '' }],
        passwordTow: [{ required: true, trigger: 'blur', validator: '' }]
      },
      loading: false
    }
  },
  methods: {
    handleRegiter () {
      this.$refs.regiterForm.validate(valid => {
        if (valid) {
          console.log(this.regiterForm)
          this.loading = true
          if (this.regiterForm.passwordTow !== this.regiterForm.password) {
            return this.$message.error('密码不一致')
          }
          this.axios
            .post('/user/regiter', this.regiterForm)
            .then(res => {
              if (res.code === 1) {
                this.loading = false
                this.$message.success('注册成功')
                this.$router.push('/login')
              }
              console.log(res)
            })
            .catch(err => (this.loading = false))
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
.regiter-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  .regiter-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 70px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    .title-container {
      position: relative;
      .title {
        font-size: 26px;
        color: $light_gray;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
      }
    }
  }
}
</style>
