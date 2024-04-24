// Define our routing rules//
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue"
import CarView from "../views/CarView.vue"
import ContactView from "../views/ContactView.vue"
import NotFoundView from "../views/404View.vue"
import DonationView from "te./views/DonationView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/home",
            redirect: "/"
        },
        {
            path: "/about",
            name: "about",
            component: AboutView
        }, 
        {
            path: "/cars/:id",
            name: "car",
            component: CarView,
            children: [
                {
                path: "contact",
                component: ContactView
                }
        ]
        },
        {
            path: "/:catchall(.*)*",
            name: "Not found",
            component: NotFoundView
        },
        {
            path: "/donations",
            name: "donations",
            component: DonationView
        }
    ]

})
export default router