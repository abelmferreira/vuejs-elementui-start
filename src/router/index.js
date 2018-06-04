import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Projects from '@/views/Projects.vue'

import Login from '@/views/Login.vue'
import Logout from '@/views/Logout.vue'
import Profile from '@/views/Profile.vue'
import Settings from '@/views/Settings.vue'

import Protected from '@/views/Protected.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { requiresAuth: false }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { requiresAuth: false }
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout,
      meta: { requiresAuth: false }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: { requiresAuth: true }
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings,
      meta: { requiresAuth: true }
    },
    {
      path: '/protected/:id',
      name: 'Proteced',
      component: Protected,
      meta: { requiresAuth: true }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: { requiresAuth: false }
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
      meta: { requiresAuth: true }
    }
  ]
})
