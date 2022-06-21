<template>
  <div id="app">
    <main>
      <router-view />
    </main>
  </div>
</template>
<script>
export default {};
</script>

<style lang="css">
@import "../src/assets/style/style.css";

#app {
  display: flex;
  flex-direction: column;
  /* min-height: 100vh; */
}
</style>
