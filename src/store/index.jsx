import { create } from "zustand";

export const useStore = create((set) => ({
  data: [],
  setData: (val) => set((state) => ({ data: [...state, val] })),
}));
