<template>
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
    <div class="container">
      <router-link class="navbar-brand mx-auto" to="/">Mis Cursos Online</router-link>
      <div class="navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/productos">Productos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/nuevoproducto">Nuevo Curso</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/carrito">Carrito</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link text-danger" to="/profile"><b>Nombre de Usuario:</b><i>{{usuario}}</i></router-link>
          </li>
          <li class="nav-item">
            <button class="btn btn-light" @click="logout">Cerrar sesión</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </template>
<script>
export default {
    name: 'NavBarComponent',
    props:{ 
       usuario:String,
       rol:String
    },
    mounted() {
      // console.log(this.usuario);
    },
    methods: {
      logout() {
        // elimina los ítems del almacenamiento local
        localStorage.removeItem('usuario')
        localStorage.removeItem('rol')
        localStorage.removeItem('id')
        localStorage.removeItem('productosComprados')
        // redirige a la página de inicio de sesión
        this.$router.push({ name: 'login' })
      }
    }
}
</script>
<style>
.navbar {
  background-color: #006699 !important;
}
</style>