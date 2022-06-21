<template>
  <section class="produtos-container">
    <div v-for="(product, index) in products" :key="index">
      <img
        v-if="product.fotos"
        :src="product.fotos[0].src"
        :alt="product.nome[0]"
      />
      <h2 class="titulo">{{ product.nome }}</h2>
      <p class="preco">{{ product.preco }}</p>
      <p class="descricao">{{ product.descricao }}</p>
    </div>
  </section>
</template>
<script>
import { api } from "@/services/services";
export default {
  data() {
    return {
      products: new Array(),
      productsPerPage: 9,
    };
  },
  computed: {
    url() {
      let queryString = "";
      for (let key in this.$route.query) {
        queryString += `&${key}=${this.$route.query[key]}`;
      }
      return `/produtos/?_limit=${this.productsPerPage}${queryString}`;
    },
  },
  methods: {
    getProdutos() {
      // /produtos
      api
        .get(this.url)
        .then((response) => {
          this.products = response.data;
        })
        .catch((error) => console.log(error));
    },
  },
  watch: {
    url() {
      this.getProdutos();
    },
  },
  mounted() {
    this.getProdutos();
  },
};
</script>
<style></style>