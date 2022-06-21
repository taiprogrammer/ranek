<template>
  <section class="produtos-container">
    <div v-for="(product, index) in products" :key="index">
      <img
        v-if="product.fotos"
        :src="product.fotos[0].src"
        :alt="product.nome[0]"
      />
      <p class="preco">{{ product.preco }}</p>
      <h2 class="titulo">{{ product.nome }}</h2>
      <p class="descricao">{{ product.descricao }}</p>
      {{ product }}
    </div>
  </section>
</template>
<script>
import { api } from "@/services/services";
export default {
  data() {
    return {
      products: new Array(),
    };
  },
  computed: {
    url() {
      let queryString = "";
      for (let key in this.$route.query) {
        queryString += `&${key}=${this.$route.query[key]}`;
      }
      return queryString;
    },
  },
  methods: {
    getProdutos() {
      api
        .get("/produtos")
        .then((response) => {
          this.products = response.data;
        })
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    this.getProdutos();
  },
};
</script>
<style></style>