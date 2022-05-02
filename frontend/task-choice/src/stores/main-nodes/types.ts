import type { DeepReadonly } from "vue";

export type NodeName = "基礎" | "すぐに役立つ" | "未来への投資";
export type MarkerClassName =
  | "ri-building-4-line"
  | "ri-heart-line"
  | "ri-pause-circle-fill";
export type MarkerName = "仕事で使う" | "学ぶもの" | "今はやらない";

export type Marker = {
  className: MarkerClassName;
  markerName: MarkerName;
};

export type Item = {
  id: string;
  name: string;
  showSelectBox: boolean;
  marker: Marker;
  createdAt: Date;
  updatedAt: Date;
};

export type Node = {
  name: NodeName;
  items: Item[];
};

export type NodeState = {
  nodes: Node[];
};

export type NodeStore = {
  state: DeepReadonly<NodeState>;
  getItems: (nodeName: NodeName) => void;
  addItem: (nodeName: NodeName, itemName: string) => void;
  updateItem: (
    nodeName: string,
    id: string,
    markerClassName: MarkerClassName
  ) => void;
  showSelectBox(nodeName: NodeName, id: string): void;
  deleteItem: (nodeName: NodeName, id: string) => void;
};
