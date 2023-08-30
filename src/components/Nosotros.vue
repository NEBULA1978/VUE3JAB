<template>
    <div class="page-container">
        <h1>Nosotros Somos</h1>
        <!-- Contenido de la página Quiénes Somos -->

        <router-link to="/" class="back-button">
            <button>Volver a la Página de Inicio</button>
        </router-link>
    </div>
    <!-- No podemos poner dentro de <h2 class="" id="" style="" -->
        <!-- Utilizamos las directivas -->
    <h2 v-bind:style="miColor">
        Hola Mundo VUE3 con {{ miNombre }} y tengo {{ miEdad+3 }}
    </h2>

</template>

<script setup>
const miNombre="Jab"
const miEdad=18
const miColor="color:green;font-size:3em;"
</script>

<style scoped>
/* h2{
  color:red;
} */
</style>
