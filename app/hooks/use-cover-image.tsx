import React from "react";
import { create } from "zustand";

type CoverImageStore = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

const useCoverImage = create<CoverImageStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useCoverImage;
