<template>
  <section class="user">
    <header-component />
    <nav class="sidenav">
      <ul>
        <li>
          <router-link :to="{ name: 'user' }"> Produtos </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'boughts' }"> Compras </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'sales' }"> Vendas </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'edit' }">
            Editar informações de perfil
          </router-link>
        </li>
        <li>
          <a @click.prevent="logout()"> Sair </a>
        </li>
      </ul>
    </nav>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>
<script>
import { api } from "@/services/services";
import HeaderComponent from "@/components/HeaderComponent.vue";
export default {
  name: "UserView",
  props: {
    id: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      user: new Object(),
    };
  },
  methods: {
    getUser() {
      api
        .get(`/usuario/${this.id}`)
        .then((response) => {
          this.user = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    },
  },
  created() {
    this.getUser();
  },
  components: {
    HeaderComponent,
  },
};
</script>
<style scoped>
.sidenav {
  margin: 20px 5px;
}

ul {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

a {
  padding: 10px 20px;
  cursor: pointer;
}

a:hover {
  background: #000;
  border-radius: 4px;
  color: #fff;
}

a.router-link-exact-active {
  background: #000;
  color: #fff;
  border-radius: 4px;
}
</style>