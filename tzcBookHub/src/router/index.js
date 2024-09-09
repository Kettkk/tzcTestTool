import {createRouter, createWebHistory} from 'vue-router'
import PhoneHomeView from "@/views/phoneViews/PhoneHomeView.vue";
import PCHomeView from "@/views/pcViews/PCHomeView.vue";
import PhoneSignInView from "@/views/phoneViews/signInAbout/PhoneSignInView.vue";
import ClientHomeView from "@/views/phoneViews/ClientHomeView.vue";
import PhoneSettingsView from "@/views/phoneViews/PhoneSettingsView.vue";
import PhoneNavView from "@/views/phoneViews/PhoneNavView.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/phoneHomeView',
            name: 'phoneHomeView',
            component: PhoneHomeView
        },
        {
            path: '/pcHomeView',
            name: 'pcHomeView',
            component: PCHomeView
        },
        {
            path: '/phoneSignInView',
            name: 'phoneSignInView',
            component: PhoneSignInView
        },
        {
            path: '/phoneClientView',
            name: 'phoneClientView',
            component: ClientHomeView
        },
        {
            path: '/phoneSettingsView',
            name: 'phoneSettingsView',
            component: PhoneSettingsView
        },
        {
            path: '/phoneNavView',
            name: 'phoneNavView',
            component: PhoneNavView
        },
    ]
})

export default router
