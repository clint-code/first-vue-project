<script setup>

/**
 * emiting events from child component to parent
 * declare emitted event
 */

 const emit = defineEmits(['response'])

/**
 * emit with argument. The first argument is the event name
 * Any additional arguments are passed on to the event listener
 */

emit('response', 'Hello message from child to parent using emit')

</script>

<template>
    <h2>Another Child component</h2>
</template>