<template>
  <section class="product" v-if="products">
    <router-link :to="{ name: 'product', params: { id: products.id } }">
      <img src="" alt="" />
      <p>Ver Produto</p>
    </router-link>
    <div class="info">
      <p class="price">{{ products.preco | numberPrice }}</p>
      <h2 class="title">{{ products.nome }}</h2>
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    products: {
      type: Object,
      default: new Object(),
    },
  },
};
</script>

<style scoped>
.product {
  display: grid;
  grid-template-columns: minmax(100px, 200px) 1fr;
  grid-gap: 20px;
  margin-bottom: 40px;
  position: relative;
}

.info {
  align-self: end;
}

.product-img {
  border-radius: 4px;
  overflow: hidden;
  height: 100px;
}
</style>