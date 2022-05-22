<script setup lang="ts">
import InnerNode from "../components/InnerNode.vue";
import { inject } from "vue";
import { nodeKey } from "@/stores/main-nodes";
import { messageKey } from "@/stores/messages";
import { AutoSaveService } from "@/services/autoSave.service";
import Message from "../components/Message.vue";

const nodeStore = inject(nodeKey);
if (!nodeStore) {
  throw new Error("nodeStore is not provided.");
}

nodeStore.setNodesFromLocalStorage();
const autoSaveService = new AutoSaveService(nodeStore);
autoSaveService.setTimer(1000 * 10) // 10秒ごとにLocalStorageに保存.

const messageStore = inject(messageKey);
if (!messageStore) {
  throw new Error("messageStore is not provided.");
}
const handlerSaveNodes = (e: KeyboardEvent) => {
  if (e.ctrlKey && e.code === "KeyS") {
    autoSaveService.autoSave();
    messageStore.setMessage("ローカルストレージに保存しました。");
  }
}
window.addEventListener("keydown", handlerSaveNodes);
</script>

<template>
  <main>
    <message />
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
  background: #6095e6;
  color: #fff;
  padding: 0.67em 0;
  margin: 0;
}

.nodes {
  display: flex;
  justify-content: space-around;
  width: 700px;
  margin: auto;
  padding-top: 20px;
}
</style>