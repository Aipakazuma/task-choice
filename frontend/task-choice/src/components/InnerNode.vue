<script setup lang="ts">
import LeafNodeWrapper from "@/components/LeafNodeWrapper.vue";
import { Item } from "@/store/node/";
defineProps<{
  name: string;
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
  border: 1px solid #000;
  padding: 5px 10px;
  text-align: center;
}
</style>