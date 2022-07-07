<template>
  <section class="user-products">
    <div class="warning">
      <img src="../assets/information.svg" alt="" />
      <p>Funcionalidade de upload de imagens disponível em breve</p>
    </div>
    <h1>Adicionar Produto</h1>
    <add-product-component />
    <h2>Seus Produtos</h2>
    <transition-group v-if="products" name="list" tag="ul" key="list">
      <li v-for="(product, index) in products" :key="index">
        <product-item-component :products="product">
          <template>
            <p>{{ product.descricao }}</p>
            <button class="btn" @click="deleteProduct(product.id)">
              Excluir Produto
            </button>
          </template>
        </product-item-component>
      </li>
    </transition-group>
  </section>
</template>

<script>
import { api } from "@/services/services";
import { mapState, mapActions } from "vuex";
import AddProductComponent from "@/components/AddProductComponent.vue";
import ProductItemComponent from "@/components/ProductItemComponent.vue";

export default {
  name: "UserProducts",
  methods: {
    ...mapActions(["getUserProducts"]),
    deleteProduct(id) {
      api
        .delete(`/produtos/${id}`)
        .then(() => {
          this.getUserProducts();
        })
        .catch((error) => {
          console.log(error);
        });
    },
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

.list-enter-active,
.list-leave-active {
  transition: all 0.3s;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translate3d(20px, 0, 0);
}

.warning {
  background: #e80;
  padding: 2px 10px;
  border-radius: 5px;
  margin: 20px 0;
  color: #fff;
  display: flex;
}

.warning p {
  margin-left: 10px;
}
</style>