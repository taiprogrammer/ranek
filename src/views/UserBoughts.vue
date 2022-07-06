<template>
  <section>
    <div v-if="boughts" class="boughts">
      <h2>Compras</h2>
      <div
        class="products-wrapper"
        v-for="(bought, index) in boughts"
        :key="index"
      >
        <product-item-component
          v-if="bought.product"
          :products="bought.product"
        >
          <template>
            <p class="seller">
              <span>Vendedor:</span>
              {{ bought.seller_id }}
            </p>
          </template>
        </product-item-component>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import { api } from "@/services/services";
import ProductItemComponent from "@/components/ProductItemComponent.vue";
export default {
  name: "UserBoughts",
  data() {
    return {
      boughts: null,
    };
  },
  computed: {
    ...mapState(["user", "login"]),
  },
  methods: {
    getBoughts() {
      api
        .get(`/transacao?buyer_id=${this.user.id}`)
        .then((response) => {
          this.boughts = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  watch: {
    login() {
      this.getBoughts();
    },
  },
  created() {
    if (this.login) {
      this.getBoughts();
    }
  },
  components: {
    ProductItemComponent,
  },
};
</script>

<style scoped>
.products-wrapper {
  margin-bottom: 40px;
}

.seller span {
  color: #e80;
}

h2 {
  margin-bottom: 20px;
}

.boughts {
  margin: 60px 80px;
}
</style>