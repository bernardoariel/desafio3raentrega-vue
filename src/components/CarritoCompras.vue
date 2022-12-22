<template>
    <div>
      <h1>Mis productos</h1>
      <ul>
        <li v-for="(producto, index) in productos" :key="producto.producto.id" class="mb-3">
          {{ producto.producto.titulo }} - {{ producto.producto.precio }}
          <button class="btn btn-danger" v-on:click="eliminarProducto(index)">Eliminar</button>
        </li>
      </ul>
      <!-- <p>Total: {{ obtenerTotal }}</p> -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductosComponent',
    data() {
      return {
        productos: []
      }
    },
    methods: {
      eliminarProducto(index) {
        // Eliminar el elemento del array
        this.productos.splice(index, 1);
        // Actualizar el almacenamiento local
        localStorage.setItem('productosComprados', JSON.stringify(this.productos));
      },
      
    },
    mounted() {
      // Obtener los productos del almacenamiento local
      const productos = JSON.parse(localStorage.getItem('productosComprados'));
      // Asignar los productos a la propiedad del componente
      this.productos = productos;
    },
    computed:{
        obtenerTotal() {
    let total = 0;
    this.productos.forEach(producto => {
      total += producto.producto.precio;
    });
    return total;
  }
    }
    
  }
  </script>