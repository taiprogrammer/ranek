import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ChargingPageComponent from "@/components/ChargingPageComponent.vue";

Vue.config.productionTip = false;

Vue.component("ChargingPageComponent", ChargingPageComponent);

Vue.filter("numberPrice", (value) => {
  value = Number(value);
  if (!isNaN(value)) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  } else {
    return "";
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
