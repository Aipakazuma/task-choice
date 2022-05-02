<script setup lang="ts">
import { provide } from "vue";
import { RouterView } from "vue-router";
import "normalize.css";
import "remixicon/fonts/remixicon.css";
import NodeStore, { nodeKey } from "@/stores/main-nodes";

provide(nodeKey, NodeStore);
</script>

<template>
  <RouterView />
</template>

<style>
@import "@/assets/base.css";
</style>
