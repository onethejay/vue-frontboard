import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import List from "@/views/board/List"
import Detail from "@/views/board/Detail"
import Write from "@/views/board/Write"
import Login from "@/views/common/Login";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/board/list',
    name: 'List',
    component: List
  },
  {
    path: '/board/detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/board/write',
    name: 'Write',
    component: Write
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
