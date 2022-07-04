<template>
  <section>
    <h2>Endereço de envio</h2>
    <user-form>
      <button class="btn" @click.prevent="finishBought()">
        Finalizar Compra
      </button>
    </user-form>
  </section>
</template>

<script>
import { mapState } from "vuex";
import { api } from "@/services/services";
import UserForm from "@/components/UserForm.vue";
export default {
  name: "FinishBoughtComponent",
  props: {
    product: {
      type: Object,
      default: new Object(),
    },
  },
  methods: {
    createTransaction() {
      return api
        .post("/transacao", this.bought)
        .then(() => {
          this.$router.push({ name: "boughts" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async createUser() {
      try {
        await this.$store.dispatch("createUser", this.$store.state.user);
        await this.$store.dispatch("getUser", this.$store.state.user.email);
        await this.createTransaction();
      } catch (error) {
        console.log(error);
      }
    },
    finishBought() {
      if (this.$store.state.login) {
        this.createTransaction();
      } else {
        this.createUser();
      }
    },
  },
  computed: {
    ...mapState(["user"]),
    bought() {
      return {
        buyer_id: this.user.email,
        seller_id: this.product.user_id,
        product: this.product,
        address: {
          cep: this.user.cep,
          street: this.user.street,
          number: this.user.number,
          neighbourhood: this.user.neighbourhood,
          city: this.user.city,
          state: this.user.state,
        },
      };
    },
  },
  components: {
    UserForm,
  },
};
</script>

<style scoped>
h2 {
  margin-top: 40px;
  margin-bottom: 20px;
}
</style>