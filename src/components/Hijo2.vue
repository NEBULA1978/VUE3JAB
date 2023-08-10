<template>
    <div>
        <h1>Hijo2:</h1>
        <h2> {{ canal }}</h2>
        <button @click="modificar">Cambiar</button>
        
    </div>
</template>

<script setup>
import { inject } from 'vue';

const modificar=()=>{
    canal.value="html6"
}

const canal=inject('miCanal')
</script>

<style scoped></style>
