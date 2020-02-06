<template>
  <div class="home">
    <div
      class="nav-left"
      :style="todoFalg?'':'min-width: 240px'"
    >
      <NavBar />
    </div>
    <div class="nav-right">
      <Header />
      <div class="content">
        <div class="header">
          <span>首页</span>
        </div>
        <router-view />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/layout/nav-left/index'
import Header from '@/layout/header/index'
import Footer from '@/layout/footer/index'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  computed: {
    ...mapGetters({
      todoFalg: 'flag'
    })
  },
  components: {
    Footer,
    Header,
    NavBar
  }
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  .nav-left {
    min-width: 63px;
    background-color: #001529;
    color: #ffffff;
    overflow: auto;
    height: calc(100vh);
  }
  .nav-right {
    width: calc(100vw);
    height: calc(100vh);
    .content {
      padding: 0 20px;
      height: calc(80vh);
      position: relative;
      overflow: hidden;
      background-color: rgba(238, 245, 253, 0.9);
      .header {
        height: 60px;
        line-height: 60px;
        // box-sizing: border-box;
      }
    }
  }
}
</style>
