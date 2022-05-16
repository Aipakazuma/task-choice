<script setup lang="ts">
import InnerNode from "../components/InnerNode.vue";
import { inject } from "vue";
import { nodeKey } from "@/stores/main-nodes";

const nodeStore = inject(nodeKey);
</script>

<template>
  <main>
    <h1>やりたいこと</h1>
    <div class="nodes">
      <inner-node
        :name="node.name"
        :items="node.items"
        v-for="node in nodeStore.state.nodes"
        :key="node.name"
      />
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