<script setup lang="ts">
import { ref, toRefs } from "vue";
import LeafNode from "@/components/LeafNode.vue";
import { inject } from "vue";
import { nodeKey } from "@/stores/nodee";

const props = defineProps<{
  name: NodeeName;
  items: Item[];
}>();

const markers: Marker[] = [
  {
    className: "ri-building-4-line",
    markerName: "仕事で使う",
  },
  {
    className: "ri-heart-line",
    markerName: "学ぶもの",
  },
  {
    className: "ri-pause-circle-fill",
    markerName: "今はやらない",
  },
];

const nodeStore = inject(nodeKey);
const { name } = toRefs(props);

const submit = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.value === "") {
    return;
  }
  nodeStore.addItem(name.value, target.value);
  target.value = "";
};

const deleteEvent = (targetId: string): void => {
  nodeStore.deleteItem(name.value, targetId);
};

const changeMarker = (e: Event, targetId: string): void => {
  const target = e.target as HTMLInputElement;
  nodeStore.updateItem(name.value, targetId, target.value);
};

const showSelectBox = (targetId: string): void => {
  nodeStore.showSelectBox(name.value, targetId);
};
</script>

<template>
  <div>
    <input type="text" @keyup.enter="submit" placeholder="入力してください" />
    <ul>
      <li v-for="item in items" :key="item.id">
        <leaf-node
          :name="item.name"
          :className="item.marker.className"
          @click="showSelectBox(item.id)"
        />
        <button @click="deleteEvent(item.id)" class="delete-button">×</button>
        <select
          v-show="item.showSelectBox"
          @change="changeMarker($event, item.id)"
        >
          <option name="" disabled selected>選択してください</option>
          <option
            v-for="marker in markers"
            :key="marker.className"
            :value="marker.className"
          >
            {{ marker.markerName }}
          </option>
        </select>
      </li>
    </ul>
  </div>
</template>

<style scoped>
input {
  padding: 10px 0;
  border: 1px solid;
  margin-top: 10px;
  border-radius: 5px;
  text-align: center;
  width: 100%;
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
  cursor: pointer;
}

li:hover {
  background: #eee;
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
  cursor: pointer;
}
</style>