import { create } from 'zustand';

interface RegisterModelStore {
    isopen: boolean;
    onOpen: () => void;
    onClose: () => void;
    
}