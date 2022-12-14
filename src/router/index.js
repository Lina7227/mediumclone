import { createRouter, createWebHistory } from 'vue-router';
import GlobalFeed from '@/views/GlobalFeed.vue';
import Register from '@/views/Register.vue';
import Login from '@/views/Login.vue';

const routes = [
  {
    path: '/',
    name: 'globalFeed',
    component: GlobalFeed
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
];

const router = createRouter({
  routes,
  history: createWebHistory()
});

export default router;
