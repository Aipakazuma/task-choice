<script setup lang="ts">
import { ref } from "vue";
import LeafNode from "@/components/LeafNode.vue";

const items = ref<Array<string>>(["Java", "Perl", "PHP"]);
const submit = (e) => {
  if (e.target.value === "") {
    return;
  }
  items.value.push(e.target.value);
  e.target.value = "";
};
const deleteEvent = (targetIndex) => {
  items.value = items.value.filter((v, index) => {
    return index !== targetIndex;
  });
};
</script>

<template>
  <div>
    <input type="text" @keyup.enter="submit" placeholder="入力してください" />
    <ul>
      <li v-for="(item, index) in items" :key="item">
        <leaf-node :name="item" />
        <button @click="deleteEvent(index)" class="delete-button">×</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
input {
  padding: 10px 0;
  border: 1px solid;
  margin-top: 10px;
  padding-left: 14px;
  border-radius: 5px;
  margin-left: auto;
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
  overflow-wrap: break-word;
  position: relative;
}

.delete-button {
  position: absolute;
  top: -10px;
  right: -10px;
  background: #fff;
  border-radius: 50%;
  border: 1px solid #000;
  font-size: 10px;
  width: 20px;
  height: 20px;
}
</style>