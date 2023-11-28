import API from '@/api/api'
import config from '@/config/config'
import store from '@/store'
import axios from 'axios'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/table',
    name: 'table.index',
    component: () => import('../views/Table/TableView.vue')
  },
  {
    path: '/table/create',
    name: 'table.create',
    component: () => import('../views/Table/TableCreateView.vue')
  },

  {
    path: '/user/cabet/all',
    name: 'user.cabet.all',
    component: () => import('../views/Users/UsersCabetAllView.vue')
  },
  {
    path: '/user/create/cabet',
    name: 'user.create.cabet',
    component: () => import('../views/Users/UsersCreateCabetView.vue')
  },

  {
    path: '/schedule/incpectors',
    name: 'incpector.schedule',
    component: () => import('../views/Schedule/ScheduleIncpectorView.vue')
  },
  {
    path: '/schedule/incpector/:name/:year/:week',
    name: 'incpector.schedule.name',
    component: () => import('../views/Schedule/ScheduleIncpectorNameView.vue')
  },

  {
    path: '/development',
    component: () => import('../views/Error/inDevelopmentView.vue'),
    name: 'development',
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('../views/Error/404.vue'),
    name: '404',
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

function fetchRole():any {
  API.post(`${config.api.url}/auth/role`)
  .then(response => {
    if(response) {
      store.commit('updateRole', response.data.role)
      localStorage.setItem('role', response.data.role)
      return response.data.role
    }
  })
}
const role = fetchRole()

router.beforeEach((to, from, next) => {
  const accessToken = localStorage.getItem('access_token')
  const role = localStorage.getItem('role')
  
  if(!accessToken) {
    if(to.name === 'login') {
      return next()
    } else {
      return next({
        name: 'login'
      })
    }
  }

  // if(to.name === 'table.index' && accessToken && role == 'admin') {
  //   return next({
  //     name: 'incpector.schedule'
  //   })
  // }

  if(to.name === 'login' && accessToken) {
    if(role == 'admin') {
      return next({
        name: 'incpector.schedule'
      })
    } else {
      return next({
        name: 'table.index'
      })
    }
  }

  else if(to.name === 'user.cabet.all' && role == 'cabet') {
    return next({
      name: 'table.index'
    })
  }

  else if(to.name === 'user.create.cabet' && role == 'cabet') {
    return next({
      name: 'table.index'
    })
  }

  else if(to.name === 'incpector.schedule' && role == 'cabet') {
    return next({
      name: 'table.index'
    })
  }

  else if(to.name === 'incpector.schedule.name' && role == 'cabet') {
    return next({
      name: 'table.index'
    })
  }

  next(true)
})

export default router
