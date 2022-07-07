<template>
  <section>
    <form class="add-product">
      <label for="name">Nome</label>
      <input type="text" id="name" name="name" v-model="product.nome" />
      <label for="price">Preço</label>
      <input type="text" id="price" name="price" v-model="product.preco" />
      <label for="photo">Fotos</label>
      <input type="file" id="photo" name="photo" ref="photo" disabled />
      <label for="description">Descrição</label>
      <textarea
        name="description"
        id="description"
        v-model="product.descricao"
      ></textarea>
      <button class="btn" @click.prevent="addProduct()">
        Adicionar Produto
      </button>
    </form>
  </section>
</template>

<script>
import { api } from "@/services/services";
export default {
  name: "AddProductComponent",
  data() {
    return {
      product: {
        nome: "",
        preco: "",
        descricao: "",
        // fotos: null,
      },
    };
  },
  methods: {
    formatProduct() {
      this.product.user_id = this.$store.state.user.id;
      this.product.id = this.product.nome.toLowerCase();
      this.product.vendido = false;
    },
    addProduct() {
      this.formatProduct();
      api.post(`/produtos`, this.product).then(() => {
        this.$store.dispatch("getUserProducts");
      });
    },
  },
};
</script>

<style scoped>
.add-product {
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  margin-bottom: 60px;
}

.btn {
  grid-column: 2;
}
</style>