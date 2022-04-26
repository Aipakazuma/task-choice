<script setup lang="ts">
import LeafNode from "@/components/LeafNode.vue";
</script>

<template>
  <div>
    <button>Add</button>
    <ul>
      <li>
        <leaf-node name="Java" />
      </li>
      <li>
        <leaf-node name="Perl" />
      </li>
      <li>
        <leaf-node name="PHP" />
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