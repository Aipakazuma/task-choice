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
const items = ref<Array<Item>>([
  {
    name: "Java",
    showSelectBox: false,
    marker: {
      className: "",
      markerName: "",
    },
  },
  {
    name: "Perl",
    showSelectBox: false,
    marker: {
      className: "",
      markerName: "",
    },
  },
  {
    name: "PHP",
    showSelectBox: false,
    marker: {
      className: "",
      markerName: "",
    },
  },
]);

const markers = ref<Array<Marker>>([
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

const deleteEvent = (targetIndex) => {
  items.value = items.value.filter((v, index) => {
    return index !== targetIndex;
  });
};

const changeMarker = (e, itemIndex) => {
  items.value[itemIndex].marker.className = e.target.value;
  items.value[itemIndex].showSelectBox = false;
};

const showSelectBox = (index) => {
  items.value[index].showSelectBox = true;
  console.log(items.value[index]);
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