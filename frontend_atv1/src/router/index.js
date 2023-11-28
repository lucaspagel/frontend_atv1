import { createRouter, createWebHashHistory } from 'vue-router'
import BlogPage from '../views/BlogPage'
import AboutPage from '../views/AboutPage'
import DescriptionPage from '../views/DescriptionPage'

const routes = [
    {
        path: '/',
        name: 'Blog',
        component: BlogPage
    },
    {
        path: '/about',
        name: 'About',
        component: AboutPage
    },
    {
        path: '/description',
        name: 'Description',
        component: DescriptionPage
    },
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router
