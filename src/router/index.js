import Vue from 'vue'
import VueRouter from 'vue-router'
import Storage from '../utils/storge'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    title: '登录页面',
    component: resolve => require(['@/views/login/login.vue'], resolve)
  },
  {
    path: '/regiter',
    name: 'regiter',
    title: '注册页面',
    component: resolve => require(['@/views/regiter/regiter.vue'], resolve)
  },
  {
    path: '/',
    redirect: '/home',
    component: resolve => require(['@/views/index.vue'], resolve),
    meta: {
      keepAlive: false, // 不需要被缓存
      title: '首页'
    },
    children: [
      /**
       * 主页
       */
      {
        path: '/home',
        component: resolve => require(['@/views/home/home.vue'], resolve),
        meta: {
          keepAlive: false, // 不需要被缓存
          title: '首页'
        }
      },
      {
        path: '/hightTable',
        component: resolve => require(['@/views/table/heightTable.vue'], resolve),
        meta: {
          keepAlive: false, // 不需要被缓存
          title: '基础表格'
        }
      },
      {
        path: '/baseTable',
        component: resolve => require(['@/views/table/baseTable.vue'], resolve),
        meta: {
          keepAlive: false, // 不需要被缓存
          title: '高级表格'
        }
      },
      {
        path: '/home',
        component: resolve => require(['@/views/home/home.vue'], resolve),
        meta: {
          keepAlive: false, // 不需要被缓存
          title: '首页'
        }
      },
      {
        path: '/user',
        component: resolve => require(['@/views/user/user.vue'], resolve),
        meta: {
          keepAlive: false, // 不需要被缓存
          title: '账号管理'
        }
      },
      {
        path: '/role',
        component: resolve => require(['@/views/role/role.vue'], resolve),
        meta: {
          keepAlive: false, // 不需要被缓存
          title: '角色管理'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})
/**
 * 登录拦截
 */
router.beforeEach((to, from, next) => {
  let reg = /^\/login\/*/
  if (to.path === '/login') {
    Storage.removeLocalStorage('user')
    sessionStorage.clear()
  } else {
    next()
  }
  if (to.path === '/regiter') {
    next()
  } else {
    let userLogin = Storage.getLocalStorage('user')
    console.log(to.path)
    console.log(!userLogin)
    console.log(!reg.exec(to.path))
    if (!userLogin && !reg.exec(to.path)) {
      next({ path: '/login' })
    } else {
      next()
    }
  }
})
export default router
