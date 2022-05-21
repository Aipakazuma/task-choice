<script setup lang="ts">
import { computed, inject } from "vue";
import { messageKey } from "@/stores/messages";

const messageStore = inject(messageKey);
if (!messageStore) {
  throw new Error("messageStore is not provided.");
}
const message = computed(() => messageStore.getMessage());
</script>

<template>
  <div class="message" v-show="message">
    {{ message }}
  </div>
</template>