<template>
    <div class="home">
        <h1>Bienvenido</h1>
        <form @submit.prevent="login">
            <label for="username">Usuario:</label>
            <input type="text" v-model="username" required>
            <label for="password">Contraseña:</label>
            <input type="password" v-model="password" required>
            <button type="submit">Iniciar sesión</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        login() {
            // Aquí deberías realizar la lógica de autenticación, como enviar datos al backend
            console.log('Iniciando sesión con usuario:', this.username);
        }
    }
};
</script>

<style scoped>
.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

input {
    margin: 5px 0;
    padding: 5px;
}

button {
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}</style>
