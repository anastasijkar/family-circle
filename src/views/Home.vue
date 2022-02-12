<template>
  <div class="home">
    <Tree />
  </div>
</template>

<script>
// @ is an alias to /src
import Tree from "@/components/Tree.vue";

export default {
  name: "Home",
  components: {
    Tree,
  },
};
</script>
