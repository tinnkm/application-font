import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Config from '../../config.js'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'Index',
      // component: Index,
      redirect: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='+Config.appid+'&redirect_uri=&response_type=code&scope=snsapi_base#wechat_redirect'
    }
  ]
})
