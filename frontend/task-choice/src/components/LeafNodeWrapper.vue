<script setup lang="ts">
import { ref } from "vue";
import LeafNode from "@/components/LeafNode.vue";

const items = ref<Array<string>>(["Java", "Perl", "PHP"]);
const submit = (e) => {
  items.value.push(e.target.value);
  e.target.value = "";
};
</script>

<template>
  <div>
    <input type="text" @keyup.enter="submit" />
    <ul>
      <li v-for="item in items" :key="item">
        <leaf-node :name="item" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
button {
  display: block;
  width: 100%;
  margin-top: 20px;
  padding: 5px 0;
}

ul {
  overflow: hidden;
  overflow-y: scroll;
  height: 500px;
  border: 1px solid #000;
  margin-top: 10px;
}

li {
  display: block;
  border: 1px solid #000;
  padding: 5px;
  margin: 10px 10px;
}
</style>