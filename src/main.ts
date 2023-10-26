import './assets/main.css'
import 'lib-flexible'
import 'vant/lib/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import useComponents from './components/useComponents'
import useVant from './components/useVant'
import App from './App.vue'
import router from './router'

const app = createApp(App)

useVant.forEach(vcomponent => {
    app.use(vcomponent)
})

app.use(createPinia())
app.use(router)
app.use(useComponents)

app.mount('#app')
