import Vue from 'vue'
import MyApp from './MyApp.vue'
import vuetify from './plugins/vuetify'
import router from './router.js'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(MyApp)
}).$mount('#app')
