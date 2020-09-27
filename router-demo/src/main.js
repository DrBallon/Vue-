import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { A, B, B1, B2, B21, B22, C, C1, C2, Left1, Left2, Right1, Right2, NotFound } from './components_1';
Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/a' },
    { path: '/a', component: A },
    {
      path: '/b',
      component: B,
      children: [
        { path: '/', redirect: '/b/b1' },
        { path: '/b/b1', component: B1 },
        {
          path: '/b/b2',
          component: B2,
          children: [
            { path: '/', redirect: '/b/b2/b21' },
            { path: '/b/b2/b21', component: B21 },
            { path: '/b/b2/b22', component: B22 },
          ],
        },
      ],
    },
    {
      path: '/c',
      component: C,
      children: [
        { path: '/', redirect: '/c/c1' },
        {
          path: '/c/c1',
          components: {
            default: C1,
            c1: Left1,
            c2: Right1,
          },
        },
        {
          path: '/c/c2',
          components: {
            default: C2,
            c1: Left2,
            c2: Right2,
          },
        },
      ],
    },
    { path: '*', component: NotFound },
  ],
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
