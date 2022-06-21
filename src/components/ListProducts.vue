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
      <!-- {{ product }} -->
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      products: new Array(),
    };
  },
  methods: {
    getProdutos() {
      fetch("http://localhost:3000/produtos")
        .then((response) => response.json())
        .then((response) => {
          this.products = response;
        });
    },
  },
  mounted() {
    this.getProdutos();
  },
};
</script>
<style></style>