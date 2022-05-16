import { useNodes } from "@/stores/nodes";

export class AutoSaveService {
  private nodes;

  constructor() {
    this.nodes = useNodes();
  }

  setTimer(ms: number = 1000) {
    setInterval(this.autoSave, ms);
  }

  autoSave(items: Item[]) {
    const nodes = useNodes();
    console.log(nodes);
  }
}
