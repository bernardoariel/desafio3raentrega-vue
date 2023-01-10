
<template>
  <div>
    <h1>Mis productos</h1>
    <ul>
      <li v-for="(producto, index) in productosComprados" :key="producto.id" class="mb-3">
        {{ producto.titulo }} - {{ producto.precio }}
        <button class="btn btn-danger"  v-on:click="eliminarProducto(producto.id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>
  
  <script>
import store from '@/store'
import { mapGetters } from 'vuex'

  export default {
    name: 'ProductosComponent',
   
    methods: {
     
      eliminarProducto(id) {
        store.commit('eliminarProducto', id)
      }

    },
    computed: {
      ...mapGetters(['productosComprados']),
    },
    created(){
     
     
    },
   
    
    
  }
  </script>