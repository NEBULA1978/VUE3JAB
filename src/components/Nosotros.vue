<template>
    <div class="page-container">
        <h1>Nosotros Somos</h1>
        <!-- Contenido de la página Quiénes Somos -->

        <router-link to="/" class="back-button">
            <button>Volver a la Página de Inicio</button>
        </router-link>
    </div>
    <!-- No podemos poner dentro de <h2 class="" id="" style="" -->
        <!-- Utilizamos las directivas por estilo-->
        <!-- Atajo :style -->
        <h2 :style="miColor">
        <!-- <h2 v-bind:style="miColor"> -->
            Hola Mundo VUE3 con {{ nombre }} y tengo {{ miEdad+3 }}
        </h2>
        
        <!-- Atajo @click= -->
        <button @click="saludar(miNombre)">Aceptar</button>
        <!-- <button v-on:click="saludar(miNombre)">Aceptar</button> -->
        <!-- Utilizamos las directivas por clase-->
        <h3 v-bind:class="selector">
            Hola Mundo VUE3 con {{ miNombre }} y tengo {{ miEdad+3 }}
        </h3>
        
    </template>

<script setup>
const miNombre="Jab"
const miEdad=18

// <!-- Utilizamos las directivas por style-->
const miColor="color:green;font-size:3em;"

// <!-- Utilizamos las directivas por clase-->
const selector="azul"

// Evento boton
const saludar=(nombre)=>{
    console.log("Hola")
    console.log(`Hola ${nombre}`)
}
</script>

<style scoped>
/* h2{
  color:red;
} */
.azul{
    color:blue;
}
</style>
