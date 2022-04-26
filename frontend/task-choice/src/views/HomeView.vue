<script setup lang="ts">
import InnerNode from "../components/InnerNode.vue";
</script>

<template>
  <main>
    <h1>やりたいこと</h1>
    <div class="nodes">
      <inner-node name="基礎" />
      <inner-node name="すぐに役立つ" />
      <inner-node name="未来への投資" />
    </div>
  </main>
</template>


<style scoped>
h1 {
  text-align: center;
}
.nodes {
  display: flex;
  justify-content: space-around;
  width: 700px;
  margin: auto;
}
</style>