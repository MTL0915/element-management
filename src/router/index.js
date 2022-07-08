import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/Main'
import Home from '../views/Home/index'
import Mall from '../views/Mall/index'
import Article from '../views/Article/index'

import Visitors from '../views/Visitors/index'
import VisCustomer from '../views/Visitors/visCustomer'

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
        },
        {
          path:'visitors',
          name:'visitors',
          meta:'游客管理',
          component:Visitors,
          redirect:'visitors/visCustomer',
          children:[
            {
              path:'visCustomer',
              name:'visCustomer',
              meta:'顾客信息',
              component:VisCustomer
            }
          ]
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