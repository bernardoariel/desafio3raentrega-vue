<template>

     <div class="card center mb-3" style="width: 18rem;">
 
        <div class="card-body">

            <div class="row mb-3">
                
                <h5 class="card-title">Informacion de Producto</h5>
                <h5 class="card-title">{{datos.titulo}}</h5>

            </div>
            
            <div class="row">

                <img :src="datos.imagen" alt="">
                <!-- <pre>{{ datos.imagen }}</pre> -->
            </div>
            <div class="row mt-3">
                <ul style="list-style:none;">
                    <li><strong>Curso: </strong>{{datos.lenguaje}}</li>
                    <li><strong>Detalle: </strong>{{datos.detalle}}</li>
                    <li><strong>Precio: </strong>{{datos.precio}}</li>
                </ul>
            </div>
            <div class="row">

                <div class="mt-3 mb-2">

                    <a v-if="rol=='admin'" href="#" class="btn btn-danger float-start" @click="eliminar(datos.id)">Eliminar</a>
                    <a href="#" class="btn btn-dark float-end" @click="comprar()">Comprar</a>

                </div>
               

            </div>
            <!-- <pre>{{ productosComprados }}</pre> -->
        </div>
    </div>
    
</template>

<script>
import axios from "axios";
export default {
    name: 'LoginComponent',
    props:{ 
        //Objeto que tiene varias propiedades con clases de bootstrap
        datos:{
            type:Object,
            required:true
        },
    },
    data(){
        return{
            rol:'',
            baseURL:'http://localhost:3000/productos/',
            productosComprados: [],
            usuario:null
        }
    },
    mounted() {
        this.rol = localStorage.getItem('rol')
  this.usuario = localStorage.getItem('id')
  this.productosComprados.push(this.usuario)

  if (!this.rol) {
    this.$router.push({ name: 'login' })
  }
    },
    methods:{
        async eliminar(id) {
    console.log(`${this.baseURL}${id}`)
    const response = await axios.delete(`${this.baseURL}${id}`)

    this.$emit('producto-eliminado')
  },
   comprar() {
     // Obtener el valor del local storage
  let productosComprados = JSON.parse(localStorage.getItem('productosComprados')) || [];

// Agregar el producto al array y el id del usuario que está realizando la compra
productosComprados.push({
  usuario: localStorage.getItem('id'),
  producto: this.datos
});

// Guardar el array modificado en el local storage
localStorage.setItem('productosComprados', JSON.stringify(productosComprados));
  }

    }
   
};
</script>

<style lang="scss" scoped>

</style>