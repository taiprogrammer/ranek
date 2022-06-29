import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserView from "../views/UserView.vue";
import UserEdit from "../views/UserEdit.vue";
import LoginView from "../views/LoginView.vue";
import UserSales from "../views/UserSales.vue";
import UserBoughts from "../views/UserBoughts.vue";
import ProductView from "../views/ProductView.vue";
import UserProducts from "../views/UserProducts.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/product/:id",
    name: "product",
    component: ProductView,
    props: true,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/usuario/:id",
    component: UserView,
    props: true,
    children: [
      {
        path: "",
        name: "user",
        component: UserProducts,
      },
      {
        path: "edit",
        name: "edit",
        component: UserEdit,
      },
      {
        path: "boughts",
        name: "boughts",
        component: UserBoughts,
      },
      {
        path: "sales",
        name: "sales",
        component: UserSales,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
