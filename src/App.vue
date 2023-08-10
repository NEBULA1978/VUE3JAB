<template>
  <div class="app-container">
    <router-view />
    <div class="buttons">
      <router-link to="/nosotros" class="nav-button">
        <button>Nosotros</button>
      </router-link>
      <router-link to="/quienes-somos" class="nav-button">
        <button>Quiénes Somos</button>
      </router-link>
      <router-link to="/contactame" class="nav-button">
        <button>Contactamé</button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f0f0;
}

.buttons {
  margin-top: 20px;
  display: flex;
  gap: 10px;
  justify-content: center;
}

.nav-button {
  text-decoration: none;
  display: inline-block;
  background-color: #007BFF;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.nav-button:hover {
  background-color: #0056b3;
}
</style>
