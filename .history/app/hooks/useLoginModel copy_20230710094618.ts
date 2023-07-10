import { create } from "zustand";

interface ModelStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useModel = create<ModelStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useModel;
