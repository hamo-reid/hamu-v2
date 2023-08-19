import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("@/pages/HamuHome.vue")
    },
    {
      path: '/test',
      name: 'test',
      component: () => import("@/pages/HamuTest.vue")
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("@/pages/HamuLogin.vue")
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import("@/components/dashboard/DashboardBase.vue"),
      redirect: '/dashboard/home',
      children: [
        {
          path: 'home',
          name: 'DashboardHome',
          component: () => import("@/pages/dashboard/DashboardHome.vue")
        }
      ]
    }
  ]
})

export default router