<template>
  <div class="container-page">
    <header-component />
    <section>
      <h1>Compre ou Venda</h1>
      <search-component />
      <list-products />
    </section>
    <footer-component />
  </div>
</template>

<script>
import ListProducts from "@/components/ListProducts.vue";
import SearchComponent from "@/components/SearchComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  name: "HomeView",
  components: {
    ListProducts,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
  },
};
</script>
<style scoped>
h1 {
  color: #87f;
  font-size: 2rem;
  margin-top: 40px;
  text-align: center;
}

/* .container-page {
  position: relative;
  max-height: 100vh;
} */
</style>