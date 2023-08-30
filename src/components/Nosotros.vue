<template>
    <div class="counter-container">
        <button @click="decrement">Decrementar</button>
        <span :class="getClass">{{ contador }}</span>
        <button @click="increment">Incrementar</button>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const contador = ref(0);

const increment = () => {
    contador.value++;
};

const decrement = () => {
    contador.value--;
};

const getClass = computed(() => {
    if (contador.value === 0) {
        return 'color-green';
    } else if (contador.value > 6) {
        return 'color-blue';
    } else {
        return 'color-red';
    }
});
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

.color-red {
    color: red;
}

.color-green {
    color: green;
}

.color-blue {
    color: blue;
}
</style>
