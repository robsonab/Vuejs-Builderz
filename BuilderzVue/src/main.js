import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

app.use(router)

app.mount('#app')
