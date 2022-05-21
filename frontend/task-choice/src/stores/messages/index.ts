import type { InjectionKey } from "vue";
import { reactive, readonly } from "vue";
import type { MessageState, MessageStore } from "./types";

const state = reactive<MessageState>({
    content: ""
});

const getMessage = (): string => {
    return state.content;
}

const setMessage = (message: string, timeout: number = 3000): void => {
    state.content = message;
    setTimeout(() => (state.content = ''), timeout)
}

const messageStore: MessageStore = {
    state: readonly(state),
    getMessage,
    setMessage
}

export default messageStore;
export const messageKey: InjectionKey<MessageStore> = Symbol("message");