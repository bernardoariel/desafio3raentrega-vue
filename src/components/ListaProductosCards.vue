<template>

     <div class="card center mb-3">
        
        <h2 class=" mt-2 ">Productos en stock</h2>

        <div class="card-body d-flex justify-content-around">

            <producto-component v-for="(curso,index) of productos" :key="index" :datos="curso" @producto-eliminado="actualizarTabla" :productos-comprados="productosComprados"/>

        </div>

    </div>
    
</template>

<script>
import axios from "axios";
import ProductoComponent from './ProductoComponent.vue';

export default {
    name: 'ListaProductosCards',
    components:{
        ProductoComponent
    },
    data(){
        return{
            baseURL:'http://localhost:3000/productos',
            productos:[],
            productosComprados: []
        }
    },
    mounted() {
        this.listarProductos()
    },
    methods:{
        actualizarTabla() {
            // actualiza la tabla aquí, por ejemplo, volviendo a cargar los productos desde el servidor
            this.listarProductos()
        },
        async listarProductos(){
            const respuesta = (await axios.get(this.baseURL)).data
            this.productos = { 
                ...respuesta,
                // imagen: require(respuesta.imagen),
            }
            console.log(this.productos)
            
        },
    },
    agregarProducto(producto) {
      this.productosComprados.push(producto);
    }
};
</script>

<style lang="scss" scoped>

</style>
