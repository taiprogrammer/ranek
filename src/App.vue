<template>
  <div id="app">
    <main>
      <transition mode="out-in">
        <router-view />
      </transition>
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
  min-height: 100vh;
}
</style>
