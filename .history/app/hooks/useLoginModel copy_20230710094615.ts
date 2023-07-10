import { create } from "zustand";

interface RegisteModelStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useRegisteModel = create<RegisteModelStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisteModel;
