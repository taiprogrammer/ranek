import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ChargingPageComponent from "@/components/ChargingPageComponent.vue";

Vue.config.productionTip = false;

Vue.component("ChargingPageComponent", ChargingPageComponent);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
