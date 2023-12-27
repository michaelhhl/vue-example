import { type RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import LayoutIndex from '@/layout/LayoutIndex.vue'
import { getToken } from '@/utils/userOp'

export const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/pages/login/LoginPage.vue'),
  },
  {
    path: '/',
    component: LayoutIndex,
    children: [
      {
        path: '/departmentAdmin',
        component: () => import('@/pages/people/DepartmentAdmin.vue'),
      },
      {
        path: '/roleAdmin',
        component: () => import('../pages/role/RoleAdmin.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(async (to) => {
  if (to.path === '/login')
    return true

  if (to.path !== '/login' && !getToken())
    return '/login'
})

export default router
