import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/Main'
import Home from '../views/Home/index'
import Mall from '../views/Mall/index'
import Article from '../views/Article/index'

import Login from '../views/Login/index'

Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      name:'Main',
      component:Main,
      redirect:'home',
      children:[
        {
          path:'home',
          name:'home',
          meta:'首页',
          component:Home
        },
        {
          path:'mall',
          name:'mall',
          meta:'好书推荐',
          component:Mall
        },
        {
          path:'article',
          name:'article',
          meta:'文章管理',
          component:Article
        }
      ]
    },
    {
      path:'/login',
      name:'login',
      component:Login
    }
  ]
})