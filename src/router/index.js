import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Index from '@/views/Index/Index'
import UserManage from '@/views/Users/UserManage'
import Login from '@/views/Login/Login'
import NOT_FOUND from '@/views/Error/404'

Vue.use(Router)

/*
* 备注：
*     路由格式：
*             {
*                  path: 'xxx',                    // 访问路径  
*                  name: 'xxx',                    // 路径名称   
*                  component: 'xxx',               // 组件名
*                  hidden: 'true|false'            // 是否显示在菜单栏
*                  children: []
*                   meta: {
*                    title: 'xxx',                 // 菜单栏的标题
*                    roles: ['admin', 'normal']    // 权限列表，有权限的才显示在菜单栏
*                  }
*             }
*/ 

// 固定路由，无论什么权限都能看到
export const constantRouterMap = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    hidden: true
  },
  {
    path: '/404',
    component: NOT_FOUND,
    hidden: true
  }
]

export default new Router({
  routes: constantRouterMap
})

// 权限路由，只有特定权限的用户才能看到
export const asyncRouterMap = [
  {
    path: '/index',
    component: Layout,
    meta: { title: '首页', icon: 'user', roles: ['admin'] },
    redirect: '/index/users',
    children: [{
      path: 'index',
      component: Index,
      name: 'index',
      meta: { title: '首页', icon: 'user', roles: ['admin'] }
    }, {
      path: 'users',
      component: UserManage,
      name: 'userManage',
      meta: { title: '用户管理', icon: 'user', roles: ['admin'] }
    }]
  },
  { path: '*', redirect: '/404', hidden: true }
]