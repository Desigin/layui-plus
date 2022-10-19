import { createApp } from 'vue'
import App from './App'
import LayPlus from '../build'
import "../build/style.css"

createApp(App).use(LayPlus).mount('#app')