<template>
  <div>
    <p>Cep: {{ address.cep }}</p>
    <p>Rua: {{ address.street }}</p>
    <p>Número: {{ address.number }}</p>
    <p>Bairro: {{ address.neighbourhood }}</p>
    <p>Cidade: {{ address.city }}</p>
    <p>Estado: {{ address.state }}</p>
  </div>
</template>

<script>
export default {
  name: "DeliveryComponent",
  props: {
    address: {
      type: Object,
      default: new Object(),
    },
  },
};
</script>

<style>
</style>