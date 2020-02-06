<template>
  <div class="user">
    <img
      :src="logoItem"
      alt="11"
    />

    <div
      class="user-name"
      style="width:60%"
    >
      <div style="fontSize:12px;color:#000">欢迎！</div>&nbsp;&nbsp;&nbsp;
      {{user[0].username}}
    </div>
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        <i
          class="el-icon-setting"
          style="fontSize:20px"
        ></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="a"> <i class="el-icon-s-tools"></i>黄金糕</el-dropdown-item>
        <el-dropdown-item
          command="b"
          divided
        >狮子头</el-dropdown-item>
        <el-dropdown-item
          command="c"
          divided
          icon="el-icon-s-tools"
        >螺蛳粉</el-dropdown-item>
        <el-dropdown-item
          command="e"
          divided
        >蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import logo from '../../assets/logo.png'
export default {
  computed: {
    ...mapGetters({
      user: 'userList'
    })
  },
  data () {
    return {
      logoItem: logo,
      show: false
    }
  },
  methods: {
    handleCommand (command) {
      this.$message('click on item ' + command)
    }
  }
}
</script>
<style lang="scss" scoped>
.user {
  width: 200px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  .user-name {
    display: flex;
    align-items: center;
    color: #409eff;
  }
  .el-icon-setting {
    margin-left: 5px;
    cursor: pointer;
  }
}
</style>
