import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import List from "@/views/board/List"
import Detail from "@/views/board/Detail"
import Write from "@/views/board/Write"
import Login from "@/views/common/Login";
import {store} from "@/vuex/store";

const requireAuth = () => (from, to, next) => {
  const token = localStorage.getItem('user_token')
  if (token) {
    store.state.isLogin = true
    return next()
  } // isAuth === true면 페이지 이동
  next('/login') // isAuth === false면 다시 로그인 화면으로 이동
}

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
    component: List,
    beforeEnter: requireAuth()
  },
  {
    path: '/board/detail',
    name: 'Detail',
    component: Detail,
    beforeEnter: requireAuth()
  },
  {
    path: '/board/write',
    name: 'Write',
    component: Write,
    beforeEnter: requireAuth()
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
