<template>
    <div>
      <nav-bar-component :usuario="usuario" :rol="usuario"/>
      
    <agregar-producto />
    </div>
   </template>
   
   <script>
   import AgregarProducto from '@/components/agregarProductoComponent.vue';
   import NavBarComponent from '@/components/NavBarComponent.vue';

   
   export default {
     components: { 
      AgregarProducto,
      NavBarComponent 
    },
       name: 'ProductoView',
   
     
         data() {
           return {
            usuario:'',
            rol:''
           };
       },
       mounted() {

this.usuario = localStorage.getItem('usuario')
this.rol = localStorage.getItem('rol')

if (this.usuario && this.rol) {

  if (this.$route.path !== '/nuevoproducto') {

      this.$router.push({ name: 'nuevoproducto' })
  }

} else {

  this.$router.push({ name: 'login' })

}
},
   
       
   };
   </script>