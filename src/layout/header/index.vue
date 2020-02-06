<template>
  <div class="header">
    <el-button
      type="primary"
      :icon="todoFalg?'el-icon-s-unfold':'el-icon-s-fold'"
      @click="sider"
    ></el-button>
    <div class="r-btn">
      <el-button
        type="primary"
        :icon="!fullscreen?'el-icon-full-screen':'el-icon-aim'"
        @click="bigScreen"
      ></el-button>
      <userInfo />
    </div>
  </div>
</template>
<script>
import userInfo from '../../components/user/index'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      fullscreen: false
    }
  },
  components: {
    userInfo
  },
  computed: {
    ...mapGetters({
      todoFalg: 'flag'
    })
  },
  methods: {
    sider() {
      this.$store.dispatch('SiderAccent', !this.todoFalg)
    },
    bigScreen() {
      let element = document.documentElement
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen()
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen()
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen()
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen()
        }
      }
      this.fullscreen = !this.fullscreen
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  height: 80px;
  width: 100%;
  background-color: #ad7828;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .r-btn {
    // width: 40%;
    display: flex;
  }
}
</style>
