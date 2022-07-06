<template>
  <div>
    <p><span>Cep:</span> {{ address.cep }}</p>
    <p><span>Rua:</span> {{ address.street }}</p>
    <p><span>Número:</span> {{ address.number }}</p>
    <p><span>Bairro:</span> {{ address.neighbourhood }}</p>
    <p><span>Cidade:</span> {{ address.city }}</p>
    <p><span>Estado:</span> {{ address.state }}</p>
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

<style scoped>
span {
  color: #e80;
}
</style>