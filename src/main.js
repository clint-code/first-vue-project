import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'

import './assets/main.css'
//import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
//import Checkbox from 'primevue/checkbox'

const app = createApp(App)


app.use(PrimeVue)

//app.component('Button', Button)
app.component('InputText', InputText)
//app.component('Checkbox', Checkbox)

app.mount('#app')