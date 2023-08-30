<template>
    <div class="page-container">
        <h1>Nosotros Somos</h1>
        <!-- Contenido de la página Quiénes Somos -->

        <router-link to="/" class="back-button">
            <button>Volver a la Página de Inicio</button>
        </router-link>
    </div>

    <h2>Hola Mundo VUE3 con {{ miNombre }}</h2>

</template>

<script setup>
const miNombre="Jab"
</script>

<style scoped>
h2{
  color:red;
}
</style>
