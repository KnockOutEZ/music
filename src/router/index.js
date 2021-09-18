import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Manage from '../views/Manage.vue';
import Song from '../views/Song.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/manage',
    // alias will render the page in /manage-server path
    // alias: '/manage-server',
    name: 'Manage',
    component: Manage,
  },
  // this will redirect to /manage path if went to /manage-server path
  {
    path: '/manage-server',
    redirect: { name: 'Manage' },
    // meta: {
    //   requiresAuth: true,
    // },
  },
  {
    path: '/:catchAll(.*)*',
    redirect: { path: '/' },
  },
  {
    name: 'Song',
    path: '/song/:id',
    component: Song,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500',
});

export default router;
