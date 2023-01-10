import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarioActivo:null,
    productos:[],
    productosComprados:[]
  },
  getters: {
    usuarioMayusculas(state){
      return state.usuarioActivo.toUpperCase()
    },
    productosComprados(state) {
      return state.productosComprados
    }
  },
  mutations: {
    modificarUsuarioActivo(state,usuario){
      return state.usuarioActivo = usuario
    },
    cargarProductosState(state,productos){
      return state.productos = productos
    },
    productosComprasState(state, nuevoProducto) {
      state.productosComprados.push(nuevoProducto)
    },
    eliminarProducto(state, id) {
      state.productosComprados = state.productosComprados.filter(producto => producto.id !== id)
    },
    vaciarProductosComprados(state) {
      state.productosComprados = []
    }
  },
  actions: {

  },
  modules: {

  }

})
