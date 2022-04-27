<script setup lang="ts">
import { ref } from "vue";
import LeafNode from "@/components/LeafNode.vue";

type Item = {
  name: string;
  showSelectBox: boolean;
  marker: Marker;
};

type Marker = {
  className: string;
  markerName: string;
};

const initMarker = (className: string, markerName: string): Marker => {
  return {
    className,
    markerName,
  };
};
const initItem = (_name: string): Item => {
  return {
    name: _name,
    showSelectBox: false,
    marker: initMarker("", ""),
  };
};
const items = ref<Array<Item>>([
  initItem("Java"),
  initItem("Perl"),
  initItem("PHP"),
]);

const markers = ref<Array<Marker>>([
  initMarker("ri-building-4-line", "仕事で使う"),
  initMarker("ri-heart-line", "学ぶもの"),
  initMarker("ri-pause-circle-fill", "今はやらない"),
]);

const submit = (e) => {
  if (e.target.value === "") {
    return;
  }
  items.value.push({
    name: e.target.value,
    showSelectBox: false,
    marker: {
      className: "",
      markerName: "",
    },
  });
  e.target.value = "";
};

const deleteEvent = (targetIndex: number): void => {
  items.value = items.value.filter((v, index) => {
    return index !== targetIndex;
  });
};

const changeMarker = (e: Event, itemIndex: number): void => {
  const target = e.target as HTMLInputElement;
  items.value[itemIndex].marker.className = target.value;
  items.value[itemIndex].showSelectBox = false;
};

const showSelectBox = (index: number): void => {
  items.value[index].showSelectBox = true;
};
</script>

<template>
  <div>
    <input type="text" @keyup.enter="submit" placeholder="入力してください" />
    <ul>
      <li v-for="(item, index) in items" :key="item">
        <leaf-node
          :name="item.name"
          :className="item.marker.className"
          @click="showSelectBox(index)"
        />
        <button @click="deleteEvent(index)" class="delete-button">×</button>
        <select
          v-show="item.showSelectBox"
          @change="changeMarker($event, index)"
        >
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