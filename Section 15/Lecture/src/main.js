import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-http-da763.firebaseio.com/';
Vue.http.interceptors.push((request, next) => {
  if (request.method == 'POST') {
    request.method = 'PUT';
  }
  next((response) => {
    response.json = () => {
      return { messages: response.body };
    };
  });
});

new Vue({
  el: '#app',
  render: (h) => h(App),
});
