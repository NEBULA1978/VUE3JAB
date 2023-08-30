<template>
    <div>
        <h2>Contactanos sin compromiso</h2>
        <!-- Contenido de la página Quiénes Somos -->

        <router-link to="/">
            <button>Volver a la Página de Inicio</button>
        </router-link>
        <div class="counter-container">
            <button @click="decrement">Decrementar</button>
            <span>{{ contador }}</span>
            <button @click="increment">Incrementar</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const contador = ref(0);

const increment = () => {
    contador.value++;
};

const decrement = () => {
    contador.value--;
};
</script>

<style scoped>
.counter-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}

span {
    margin: 0 20px;
    font-size: 24px;
}
</style>
