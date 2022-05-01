<script setup lang="ts">
import { ref } from "vue";
import InnerNode from "../components/InnerNode.vue";

const nodes = ref([
  {
    name: "基礎",
    items:[] as Item[]
  },
  {
    name: "すぐに役立つ",
    items:[] as Item[]
  },
  {
    name: "未来への投資",
    items:[] as Item[]
  },
]);

const deleteEvent = (targetName:string, targetIndex: number): void => {
  const nodeIndex: number = nodes.value.findIndex((node) => node.name === targetName);
  const items = nodes.value[nodeIndex].items;
  nodes.value[nodeIndex].items = items.filter((v, index) => {
    return index !== targetIndex;
  });
};
</script>

<template>
  <main>
    <h1>やりたいこと</h1>
    <div class="nodes">
      <inner-node @deleteEvent="deleteEvent" :name="node.name" :items="node.items" v-for="node in nodes" :key="node.name"/>
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