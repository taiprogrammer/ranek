<template>
  <form>
    <label for="name">Nome</label>
    <input type="text" id="name" name="name" v-model="name" />
    <label for="email">Email</label>
    <input type="text" id="email" name="email" v-model="email" />
    <label for="password">Senha</label>
    <input type="password" id="password" name="password" v-model="password" />
    <label for="cep">Cep</label>
    <input type="text" id="cep" name="cep" v-model="cep" @keyup="getUserCep" />
    <label for="street">Rua</label>
    <input type="text" id="street" name="street" v-model="street" />
    <label for="number">Número</label>
    <input type="text" id="number" name="number" v-model="number" />
    <label for="neighbourhood">Bairro</label>
    <input
      type="text"
      id="neighbourhood"
      name="neighbourhood"
      v-model="neighbourhood"
    />
    <label for="city">Cidade</label>
    <input type="text" id="city" name="city" v-model="city" />
    <label for="state">Estado</label>
    <input type="text" id="state" name="state" v-model="state" />
    <div class="button">
      <slot></slot>
    </div>
  </form>
</template>

<script>
import { getCep } from "@/services/services";
export default {
  name: "UserForm",
  computed: {
    name: {
      get() {
        return this.$store.state.user.name;
      },
      set(value) {
        return this.$store.commit("UPDATE_USER", { name: value });
      },
    },
    email: {
      get() {
        return this.$store.state.user.email;
      },
      set(value) {
        return this.$store.commit("UPDATE_USER", { email: value });
      },
    },
    password: {
      get() {
        return this.$store.state.user.password;
      },
      set(value) {
        return this.$store.commit("UPDATE_USER", { password: value });
      },
    },
    cep: {
      get() {
        return this.$store.state.user.cep;
      },
      set(value) {
        return this.$store.commit("UPDATE_USER", { cep: value });
      },
    },
    street: {
      get() {
        return this.$store.state.user.street;
      },
      set(value) {
        return this.$store.commit("UPDATE_USER", { street: value });
      },
    },
    number: {
      get() {
        return this.$store.state.user.number;
      },
      set(value) {
        return this.$store.commit("UPDATE_USER", { number: value });
      },
    },
    neighbourhood: {
      get() {
        return this.$store.state.user.neighbourhood;
      },
      set(value) {
        return this.$store.commit("UPDATE_USER", { neighbourhood: value });
      },
    },
    city: {
      get() {
        return this.$store.state.user.city;
      },
      set(value) {
        return this.$store.commit("UPDATE_USER", { city: value });
      },
    },
    state: {
      get() {
        return this.$store.state.user.state;
      },
      set(value) {
        return this.$store.commit("UPDATE_USER", { state: value });
      },
    },
  },
  methods: {
    getUserCep() {
      const cep = this.cep.replace(/\D/g, "");
      if (cep.length === 8) {
        getCep(cep)
          .then((response) => {
            this.street = response.data.logradouro;
            this.neighbourhood = response.data.bairro;
            this.city = response.data.localidade;
            this.state = response.data.uf;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style scoped>
form {
  display: grid;
  margin-bottom: 20px;
}
</style>