import Vue from 'vue'
import Vuex from 'vuex'
// import VueRouter from 'vue-router'
import App from './component/List.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/store_index'
// import VueLazyload from 'vue-lazyload'
// Vue.use(VueAxios, axios)
Vue.use(Vuex)
// vue.use(VueRouter)
// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   error: './img/error.jpg',
//   loading: 'http://cdn.uehtml.com/201402/1392662591495_1140x0.gif',
//   attempt: 1,
//   listenEvents: [ 'scroll', 'mousewheel' ]
// });
// if (window.__INITIAL_STATE__) {
//     store.replaceState(window.__INITIAL_STATE__)
// }
// import LisT from './component/List'
// var router=new VueRouter({
//   routes:[
//    {path:"/",component:LisT},
//    {path:"/jingxuan",component:LisT}
//   ]
// });

new Vue({
    el: '#app',
    store,
    router:router,
    template: '<App/>',
    components: {
        App
    }
})