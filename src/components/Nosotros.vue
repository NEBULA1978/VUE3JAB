<template>
    <div class="page-container">
        <h2>Quiénes Somos</h2>
        <!-- Contenido de la página Quiénes Somos -->

        <router-link to="/" class="back-button">
            <button>Volver a la Página de Inicio</button>
        </router-link>
    </div>
</template>

<script setup>
</script>

<style scoped>
.page-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.back-button {
    margin-top: 20px;
}
</style>
