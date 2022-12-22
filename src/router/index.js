import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegistroView from '../views/RegistroView.vue'
import ListadoProductosView from '@/views/ListadoProductosView.vue'
import ProductoNuevoView from '@/views/ProductoNuevoView'
import CarritoView from '@/views/CarritoView'

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
    component: ListadoProductosView

  },
  {
    path: '/nuevoproducto',
    name: 'nuevoproducto',
    component: ProductoNuevoView

  },
  {
    path: '/carrito',
    name: 'carrito',
    component: CarritoView

  }
]

const router = new VueRouter({
  routes
})

export default router
