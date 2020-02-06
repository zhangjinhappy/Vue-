import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/fonts/iconfont.css'
// table 的样式需要手动引入
import 'element-ui/lib/theme-chalk/icon.css'
import 'element-ui/lib/theme-chalk/table.css'
import 'element-ui/lib/theme-chalk/table-column.css'
import './element/index'
import './assets/css/reset.css'
import * as axios from './api/index'
/* 分页页码 */
import pagination from '@/components/pagination.vue'
// /*模态框*/
import hlvyDia from '@/components/hlvyDia.vue'

Vue.config.productionTip = false
// 自定义标签
function _extend(base, clazz) {
  return {
    extends: base,
    mounted: function () {
      var el = this.$el
      el.className = el.className + ' ' + clazz
    }
  }
}

function _install(Vue, name, comp) {
  Vue.component(name, _extend(comp, name))
}

const install = function (Vue, opts = {}) {
  _install(Vue, 'hlvy-page', pagination)
  _install(Vue, 'hlvy-dia', hlvyDia)
}
Vue.use(install)
Vue.use(ElementUI)
Vue.prototype.axios = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
