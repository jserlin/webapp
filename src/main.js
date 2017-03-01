// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
// import Mint from 'mint-ui';
// import 'mint-ui/lib/style.css';
import './libs/css/reset.css';
//import './libs/css/font/iconfont.css';
import './libs/css/stylus/index.styl';

// 全局引用mint-ui
// Vue.use(Mint);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
