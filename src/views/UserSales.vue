<template>
  <section>
    <div class="sales">
      <h2>Funcionalidade disponível em breve</h2>
      <!-- <h2>Vendas</h2> -->
      <!-- <div class="sales-wrapper" v-for="(sale, index) in sales" :key="index">
        <div v-if="sale.product">
          <product-item-component :products="sale.product">
            <template>
              <p class="buyer">
                <span>Comprador:</span>
                {{ sale.seller_id }}
              </p>
            </template>
          </product-item-component>
          <div class="delivery">
            <h3>Entrega:</h3>
            <div v-if="sale.address">
              <delivery-component :address="sale.address" />
            </div>
            <div v-else>
              <p>Nenhum endereço cadastrado</p>
            </div>
          </div>
        </div>
        <div v-else>
          <h4>Não há nenhuma venda registrada</h4>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import { api } from "@/services/services";
// import DeliveryComponent from "@/components/DeliveryComponent.vue";
// import ProductItemComponent from "@/components/ProductItemComponent.vue";
export default {
  name: "UserSales",
  data() {
    return {
      sales: new Array(),
    };
  },
  computed: {
    ...mapState(["user", "login", "products"]),
  },
  methods: {
    getSales() {
      api
        .get(`/transacao`)
        .then(({ data }) => {
          this.sales = data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  watch: {
    login() {
      this.getSales();
    },
  },
  created() {
    if (this.login) {
      this.getSales();
    }
  },
  // components: {
  //   DeliveryComponent,
  //   ProductItemComponent,
  // },
};
</script>

<style scoped>
.sales {
  margin: 60px 80px;
}

h2 {
  margin-bottom: 20px;
  text-align: center;
}

span {
  color: #e80;
}

.sales-wrapper {
  margin-bottom: 40px;
}

.delivery {
  display: grid;
  grid-template-columns: minmax(100px, 200px) 1fr;
  grid-gap: 20px;
  margin-bottom: 60px;
}

h3 {
  justify-self: end;
}
</style>