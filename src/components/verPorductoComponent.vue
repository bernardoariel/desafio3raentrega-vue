<template>
    <div class="curso-nuevo">
      <h1>Curso: {{ producto.titulo }}| <button class="btn btn-primary" @click="volver()">Volver</button></h1>
      <p>Detalle: {{ producto.detalle }}</p>
      <p>Precio: {{ producto.precio }}</p>
      <p>Lenguaje: {{ producto.lenguaje }}</p>
      <img :src="producto.imagen" alt="Imagen del curso">
      
    </div>
</template>
  
  <script>
  import { mapState } from 'vuex'
  
  export default {
    methods:{
        volver(){
            this.$router.push('/productos')
        }
    },
    computed: {
    ...mapState(['productos']),
        producto() {
        return this.productos[this.$route.params.id]
        },
    },

  }
  </script>
  