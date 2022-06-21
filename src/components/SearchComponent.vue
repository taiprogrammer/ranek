<template>
  <form>
    <input type="text" name="busca" id="busca" v-model="busca" />
    <input
      type="submit"
      id="lupa"
      value="buscar"
      @click.prevent="searchProducts()"
    />
  </form>
</template>
<script>
export default {
  name: "SearchComponent",
  data() {
    return {
      busca: null,
    };
  },
  methods: {
    searchProducts() {
      this.$router.push({ query: { q: this.busca } });
    },
  },
};
</script>