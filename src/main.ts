import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// 引入依赖包
import Input from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入外部样式，消除浏览器影响
import './assets/style/reset.css';

Vue.use(Input);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
