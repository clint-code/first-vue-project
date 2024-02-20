<script setup>

import { ref } from 'vue'

const count = ref(0);
const emit = defineEmits(['onClick', 'count'])

function increaseCount(){
    count.value +=1
    emit('count')
    console.log("New count:", count.value)
}

//const emit = defineEmits(['inFocus', 'submit'])

// function buttonClick(){
//     emit('submit')
//     console.log("Event is emitted!")
// }

//emit('increaseCount')

// const emit = defineEmits(['response'])

// emit('response', 'You have clicked me!!')

</script>

<template>

    <!-- <button @click="buttonClick">
        Submit  
    </button> -->

    <button @click="increaseCount">
        Increase by 1  
    </button>

</template>
