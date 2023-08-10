<template>
    <div class="login-container">
        <h2>Bienvenido a la página de inicio para usuarios no registrados</h2>
        <form @submit.prevent="login" class="login-form">
            <label for="username">Usuario:</label>
            <input type="text" v-model="username" required>
            <label for="password">Contraseña:</label>
            <input type="password" v-model="password" required>
            <button type="submit">Iniciar sesión</button>
        </form>
    </div>
</template>

<script setup>
const users = [
    { username: 'usuario1', password: 'clave1' },
    { username: 'usuario2', password: 'clave2' }
];

let username = '';
let password = '';

function login() {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        console.log('Inicio de sesión exitoso:', user.username);
        // Aquí podrías redirigir al usuario a la página deseada después del inicio de sesión exitoso
    } else {
        console.log('Credenciales incorrectas');
    }
}
</script>

<style scoped>
.login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #f0f0f0;
}

.login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 300px;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

label {
    margin-top: 10px;
    font-weight: bold;
}

input {
    padding: 8px;
    margin: 5px 0;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    padding: 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 100%;
}

button:hover {
    background-color: #0056b3;
}
</style>
