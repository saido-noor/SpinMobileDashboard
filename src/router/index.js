import { createRouter, createWebHistory } from 'vue-router'
import TransactionsView from '../views/TransactionsView.vue'
import UsersView from '../views/UsersView.vue'
import WalletView from '../views/WalletView.vue'
import CorporateView from '../views/CorporateView.vue'
import ProfileView from '../views/ProfileView.vue'
import Login from '../views/Login.vue'
import ResetPassword from '../views/ResetPassword.vue'
import DisplayUserViewVue from '../views/DisplayUserView.vue'
import { Role } from "../helpers/role";


const routes = [

  {
    path: "/display",
    name: "DisplayUserView",
    component: DisplayUserViewVue,
    meta: { authorize: [Role.Admin] } 

  },
  {
    path: "/",
    name: "app",
  },
  {
    path: "/transaction",
    name: "TransactionsView",
    component: TransactionsView,
  },
  {
    path: "/users",
    name: "UsersView",
    component: UsersView,
  },
  {
    path: "/wallet",
    name: "WalletView",
    component: WalletView,
  },
  {
    path: "/corporates",
    name: "CorporateView",
    component: CorporateView,
  },
  {
    path: "/profile",
    name: "ProfileView",
    component: ProfileView,
  },
 
  {
    path: "",
    name: "Login",
    component: Login,
  },
  
  {
    path: "/reset",
    name: "ResetPassword",
    component: ResetPassword,
  },

  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes 
})


export default router
