import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css' // This line here
import Router from 'vue-router'
import routes from './routes.js'

Vue.use(Router)
Vue.use(VueMaterial)
const router = new Router({ routes });
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
