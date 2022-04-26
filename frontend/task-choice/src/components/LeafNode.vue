<script setup lang="ts">
defineProps<{
  name: string;
  className: string;
}>();
</script>

<template>
  <span>
    {{ name }}
    <i :class="className"></i>
  </span>
</template>

<style scoped>
span {
  display: inline-block;
  width: 100%;
}
</style>