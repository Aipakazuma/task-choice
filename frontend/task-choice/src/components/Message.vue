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
  <transition name="fade">
    <div class="message" v-show="message">
      {{ message }}
    </div>
  </transition>
</template>

<style scoped>
.message {
  position: absolute;
  left: 0px;
  right: 0px;
  text-align: center;
  z-index: 10;
  border: 3px solid #a7ff00;
  width: 360px;
  margin: auto;
  height: 64px;
  line-height: 64px;
  background: #87fe64;
  border-radius: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>