<template>
  <div>
    <ul v-if="totalProducts > 1">
      <li v-for="(page, index) in totalProducts / productsPerPage" :key="index">
        <router-link :to="{ query: query(page) }">{{ page }}</router-link>
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
      default: 1,
    },
    productsPerPage: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    totalPages() {
      const total = this.totalProducts / this.productsPerPage;
      return total !== Infinity ? Math.ceil(total) : 0;
    },

    pages() {
      const current = Number(this.$route.query._page);
      const range = 9;
      const offset = Math.ceil(range / 2);
      const total = this.totalPages;
      const pagesArray = [];

      for (let index = 0; index < total; index++) {
        pagesArray.push(index);
      }
      pagesArray.splice(0, current - offset);
      pagesArray.splice(range, total);
      return pagesArray;
    },
  },
  methods: {
    query(page) {
      return {
        ...this.$route.query,
        _page: page,
      };
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
  border: 1px solid #000;
}

ul {
  grid-column: 1 / -1;
}
</style>