<script setup lang="ts">
import InnerNode from "../components/InnerNode.vue";
import { inject } from "vue";
import { nodeKey } from "@/stores/main-nodes";
import { AutoSaveService } from "@/services/autoSave.service";

const nodeStore = inject(nodeKey);
if (!nodeStore) {
  throw new Error("nodeStore is not provided.");
}
nodeStore.setNodesFromLocalStorage();
const autoSaveService = new AutoSaveService(nodeStore);
autoSaveService.setTimer(1000 * 10) // 10秒ごとにLocalStorageに保存.
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