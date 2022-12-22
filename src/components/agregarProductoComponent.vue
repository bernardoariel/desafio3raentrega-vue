<template>
    <div>
      <h2>Agregar Producto</h2>
      <form @submit.prevent="agregarProducto" class="form-group">
        <label for="titulo">Título del producto:</label><br>
        <input type="text" v-model="titulo" id="titulo" class="form-control"><br>
        <label for="imagen">Imagen:</label><br>
        <input type="text" v-model="imagen" id="imagen" class="form-control"><br>
        <label for="lenguaje">Lenguaje:</label><br>
        <input type="text" v-model="lenguaje" id="lenguaje" class="form-control"><br>
        <label for="detalle">Detalle:</label><br>
        <input type="text" v-model="detalle" id="detalle" class="form-control"><br>
        <label for="precio">Precio:</label><br>
        <input type="text" v-model="precio" id="precio" class="form-control"><br>
        <button type="submit" class="btn btn-primary">Agregar</button>
      </form> 
    </div>
  </template>
  <script>
  import axios from "axios";
  
  export default {
    name: "AgregarProducto",
    data() {
      return {
        titulo: "",
        imagen: "",
        lenguaje: "",
        detalle: "",
        precio: 0
      };
    },
    methods: {
      async agregarProducto() {
        // Crear el producto con la información del formulario
        const producto = {
          titulo: this.titulo,
          imagen: this.imagen,
          lenguaje: this.lenguaje,
          detalle: this.detalle,
          precio: this.precio
        };
  
        // Enviar el producto a la API utilizando axios
        try {
          const response = await axios.post("http://localhost:3000/productos", producto);
          if (response.status === 201) {
            // Si se ha creado el producto correctamente, mostrar un mensaje al usuario y limpiar el formulario
            this.mensaje = "Producto agregado con éxito";
            this.titulo = "";
            this.imagen = "";
            this.lenguaje = "";
            this.detalle = "";
            this.precio = 0;
            this.$router.push({ name: 'productos' })
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
  };
  </script>
  