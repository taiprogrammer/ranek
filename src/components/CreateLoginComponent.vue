<template>
  <section>
    <h2>Crie a sua conta</h2>
    <transition mode="out-in">
      <button v-if="!create" class="btn" @click="create = true">
        Criar conta
      </button>
      <user-form v-else>
        <template>
          <button class="btn">Criar conta</button>
        </template>
      </user-form>
    </transition>
  </section>
</template>
<script>
import UserForm from "@/components/UserForm.vue";
export default {
  name: "CreateLoginComponent",
  data() {
    return {
      create: false,
    };
  },
  components: {
    UserForm,
  },
};
</script>
<style scoped>
h2 {
  margin-top: 40px;
  margin-bottom: 10px;
}

.btn {
  width: 100%;
  max-width: 300px;
}
</style>