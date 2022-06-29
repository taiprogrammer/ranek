<template>
  <div>
    {{ user }}
  </div>
</template>
<script>
import { api } from "@/services/services";
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
  },
  created() {
    this.getUser();
  },
};
</script>
<style scoped></style>