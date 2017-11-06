import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/index/:id',
      name: 'index',
      props: true,
      component: resolve => require(['@/views/index.vue'], resolve)
    },
    {
      path: '/posts/:tag/:id',
      name: 'posts',
      props: true,
      component: resolve => require(['@/views/posts.vue'], resolve)
    },
    {
      path: '/single/:id',
      name: 'single',
      props: true,
      component: resolve => require(['@/views/single.vue'], resolve)
    },
    {
      path: '/',
      redirect: '/index/1'
    }
  ]
})

export default router;