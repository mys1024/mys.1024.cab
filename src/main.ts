// register vue composition api globally
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.less'
import 'uno.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
