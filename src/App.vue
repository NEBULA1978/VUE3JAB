<template>
  <div>
    <!-- <h1>Padre:</h1> -->
    <router-view />

    <div class="buttons">
      <router-link to="/nosotros">
        <button>Nosotros</button>
      </router-link>
      <router-link to="/quienes-somos">
        <button>Quiénes Somos</button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style scoped>
.buttons {
  margin-top: 20px;
}
</style>
