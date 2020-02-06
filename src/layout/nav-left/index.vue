<template>
  <div class="nav-content">
    <div class="nav-top">
      <img
        :src="logoImg"
        alt=""
      />
      <h2
        class="nav-h2"
        v-show="!todoFalg"
      >牛逼企业管理系统</h2>
    </div>
    <el-menu
      default-active="2"
      router
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="todoFalg"
      background-color="#001529"
      text-color="#fff"
      :collapse-transition="false"
      active-text-color="#ffd04b"
    >
      <div
        v-for="item in meunList"
        :key="item.key"
      >
        <el-submenu
          :index="item.key"
          v-if="item.children"
        >
          <template slot="title">
            <i :class="item.icon"></i>
            <span v-show="!todoFalg">{{item.title}}</span>
          </template>
          <el-menu-item-group
            v-for="i in item.children"
            :key='i.key'
          >
            <el-menu-item :index="i.key">
              <i :class="i.icon"></i>
              <span slot="title">{{i.title}}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item
          v-else
          :index="item.key"
        >
          <i :class="item.icon"></i>
          <span slot="title">{{item.title}}</span>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>
<script>
import logo from '@/assets/logo.png'
import { mapGetters } from 'vuex'
import meunList from '../../utils/meunConfig'
export default {
  data () {
    return {
      meunList,
      logoImg: logo
    }
  },
  computed: {
    ...mapGetters({
      todoFalg: 'flag'
    })
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="scss" scoped>
.nav-content {
  height: 100%;
  .nav-top {
    height: 80px;
    color: #ffffff;
    padding: 0 8px;
    display: flex;
    align-items: center;
    img {
      width: 30px;
      height: 30px;
      margin-left: 10px;
    }
    .nav-h2 {
      font-size: 20px;
      padding-left: 5px;
    }
  }
}
</style>
