import Vue from "vue";
import Vuex from "vuex";
import { api } from "@/services/services.js";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    login: false,
    user: {
      id: "",
      name: "",
      email: "",
      password: "",
      cep: "",
      street: "",
      number: "",
      neighbourhood: "",
      city: "",
      state: "",
    },
    products: null,
  },
  getters: {},
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USER(state, payload) {
      state.user = Object.assign(state.user, payload);
    },
    UPDATE_USER_PRODUCTS(state, payload) {
      state.products = payload;
    },
    ADD_USER_PRODUCTS(state, payload) {
      state.products.unshift(payload);
    },
  },
  actions: {
    getUser(context, payload) {
      api.get(`/usuario/${payload}`).then((response) => {
        context.commit("UPDATE_USER", response.data);
        context.commit("UPDATE_LOGIN", true);
      });
    },
    createUser(context, payload) {
      context.commit("UPDATE_USER", { id: payload.email });
      api.post("/usuario", payload);
    },
    logout(context) {
      context.commit("UPDATE_USER", {
        id: "",
        name: "",
        email: "",
        password: "",
        cep: "",
        street: "",
        number: "",
        neighbourhood: "",
        city: "",
        state: "",
      });
      context.commit("UPDATE_LOGIN", false);
    },
    getUserProducts(context) {
      api.get(`/produtos?user_id=${context.state.user.id}`).then((response) => {
        context.commit("UPDATE_USER_PRODUCTS", response.data);
      });
    },
  },
  modules: {},
});
