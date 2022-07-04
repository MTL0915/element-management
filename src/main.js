import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'
import './assets/css/reset.css'
import axios from 'axios'

Vue.use(ElementUI);

Vue.config.productionTip = false

Vue.prototype.$axios = axios

router.beforeEach((to,from,next)=>{
  const token = sessionStorage.getItem('token')
  if(!token && to.name !== 'login'){
    next({name:'login'})
  } else{
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
