<script setup lang="ts">
import LeafNodeWrapper from "@/components/LeafNodeWrapper.vue";
defineProps<{
  name: string;
}>();
</script>

<template>
  <div class="inner-node">
    <span>{{ name }}</span>
    <leaf-node-wrapper />
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