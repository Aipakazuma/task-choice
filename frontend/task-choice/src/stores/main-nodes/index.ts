import type { InjectionKey } from "vue";
import { reactive, readonly } from "vue";
import type {
  Item,
  Marker,
  MarkerClassName,
  Node,
  NodeName,
  NodeState,
  NodeStore,
} from "@/stores/main-nodes/types";
import UUID from "uuidjs";

const mockNodes: Node[] = [
  {
    name: "基礎",
    items: [],
  },
  {
    name: "すぐに役立つ",
    items: [],
  },
  {
    name: "未来への投資",
    items: [],
  },
];

const initializeMarker = (className: string, markerName: string): Marker => {
  return {
    className,
    markerName,
  } as Marker;
};

const initializeItem = (name: string) => {
  const date = new Date();
  return {
    id: UUID.generate(),
    name: name,
    showSelectBox: false,
    marker: initializeMarker("", ""),
    createdAt: date,
    updatedAt: date,
  } as Item;
};

// for (let i = 0; i < 3; i++) {
//   mockNodes[i].items.push(initializeItem("Java"));
//   mockNodes[i].items.push(initializeItem("Perl"));
//   mockNodes[i].items.push(initializeItem("PHP"));
// }

const state = reactive<NodeState>({
  nodes: mockNodes,
});

const getNodes = (): Node[] => {
  return state.nodes;
};

const getItems = (nodeName: string) => {
  const node = state.nodes.find((node) => node.name === nodeName);
  if (!node) {
    throw new Error(`cannot find node by nodeName:${nodeName}`);
  }
  return node.items;
};

const getItemsIndex = (nodeName: NodeName): number => {
  const index = state.nodes.findIndex((node) => node.name === nodeName);
  if (index < 0) {
    throw new Error(`cannot find node by nodeName:${nodeName}`);
  }
  return index;
};

const addItem = async (nodeName: NodeName, itemName: string) => {
  const items = getItems(nodeName);
  items.push(initializeItem(itemName));
};

const updateItem = (
  nodeName: string,
  id: string,
  markerClassName: MarkerClassName
) => {
  const items = getItems(nodeName);
  const item = items.find((item) => item.id === id);
  if (!item) {
    throw new Error(`cannot find item by id:${id}`);
  }
  item.marker.className = markerClassName;
  item.showSelectBox = false;
};

const showSelectBox = (nodeName: NodeName, id: string): void => {
  console.log(nodeName, id);
  const items = getItems(nodeName);
  const item = items.find((item) => item.id === id);
  if (!item) {
    return;
  }
  item.showSelectBox = true;
};

const deleteItem = (nodeName: NodeName, id: string) => {
  const index: number = getItemsIndex(nodeName);
  console.log(index, state.nodes[index].items);
  state.nodes[index].items = state.nodes[index].items.filter(
    (item) => item.id !== id
  );
};

const nodeStore: NodeStore = {
  state: readonly(state),
  getItems,
  addItem,
  updateItem,
  showSelectBox,
  deleteItem,
  getNodes
};

export default nodeStore;
export const nodeKey: InjectionKey<NodeStore> = Symbol("node");
