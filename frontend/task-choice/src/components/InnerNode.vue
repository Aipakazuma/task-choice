<script setup lang="ts">
import LeafNodeWrapper from "@/components/LeafNodeWrapper.vue";
defineProps<{
  name: string;
  items: Item[];
}>();

const emit = defineEmits(["deleteEvent"]);
const deleteEvent = (name: string, targetIndex: number): void => {
  emit("deleteEvent", name, targetIndex);
};
</script>

<template>
  <div class="inner-node">
    <span>{{ name }}</span>
    <leaf-node-wrapper @deleteEvent="deleteEvent" :name="name" :items="items"/>
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