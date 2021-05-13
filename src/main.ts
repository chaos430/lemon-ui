import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Jun from './components/Jun.vue'
import Jun2 from './components/Jun2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {
            path: '/',component: Jun
        },
        { path: '/xxx',component: Jun2}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')