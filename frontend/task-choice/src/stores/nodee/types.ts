export type NodeeName = "基礎" | "すぐに役立つ" | "未来への投資";
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

export type Nodee = {
  name: NodeName;
  items: Item[];
};

export type NodeeState = {
  nodes: Node[];
};

export type NodeeStore = {
  state: DeepReadonly<NodeeState>;
  getItems: (nodeeName: NodeeName) => void;
  addItem: (nodeeName: NodeeName, itemName: Item) => void;
  updateItem: (nodeeName: NodeeName, id: string, item: Item) => void;
  showSelectBox(nodeeName: NodeName, id: string);
  deleteItem: (nodeeName: NodeeName, id: string) => void;
};
