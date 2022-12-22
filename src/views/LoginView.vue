<template>

 <div>

   <login-component/>

 </div>
 
</template>

<script>
import LoginComponent from '@/components/LoginComponent.vue';

export default {
  components: { LoginComponent },
    name: 'LoginView',

    data() {
        return {
          nombreUsuario:''
        };
    },
    mounted() {
      
    },
    methods:{
     
    }
    
};
</script>