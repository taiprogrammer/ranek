<template>
  <section class="user-edit">
    <user-form>
      <button class="btn" @click.prevent="editUser($store.state.user.id)">
        Editar informações
      </button>
    </user-form>
  </section>
</template>

<script>
import { api } from "@/services/services";
import UserForm from "@/components/UserForm.vue";
export default {
  name: "UserEdit",
  methods: {
    editUser(id) {
      api
        .put(`usuario/${id}`, this.$store.state.user)
        .then(() => {
          this.$store.dispatch("getUser");
          this.$router.push({ name: "home" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  components: {
    UserForm,
  },
};
</script>

<style scoped>
.user-edit {
  margin: 50px;
}
</style>