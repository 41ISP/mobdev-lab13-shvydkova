import { create } from "zustand"
import { fetchPosts } from "../api/api"

export const useMessageStore = create((set, get) => ({
    messages: [],
    getMessages: async () => {
        const data = await fetchPosts()
        set((oldStore) => ({...oldStore, messages: data}))
    },
}))