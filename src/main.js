import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import 'muse-ui/dist/theme-teal.css';
Vue.use(MuseUI);

Vue.config.productionTip = false;
Vue.prototype.http = axios;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})