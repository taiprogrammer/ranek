<template>
  <div>
    <ul v-if="totalProducts > 1">
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
<style scoped>
li {
  display: inline-block;
}

li a {
  padding: 4px 8px;
  border-radius: 2px;
  margin: 4px;
  border: 1px solid #87f;
}

li a.router-link-exact-active {
  border: 1px solid rgb(84, 57, 255);
}

ul {
  grid-column: 1 / -1;
}
</style>