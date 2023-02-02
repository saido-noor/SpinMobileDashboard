import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import LoginView from '../views/LoginView.vue'
import TransactionsView from '../views/TransactionsView.vue'
import UsersView from '../views/UsersView.vue'
import WalletView from '../views/WalletView.vue'
import CorporateView from '../views/CorporateView.vue'
import ProfileView from '../views/ProfileView.vue'
import AddUser from '../components/AddUser.vue'
import SignIn from '../views/SignIn.vue'
import PracticeView from '../views/PracticeView.vue'
const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
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
    path: "/corporate",
    name: "CorporateView",
    component: CorporateView,
  },
  {
    path: "/profile",
    name: "ProfileView",
    component: ProfileView,
  },
  {
    path: "/dashboard",
    name: "DashboardView",
    component: DashboardView,
  },
  {
    path: "/adduser",
    name: "AddUser",
    component: AddUser,
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/practice",
    name: "PracticeView",
    component: PracticeView,
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
