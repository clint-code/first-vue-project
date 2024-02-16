<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import { ref } from 'vue';

const message = ref('erised straeh ruoy tub ecaf ruoy ton wohs I');

const titleClass = ref('title');

//const count = ref(0);
</script>

<template>

  <header>

    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      
      <HelloWorld />
      <h1>{{ message.split('').reverse().join('') }}</h1>
      <h1 :class="titleClass">Make me red</h1>      

    </div>

  </header>

  <main>
    <TheWelcome />
  </main>
 

</template>



<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.title {
  color:red;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
