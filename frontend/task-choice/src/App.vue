<script setup lang="ts">
import { provide } from "vue";
import { RouterView } from "vue-router";
import "normalize.css";
import "remixicon/fonts/remixicon.css";
import NodeStore, { nodeKey } from "@/stores/main-nodes";
import MessageStore, { messageKey } from "@/stores/messages";

provide(nodeKey, NodeStore);
provide(messageKey, MessageStore);
</script>

<template>
  <RouterView />
</template>

<style>
@import "@/assets/base.css";
</style>
