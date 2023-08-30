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
      <router-link to="/ArteCuadros" class="nav-button">
        <button>ArteCuadros</button>
      </router-link>
      <router-link to="/Contacto" class="nav-button">
        <button>Contacto</button>
      </router-link>
    </div>
    <!-- Agrega los componentes aquí -->
    <div>
      <h1>Padre:</h1>
      <HijoVue :nombre="nombre" :edad="edad" @modificar="cambiarValor" />
      <HijoVue2 />
    </div>
    <!-- <h2>Hola Mundo VUE3</h2> -->
    <ArteCuadros/>
    <Contacto/>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { provide, ref } from "vue";
import HijoVue from "./components/Hijo.vue";
import HijoVue2 from "./components/Hijo2.vue";
import ArteCuadros from "./components/ArteCuadros.vue";
import Contacto from "./components/Contacto.vue";

const cambiarValor = (valor1, valor2) => {
  nombre.value = valor1;
  edad.value = valor2;
}
const nombre = ref('Jab');
const edad = ref(18);
const canal = ref("soyjab")
provide('miCanal', canal)

const router = useRouter();
</script>

<style scoped>
/* h2{
  color:red;
} */
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
