import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/list',
    },
    {
      path: '/list',
      component: () => import('@/views/list/ListPage.vue'),
    },
    {
      path: '/list/:id',
      component: () => import('@/views/detail/DetailPage.vue'),
      meta: { auth: true },
    },
    {
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});

export default router;
