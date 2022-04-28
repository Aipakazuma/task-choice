import { reactive, readonly } from "vue";

const mockNodes: Nodee[] = [
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
  };
};

const initializeItem = (name: string) => {
  const date = new Date();
  return {
    id: date.getTime(),
    name: name,
    showSelectBox: false,
    marker: initializeMarker("", ""),
    createdAt: date,
    updatedAt: date,
  };
};

for (let i = 0; i < 3; i++) {
  mockNodes[i].items.push(initializeItem("Java"));
  mockNodes[i].items.push(initializeItem("Perl"));
  mockNodes[i].items.push(initializeItem("PHP"));
}

const state = reactive<NodeeState>({
  nodes: mockNodes,
});

const getItems = (nodeName: string) => {
  const node = state.nodes.find((node) => node.name === nodeName);
  if (!node) {
    throw new Error(`cannot find node by nodeName:${nodeName}`);
  }
  return node.items;
};

const addItem = async (nodeName: string, itemName: Item) => {
  const node = getItems(nodeName);
  node.items.push(initializeItem(itemName));
};

const updateItem = (nodeName: string, id: number, item: Item) => {
  const node = getItems(nodeName);
  const index = node.items.find((item) => item.id === id);
  if (index === -1) {
    throw new Error(`cannot find item by id:${id}`);
  }
  node.items[index] = item;
};

const deleteItem = (nodeName: string, id: number) => {
  const node = getItems(nodeName);
  node.items = node.items.filter((item) => item.id !== id);
};

const nodeStore: NodeeStore = {
  state: readonly(state),
  getItems,
  addItem,
  updateItem,
  deleteItem,
};

export default nodeStore;
export const nodeKey: InjectionKey<NodeeStore> = Symbol("node");
