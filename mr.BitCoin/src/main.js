import { createApp } from 'vue'
import App from './App.vue'
import {myStore} from './store/store.js'
import router from './router'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {  IoTriangleSharp, RiZhihuFill , IoClose, FaUserEdit } from "oh-vue-icons/icons";
import './assets/styles/main.scss'

const app = createApp(App)
addIcons( IoTriangleSharp, RiZhihuFill , IoClose, FaUserEdit)
app.use(router)
app.use(myStore)
app.component("v-icon", OhVueIcon)
app.mount('#app')
