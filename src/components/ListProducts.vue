<template>
  <section class="produtos-container">
    <transition mode="out-in">
      <div
        v-if="products && products.length > 0"
        class="produtos"
        key="product"
      >
        <div v-for="(product, index) in products" :key="index" class="produto">
          <router-link :to="`/product/${product.id}`">
            <img
              v-if="product.fotos"
              :src="product.fotos[0].src"
              :alt="product.nome[0]"
            />
            <h2 class="titulo">{{ product.nome }}</h2>
            <p class="preco">{{ product.preco | numberPrice }}</p>
            <p class="descricao">{{ product.descricao }}</p>
          </router-link>
        </div>
      </div>
      <div v-else-if="!products && products.length === 0" key="no-results">
        <p class="sem-referencias">Nenhum produto encontrado</p>
      </div>
      <div v-else key="charging">
        <charging-page-component />
      </div>
    </transition>
  </section>
</template>
<script>
import { api } from "@/services/services";
import ChargingPageComponent from "./ChargingPageComponent.vue";
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
      return `/produtos/?${queryString}`;
    },
  },
  methods: {
    getProdutos() {
      this.products = null;
      setTimeout(() => {
        api
          .get(this.url)
          .then((response) => {
            this.products = response.data;
            this.totalProducts = Number(response.headers["x-total-count"]);
          })
          .catch((error) => console.log(error));
      }, 1500);
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
    ChargingPageComponent,
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