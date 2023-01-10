<template>
    
    <div class="card center mt-5 mb-3" style="width: 18rem;">
 
        <div class="card-body">

            <div class="row mb-3">
                
                <h5 class="card-title">Ingresar</h5>
                <h6><small class="text-danger">{{ mensaje }}</small></h6>

            </div>
            
            <div class="row">

                <div class="mb-1">

                <label for="email" class="form-label float-start">Tu Email</label>

                <input type="text" v-model="email"
                    class="form-control form-control-sm" 
                    name="email" aria-describedby="helpId" 
                    placeholder="Ingrese su Email">
                
                </div>

                <div class="mb-1">

                <label for="password" class="form-label float-start">Tu Clave</label>

                <input type="text" v-model="password"
                    class="form-control form-control-sm" 
                    name="password" aria-describedby="helpId" placeholder="Ingrese su clave">
                
                </div>
                
            </div>

            <div class="row">

                <div class="mt-3 mb-2">

                    <a href="#" class="btn btn-dark float-end" @click="loguearse()">Ingresar</a>

                </div>

            </div>

            <a @click="irARegistro()" class="btn btn-link float-end">No estas registrado?</a>

           
        </div>

    </div>

</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";
export default {
    name: 'LoginComponent',

    data() {
        return {
            email:'',
            password:'',
            baseURL:'http://localhost:3000/usuarios',
            mensaje:''
        };
        
    },
    methods:{
        ...mapMutations(['modificarUsuarioActivo','vaciarProductosComprados']),
        async loguearse(){
            // falta validar
            const usuarios = (await axios.get(this.baseURL)).data
            console.log(usuarios)

            const usuarioLogin = usuarios.find(
                (usuario)=>(
                    usuario.email == this.email && 
                    usuario.pass == this.password)
                )
            console.log(usuarioLogin)
            // crear un token 
            this.mensaje = (usuarioLogin) ? 'logueado' : 'no logueado'

            if (usuarioLogin) {
                localStorage.setItem('usuario', usuarioLogin.usuario)
                localStorage.setItem('rol', usuarioLogin.rol)
                localStorage.setItem('id', usuarioLogin.id)
                this.modificarUsuarioActivo(usuarioLogin.usuario);
                this.vaciarProductosComprados();
                this.$router.push('/')
            }else{
                this.mensaje= 'existe algun inconveniente con el usuario o la contraseña'
            }
            
        },
        irARegistro(){
            this.$router.push('/registro')
        }
    }

};
</script>
