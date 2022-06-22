<template>
  <div>
    <!-- <p>Páginas {{ productsPerPage }} {{ totalProducts }}</p> -->
    {{ totalPages }}
    <ul>
      <li v-for="(page, index) in totalProducts" :key="index">
        <router-link :to="{ query: { _page: page } }">{{ page }}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "ProductsPagination",
  props: {
    totalProducts: {
      type: Number,
      default: null,
    },
    productsPerPage: {
      type: Number,
      default: null,
    },
  },
  computed: {
    totalPages() {
      const total = this.totalProducts / this.productsPerPage;
      return total !== Infinity ? Math.ceil(total) : 0;
    },
  },
};
</script>