import { createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    { 
        path: '/', 
        name: 'home',
        component: () => import(/* webpackChunkName: "Home" */ '../pages/Home.vue')
    },
    { 
        path: '/title/:id', 
        name: 'title',
        component: () => import(/* webpackChunkName: "Home" */ '../pages/Title.vue')
    },
    { 
        path: '/manga-list', 
        name: 'manga-list',
        component: () => import(/* webpackChunkName: "MangaList" */ '../pages/MangaList.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router