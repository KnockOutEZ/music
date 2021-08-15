import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Manage from '../views/Manage.vue';

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
  // this will redirect to /manage path
  {
    path: '/manage-server',
    redirect: { name: 'Manage' },
  },
  {
    path: '/:catchAll(.*)*',
    redirect: { path: '/' },
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500',
});

export default router;
