import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import VueDirectiveMarkdown from 'vue-directive-markdown'

Vue.config.productionTip = false
Vue.directive('decode', VueDirectiveMarkdown)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
