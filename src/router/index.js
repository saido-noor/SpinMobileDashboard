import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import LoginView from '../views/LoginView.vue'
import TransactionsView from '../views/TransactionsView.vue'
import UsersView from '../views/UsersView.vue'
import WalletView from '../views/WalletView.vue'
import CorporateView from '../views/CorporateView.vue'
import ProfileView from '../views/ProfileView.vue'
import AddUser from '../components/AddUser.vue'
import Login from '../views/Login.vue'
import PracticeView from '../views/PracticeView.vue'
import AddCorporate from '../components/AddCorporate.vue'
import ResetPassword from '../views/ResetPassword.vue'
// import ToggleComponent from '../components/Toggle.vue'
// import TableComponent from '../components/TableComponent.vue'
import Sidebar from '../components/Sidebar.vue'
import DisplayUserViewVue from '../views/DisplayUserView.vue'
import SuccessMessage from '../components/SuccessMessage.vue'

const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/display",
    name: "DisplayUserView",
    component: DisplayUserViewVue,
  },
  {
    path: "/",
    name: "app",
  },
  // {
  //   path: "/toggle",
  //   name: "ToggleComponent",
  //   component: ToggleComponent,
  // },
  {
    path: "/sidebar",
    name: "Sidebar",
    component: Sidebar,
  },
  {
    path: "/succuss",
    name: "SuccessMessage",
    component: SuccessMessage,
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
    path: "/addcorporate",
    name: "AddCorporate",
    component: AddCorporate,
  },
  {
    path: "",
    name: "Login",
    component: Login,
  },
  {
    path: "/practice",
    name: "PracticeView",
    component: PracticeView,
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
