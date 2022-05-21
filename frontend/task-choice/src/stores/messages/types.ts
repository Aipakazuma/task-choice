import type { DeepReadonly } from "vue";

export type MessageState = {
    content: string;
}

export type MessageStore = {
    state: DeepReadonly<MessageState>;
    getMessage: () => string;
    setMessage: (message: string, timeout?: number) => void;
}