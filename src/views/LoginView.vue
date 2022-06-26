<template>
  <div>
    <header-component />
    <section class="login">
      <h1>Login</h1>
      <form>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" v-model="login.email" />
        <label for="password">Senha</label>
        <input
          type="password"
          name="password"
          id="password"
          v-model="login.password"
        />
        <button class="btn" @click.prevent="loginUser()">Login</button>
      </form>
      <p class="lostPassword">
        <a href="/" target="_blank">Perdeu a senha? Clique aqui</a>
      </p>
      <create-login-component />
    </section>
  </div>
</template>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import CreateLoginComponent from "@/components/CreateLoginComponent.vue";
export default {
  name: "LoginView",
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    loginUser() {
      alert("Login");
    },
  },
  components: {
    HeaderComponent,
    CreateLoginComponent,
  },
};
</script>
<style scoped>
.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
}

form {
  display: grid;
}

.btn {
  width: 100%;
  max-width: 300px;
}

.lostPassword {
  margin: 20px auto 0 auto;
}

.lostPassword a:hover {
  color: #87f;
  text-decoration: underline;
}

h1 {
  font-size: 2rem;
  margin-top: 40px;
  margin-block: 20px;
}
</style>