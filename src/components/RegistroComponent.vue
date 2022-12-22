<template>
    <div class="card center mt-5 mb-3" style="width: 18rem;">
      <div class="card-body">
        <div class="row mb-3">
          <h5 class="card-title">Registrarse</h5>
          <h6><small class="text-danger">{{ mensaje }}</small></h6>
        </div>
        <div class="row">
          <div class="mb-1">
            <label for="usuario" class="form-label float-start">Tu Usuario</label>
            <input type="text" v-model="usuario" class="form-control form-control-sm" name="usuario" aria-describedby="helpId" placeholder="Ingrese su Usuario">
          </div>
          
          <div class="mb-1">
            <label for="email" class="form-label float-start">Tu Email</label>
            <input type="text" v-model="email" class="form-control form-control-sm" name="email" aria-describedby="helpId" placeholder="Ingrese su Email">
          </div>
          <div class="mb-1">
            <label for="pass" class="form-label float-start">Tu Pass</label>
            <input type="password" v-model="pass" class="form-control form-control-sm" name="pass" aria-describedby="helpId" placeholder="Ingrese su pass">
          </div>
          <div class="mb-1">
            <label for="repetirPass" class="form-label float-start">Repetir Pass</label>
            <input type="password" v-model="repetirPass" class="form-control form-control-sm" name="repetirPass" aria-describedby="helpId" placeholder="Repita su pass">
          </div>
        </div>
        <div class="row">
          <a @click="irALogin()" class="btn btn-link float-start">Ir a Login</a>
          <div class="mt-3 mb-2">
            <a href="#" class="btn btn-dark float-end" @click="registrarse()">Registrarse</a>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import axios from "axios";
  
  export default {
    name: "RegistroComponent",
    data() {
      return {
        usuario: "",
        email: "",
        pass: "",
        repetirPass: "",
        mensaje: ""
      };
    },
    methods: {
      irALogin() {
        this.$router.push({ name: 'login' })
      },
      async registrarse() {
        // Validar que los campos no estén vacíos
        if (!this.usuario || !this.email || !this.pass || !this.repetirPass) {
          this.mensaje = "Por favor completa todos los campos";
          return;
        }
  
        // Validar que la contraseña y la contraseña repetida coincidan
        if (this.pass !== this.repetirPass) {
          this.mensaje = "Las contraseñas no coinciden";
          return;
        }
  
        // Crear el usuario
        const usuario = {
          usuario: this.usuario,
          email: this.email,
          pass: this.pass,
          rol: 'cliente'
        };
  
        // Enviar el usuario a la API para que se cree
        const response = await axios.post("http://localhost:3000/usuarios", usuario);

        if (response.status === 201) {

          this.mensaje = "Usuario creado con éxito";
          this.$router.push({ name: 'productos' })

        } else {

          this.mensaje = "Error al crear usuario";

        }
        
      }
    }
  };
  </script>