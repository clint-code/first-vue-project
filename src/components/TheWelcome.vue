<script setup>

import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import { ref, computed, onMounted, watch } from 'vue'
//import axios from 'axios'

const text = ref('');

const count = ref(0);

function increment(){
  count.value++
}

const awesome = ref(true);

function toggle(){

  awesome.value = !awesome.value;

}

let id = 0;

const newBook = ref('')
const hideCompleted = ref(false);
const books = ref ([
  { 
    id: id,
    text: 'The Hobbit',
    done: true
  },
  { 
    id: id++,
    text: 'The Lord of The Rings: The Fellowship of the Ring',
    done: true
  },
  { 
    id: id++,
    text: 'The Lord of The Rings: The Two Towers',
    done: false
  },
  { 
    id: id++,
    text: 'The Silmarilion',
    done: false
  }
])

function addNewBook(){
  if(newBook.value !== ''){
    books.value.push({ id: id, text: newBook.value, done : false });
    newBook.value = ''
    console.log("New added book:", books)
  }

}

function removeBook(book){
  books.value = books.value.filter((b) => b !== book)
  console.log("Updated array of books:", books.value);
  console.log("Removed book:", book.text);
}

const readBooks = computed(() => {
  return hideCompleted.value ? books.value.filter((b) => !b.done) : books.value
})

const pElementRef = ref(null);

onMounted(() => {
  pElementRef.value.textContent = "This is awesome!"
})

const todoId = ref(1)
const todoData = ref(null)

async function fetchData() {

  todoData.value = null

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )

  todoData.value = await res.json()

}

fetchData()

/*
  watch() has two arguments: the source and the callback
  that's called when the source changes
*/

watch(todoId, fetchData) 

/**
 * using axios to consume APIs
 */

</script>

<template>

<WelcomeItem>

  <template #icon>
    <DocumentationIcon />
  </template>

  <template #heading>Using watchers to get the Todo list, on clicking the button:</template>

  <p>Todo id: {{ todoId }}</p>

  <button @click="todoId++" :disabled="!todoData">Fetch next todo item</button>

  <div v-if="!todoData">
    <p>Loading...</p>
  </div>

  <pre v-else> {{ todoData }}</pre>
<!-- 
  <p>The Todo list item is: <u>{{ todoData.title }}</u></p> -->
      
</WelcomeItem>

  <WelcomeItem>

    <template #icon>
      <DocumentationIcon />
    </template>

    <template #heading>Documentation</template>

    Vue’s
    <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
    provides you with all information you need to get started.

    <!--  
        v-model directive automatically syncs the input value
        with the bound state with no need
        to use an event handler
    -->
    <input v-model="text" @input="onInput" type="text" placeholder="Type here">
    <!-- <input :value="text" @input="onInput" placeholder="Type here"> -->

    <p class="messageText">{{ text }}</p>

  </WelcomeItem>

  <WelcomeItem>

    <template #icon>
      <ToolingIcon />
    </template>

    <template #heading>Tooling</template>

    This project is served and bundled with
    <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">Vite</a>. The
    recommended IDE setup is
    <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a> +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener">Volar</a>. If
    you need to test your components and web pages, check out
    <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a> and
    <a href="https://on.cypress.io/component" target="_blank" rel="noopener"
      >Cypress Component Testing</a>.

    <br />

    More instructions are available in <code>README.md</code>.
    
    <button @click="increment">Count is: {{ count }}</button>

  </WelcomeItem>

  <WelcomeItem>

    <template #icon>
      <EcosystemIcon />
    </template>

    <template #heading>Ecosystem</template>

    Get official tools and libraries for your project:
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. If
    you need more resources, we suggest paying
    <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
    a visit.

    <!-- <div id="app">
      <h3>Bitcoin Price Index</h3>
      
      <section v-if="errored">
        <p>We're sorry, we're not able to retrieve this information at the moment</p>
      </section>

    </div> -->

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

    Got stuck? Ask your question on
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>, our official
    Discord server, or
    <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener"
      >StackOverflow</a
    >. You should also subscribe to
    <a href="https://news.vuejs.org" target="_blank" rel="noopener">our mailing list</a> and follow
    the official
    <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
    twitter account for latest news in the Vue world.

    <button @click="toggle">Toggle state</button>
    <h1 v-if="awesome">Vue is magic!</h1>
    <h1 v-else>Oh no 😢</h1>


  </WelcomeItem>

  <WelcomeItem>

    <template #icon>
      <SupportIcon />
    </template>

    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by <a href1 ="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.

    <form @submit.prevent="addNewBook">
      <input v-model="newBook">
      <button>Add Book</button>
    </form>

    <ol>
      <li v-for = "book in readBooks" :key="book.id">
        <input type="checkbox" v-model="book.done">
        <span :class="{done: book.done }">{{ book.text }}</span>
        <button @click="removeBook(book)">X</button>
      </li>
    </ol>

    <button @click="hideCompleted = !hideCompleted">
      {{ hideCompleted ? 'Show all' : 'Hide completed' }}
    </button>

  </WelcomeItem>  

  <WelcomeItem>

    <template #icon>
      <DocumentationIcon />
    </template>

    <template #heading>Documentation</template>

    Vue’s
    <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
    provides you with all information you need to get started.

    <h2>Template Ref</h2>

    <p ref="pElementRef"></p>

</WelcomeItem>

</template>

<style>

  .done {
    text-decoration: line-through;
  }

  .messageText {
    color: #41B883;
  }

</style>
