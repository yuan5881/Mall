import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'

import toast from 'components/common/toast'

Vue.use(VueLazyLoad,{
  loading:require('./assets/img/转.gif')
})

Vue.config.productionTip = false

Vue.use(toast)

Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
