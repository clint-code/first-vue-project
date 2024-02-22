<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import ChildComp from './components/ChildComp.vue';
import AnotherChildComp from './components/AnotherChildComp.vue';
import MyButton from './components/MyButton.vue'
import ChildSlotComp from './components/ChildSlotComp.vue';

import { ref } from 'vue'

const message = ref('erised straeh ruoy tub ecaf ruoy ton wohs I');

const titleClass = ref('title');

const messageClass = ref('messageText')

const parentMsg  = ref('Hello message from parent to child using props')

const childMsg = ref('No child message yet')

const clickCountMsg = ref('')

const theMessage = ref('from parent')

</script>

<template>

  <header>

    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div>
      
      <HelloWorld />

      <h1>{{ message.split('').reverse().join('') }}</h1>
      
      <ChildComp :msg="parentMsg" :class="messageClass" />

      <AnotherChildComp @response="(msg) => childMsg = msg" />
      <p :class="messageClass">{{ childMsg }}</p>

      <ChildSlotComp>
        Message: {{ theMessage }}
      </ChildSlotComp>

      <h1 :class="titleClass">Make me red</h1>      

      <!--Child button component emitting the count to the parent -->
      <MyButton @response="(count) => clickCountMsg = count" />
      <p :class="messageClass">{{ clickCountMsg }}</p>

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

.messageText {
  color: #41B883;
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
