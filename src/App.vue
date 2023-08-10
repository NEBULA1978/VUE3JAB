<template>
  <div>
    <h1>Padre:</h1>
    <router-view />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style scoped></style>
