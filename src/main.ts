import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// 引入外部样式，消除浏览器影响
import './assets/style/reset.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
