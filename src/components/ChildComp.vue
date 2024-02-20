<script setup>

/**
 * receiving a message from parent component to child component via props
 * defineProps() is a compile-time macro and doesnn't need to be imported
 */

const props = defineProps({
    msg: String
})


</script>

<template>
    <p>{{ msg || 'No props passed yet' }}</p>
</template>