<template>

    <div>
      <nav-bar-component :usuario="usuario" :rol="usuario"/>
      <lista-productos-cards />

    </div>

</template>
   
<script>
   
import ListaProductosCards from '@/components/ListaProductosCards.vue';
import NavBarComponent from '@/components/NavBarComponent.vue';
   

export default {
    components: { ListaProductosCards, NavBarComponent },
    name: 'LoginView',

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

            if (this.$route.path !== '/productos') {

                this.$router.push({ name: 'productos' })
            }
          
        } else {

            this.$router.push({ name: 'login' })

        }
    },


    
};
</script>