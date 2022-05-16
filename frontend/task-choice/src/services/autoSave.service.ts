import type { NodeStore } from "@/stores/main-nodes/types";

export class AutoSaveService {
  constructor(private nodeStore: NodeStore) {
    console.log(nodeStore.getNodes());
  }

  setTimer(ms: number = 1000) {
    setInterval(this.autoSave.bind(this), ms);
  }

  autoSave() {
    localStorage.setItem("nodes", JSON.stringify(this.nodeStore.getNodes()));
  }
}
