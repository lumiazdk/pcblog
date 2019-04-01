import VueRouter from 'vue-router'
import index from './pages/index'
import about from './pages/about'
import gbook from './pages/gbook'
import life from './pages/life'
import time from './pages/time'
import postDetail from './pages/postDetail'



const routes = [
    { path: '/', component: index },
    { path: '/about', component: about },
    { path: '/gbook', component: gbook },
    { path: '/life', component: life },
    { path: '/time', component: time },
    { path: '/postDetail', component: postDetail },


]
const router = new VueRouter({
    routes
})
export default router
