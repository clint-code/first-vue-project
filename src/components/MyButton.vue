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

    <button class="p-button" @click="increaseCount">
        Increase by 1  
    </button>

    <button class="p-button" @click="decreaseCount">
        Decrease by 1  
    </button>

</template>
