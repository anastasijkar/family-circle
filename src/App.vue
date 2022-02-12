<template>
  <nav>
    <router-link to="/">Home</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
@import "@/theme/variables.scss";

body {
  background: linear-gradient(
        90deg,
        $white ($bg-dot-spacing - $bg-dot-size),
        transparent 1%
      )
      center,
    linear-gradient($white ($bg-dot-spacing - $bg-dot-size), transparent 1%)
      center,
    $lighter-grey;
  background-size: $bg-dot-spacing $bg-dot-spacing;
  padding: $spacing * 2 $spacing * 3;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $dark-main;
}

nav {
  margin-bottom: $spacing * 3;
  a {
    font-weight: bold;
    color: $dark-main;

    &.router-link-exact-active {
      color: $green-accent;
    }
  }
}
</style>
