import { createApp } from 'vue'
import App from './App.vue'

import {createWebHistory, createRouter} from 'vue-router'

// Home
import Home from './components/Home.vue'
// Product
import Product from './components/Product.vue'
// Contact
import Contact from './components/Contact.vue'
// Not Found
import NotFound from './components/NotFound.vue'

// Router
const router = createRouter ({
    history : createWebHistory(),
    routes  : [
        // Home
        {path: '/', name: "Home", component: Home},
        // Product
        {path: '/product', name: "Product", component: Product},
        // Contact
        {path: '/contact', name: "Contact", component: Contact},
        // Not Found
        {path: '/not_found', name: "NotFound", component: NotFound},
    ],
    base    : '/'
})

const app = createApp(App)
app.use(router)
app.mount("#app")