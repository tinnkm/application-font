import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Result from '@/pages/Result'
import Error from '@/pages/Error'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'Index',
      // component: Index,
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/error/:bizId',
      name: 'Error',
      component: Error,
      props: true
    },
    {
      path: '/result/:bizId',
      name: 'Result',
      component: Result,
      props: true
    }
  ]
})
