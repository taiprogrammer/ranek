<template>
  <section>
    <div v-if="boughts">
      <h2>Compras</h2>
      <div
        class="products-wrapper"
        v-for="(boughts, index) in boughts"
        :key="index"
      >
        <product-item-component />
      </div>
    </div>
  </section>
</template>

<script>
import { api } from "@/services/services";
import ProductItemComponent from "@/components/ProductItemComponent.vue";
export default {
  name: "UserBoughts",
  data() {
    return {
      boughts: null,
    };
  },
  methods: {
    getBoughts() {
      api
        .get("/transacao")
        .then((response) => {
          this.boughts = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getBoughts();
  },
  components: {
    ProductItemComponent,
  },
};
</script>

<style>
</style>