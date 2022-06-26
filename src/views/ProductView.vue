<template>
  <div>
    <header-component />
    <section>
      <div v-if="product" class="product">
        <ul class="photos" v-if="product.fotos">
          <li v-for="(photo, index) in product.fotos" :key="index">
            <img :src="photo.src" :alt="photo.titulo" />
          </li>
        </ul>
        <div class="info">
          <h1>{{ product.nome }}</h1>
          <p class="price">{{ product.preco | numberPrice }}</p>
          <p class="description">{{ product.descricao }}</p>
          <buntton class="btn" v-if="product.vendido === 'false'"
            >Comprar</buntton
          >
          <button class="btn" disabled v-else-if="product.vendido === 'true'">
            Produto Vendido
          </button>
        </div>
      </div>
      <div v-else>
        <charging-page-component />
      </div>
    </section>
  </div>
</template>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import { api } from "@/services/services.js";
export default {
  name: "ProductView",
  props: {
    id: {
      type: String,
      default: null,
      required: true,
    },
  },
  data() {
    return {
      product: new Object(),
    };
  },
  methods: {
    getProduct() {
      api
        .get(`/produtos/${this.id}`)
        .then((response) => (this.product = response.data));
    },
  },
  mounted() {
    this.getProduct();
  },
  components: {
    HeaderComponent,
  },
};
</script>
<style scoped>
.product {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  max-width: 900px;
  padding: 60px 20px;
  margin: 0 auto;
}

.price {
  color: #e80;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 40px;
}

.description {
  font-size: 1.2rem;
}

.btn {
  margin-top: 60px;
  width: 200px;
}
</style>