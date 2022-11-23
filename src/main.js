import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/app.css';
import 'tw-elements';

createApp(App).use(router).mount('#app')
