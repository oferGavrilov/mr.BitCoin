import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {  IoTriangleSharp  , RiZhihuFill , IoClose} from "oh-vue-icons/icons";
import './assets/styles/main.scss'

const app = createApp(App)
addIcons( IoTriangleSharp  , RiZhihuFill , IoClose);
app.use(router)
app.component("v-icon", OhVueIcon);
app.mount('#app')
