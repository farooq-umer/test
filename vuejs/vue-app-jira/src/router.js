import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue'
import Jira from './components/Jira.vue'
import Users from './components/Users.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/jira',
            component: Jira
        },
        {
            path: '/users',
            component: Users
        },
    ]
})