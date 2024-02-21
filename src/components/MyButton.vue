<script setup>

import { ref } from 'vue'

const count = ref(0);
const emit = defineEmits(['response'])

function increaseCount(){
    count.value +=1
    emit('response', `${count.value}`)
}

function decreaseCount(){
    count.value -=1
    emit('response', `${count.value}`)
}

</script>

<template>

    <button @click="increaseCount">
        Increase by 1  
    </button>

    <button @click="decreaseCount">
        Decrease by 1  
    </button>

</template>
