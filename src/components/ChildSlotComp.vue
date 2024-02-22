<template>
    <!--
        Content inside the <slot> outlet 
        will be treated as "fallback" content: 
        it will be displayed if the parent 
        did not pass down any slot content:
    -->
    <slot>Fallback content</slot>
</template>