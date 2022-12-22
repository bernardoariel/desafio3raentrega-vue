<template>
  <div class="home">
    <nav-bar-component :usuario="usuario" :rol="usuario"/>
    <carrito-compras/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBarComponent from '@/components/NavBarComponent.vue';
import CarritoCompras from '@/components/CarritoCompras.vue'

export default {
  name: 'CarritoView',
  components: {
    CarritoCompras,
    NavBarComponent
    
  }, data() {
        return {
            usuario:'',
            rol:''
        };
      },
  mounted() {

  this.usuario = localStorage.getItem('usuario')
  this.rol = localStorage.getItem('rol')

  if (this.usuario && this.rol) {

    if (this.$route.path !== '/carrito') {

        this.$router.push({ name: 'carrito' })
    }
  
  } else {

    this.$router.push({ name: 'login' })

  }
},

}
</script>
