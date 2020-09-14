import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import Vuelidate from 'vuelidate';

import router from './router';
import store from './store';

Vue.use(Vuelidate);

axios.defaults.baseURL = 'https://vuejs-axios-fbb56.firebaseio.com';
//axios.defaults.headers.common['Authorization'] = 'test';
//axios.defaults.headers.get['Accepts'] = 'application/json';

// const requestInterceptor = axios.interceptors.request.use((config) => {
//   console.log('Req', config);
//   //config.headers['SOMETHING'] = 'test';
//   return config;
// });

// const responseInterceptor = axios.interceptors.response.use((res) => {
//   console.log('Res', res);
//   return res;
// });

//axios.interceptors.request.eject(requestInterceptor);
//axios.interceptors.response.eject(responseInterceptor);

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
});
