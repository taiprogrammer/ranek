<template>
  <section class="user-products">
    <h1>Adicionar Produto</h1>
    <add-product-component />
    <h2>Seus Produtos</h2>
    <transition-group v-if="products" name="list" tag="ul" key="list">
      <li v-for="(product, index) in products" :key="index">
        <product-item-component :products="product">
          <template>
            <p>{{ product.descricao }}</p>
          </template>
        </product-item-component>
      </li>
    </transition-group>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
import AddProductComponent from "@/components/AddProductComponent.vue";
import ProductItemComponent from "@/components/ProductItemComponent.vue";

export default {
  name: "UserProducts",
  methods: {
    ...mapActions(["getUserProducts"]),
  },
  computed: {
    ...mapState(["login", "user", "products"]),
  },
  watch: {
    login() {
      this.getUserProducts();
    },
  },
  created() {
    if (this.login) {
      this.getUserProducts();
    }
  },
  components: {
    AddProductComponent,
    ProductItemComponent,
  },
};
</script>

<style scoped>
.user-products {
  margin: 50px 80px;
}
h2 {
  margin-bottom: 20px;
}
</style>