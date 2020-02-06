const meunConfig = [
  {
    title: '系统首页',
    key: '/home',
    icon: 'el-icon-s-home'
  },
  {
    title: '表格',
    key: '/shop',
    icon: 'el-icon-s-grid',
    children: [
      { title: '基础表格', key: '/baseTable', icon: 'el-icon-menu' },
      { title: '重要表格', key: '/hightTable', icon: 'el-icon-suitcase-1' }
    ]
  },
  {
    title: '用户管理',
    key: '/user',
    icon: 'el-icon-s-check'
  },
  {
    title: '角色管理',
    key: '/role',
    icon: 'el-icon-s-custom'
  },
  {
    title: '地图',
    key: '/echarts',
    icon: 'el-icon-s-marketing',
    children: [
      { title: '分兮页', key: '/analysis', icon: 'el-icon-s-data' },
      { title: '监控页', key: '/monitor', icon: 'el-icon-s-data' },
      { title: '工作台', key: '/workplace', icon: 'el-icon-s-data' }
    ]
  }
]
export default meunConfig
