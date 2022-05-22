<script setup lang="ts">
import LeafNodeWrapper from "@/components/LeafNodeWrapper.vue";
import type { Item, NodeName } from "@/stores/main-nodes/types";
defineProps<{
  name: NodeName;
  items: Item[];
}>();
</script>

<template>
  <div class="inner-node">
    <span>{{ name }}</span>
    <leaf-node-wrapper :name="name" :items="items" />
  </div>
</template>

<style scoped>
.inner-node {
  width: 200px;
}

.inner-node > span {
  display: block;
  border: 1px solid #6aa512;
  padding: 5px 10px;
  text-align: center;
  background: #6aa512;
  color: #fff;
}
</style>