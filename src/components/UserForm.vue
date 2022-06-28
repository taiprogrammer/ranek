<template>
  <form>
    <label for="name">Nome</label>
    <input type="text" id="name" name="name" v-model="name" />
    <label for="email">Email</label>
    <input type="text" id="email" name="email" v-model="email" />
    <label for="password">Senha</label>
    <input type="password" id="password" name="password" v-model="password" />
    <label for="cep">Cep</label>
    <input type="text" id="cep" name="cep" v-model="cep" />
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
export default {
  name: "UserForm",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      cep: "",
      street: "",
      number: "",
      neighbourhood: "",
      city: "",
    };
  },
};
</script>

<style scoped>
form {
  display: grid;
  margin-bottom: 20px;
}
</style>