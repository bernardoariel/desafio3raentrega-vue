import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegistroView from '../views/RegistroView.vue'
import ListadoProductosView from '@/views/ListadoProductosView.vue'
import ProductoNuevoView from '@/views/ProductoNuevoView'
import CarritoView from '@/views/CarritoView'

import store from '@/store'
import ProductoView from '@/views/ProductoView'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect:'productos'
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/registro',
    name: 'registro',
    component: RegistroView
  },
  {
    path: '/productos',
    name: 'productos',
    component: ListadoProductosView,
    beforeEnter: (to, from, next) => {
      if (store.state.usuarioActivo) {
        next()
      } else {
        next('/login')
      }
    }

  },
  {
    path: '/nuevoproducto',
    name: 'nuevoproducto',
    component: ProductoNuevoView,
    beforeEnter: (to, from, next) => {
      if (store.state.usuarioActivo) {
        next()
      } else {
        next('/login')
      }
    }

  },
  {
    path: '/carrito',
    name: 'carrito',
    component: CarritoView,
    beforeEnter: (to, from, next) => {
      if (store.state.usuarioActivo) {
        next()
      } else {
        next('/login')
      }
    }
  },
  {
    path: '/curso/:id',
    name: 'curso',
    component: ProductoView,
    beforeEnter: (to, from, next) => {
      if (store.state.usuarioActivo) {
        next()
      } else {
        next('/login')
      }
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
