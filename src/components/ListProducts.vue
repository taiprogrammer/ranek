<template>
  <section class="produtos-container">
    <div v-if="products && products.length > 0" class="produtos">
      <div v-for="(product, index) in products" :key="index" class="produto">
        <router-link to="/">
          <img
            v-if="product.fotos"
            :src="product.fotos[0].src"
            :alt="product.nome[0]"
          />
          <h2 class="titulo">{{ product.nome }}</h2>
          <p class="preco">{{ product.preco }}</p>
          <p class="descricao">{{ product.descricao }}</p>
        </router-link>
      </div>
      <products-pagination
        :totalProducts="totalProducts"
        :productsPerPage="productsPerPage"
      />
    </div>
    <div v-else-if="products && products.length === 0">
      <p class="sem-referencias">Nenhum produto encontrado</p>
    </div>
  </section>
</template>
<script>
import { api } from "@/services/services";
import ProductsPagination from "@/components/ProductsPagination.vue";
export default {
  data() {
    return {
      products: new Array(),
      productsPerPage: 9,
      totalProducts: 0,
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
      api
        .get(this.url)
        .then((response) => {
          this.products = response.data;
          console.log(response);
          this.totalProducts = Number(response.headers["x-total-count"]);
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
  components: {
    ProductsPagination,
  },
};
</script>
<style scoped>
.produtos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin: 30px;
}

.produtos-container {
  max-width: 1000px;
  margin: 0 auto;
}

.produto {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  transition: all 0.2s;
}

.produto:hover {
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  transform: scale(1.01);
  position: relative;
  z-index: 1;
}

.produto img {
  border-radius: 4px;
  margin-bottom: 20px;
}

.titulo {
  margin-bottom: 10px;
}

.preco {
  color: #e80;
  font-weight: bold;
}

.sem-referencias {
  text-align: center;
}
</style>