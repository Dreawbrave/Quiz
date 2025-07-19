import { create } from 'zustand';

export const useQuizStore = create((set) => ({
    score: 0,
    incrementScore: () => set((state) => ({ score: state.score + 1 })),
    resetScore: () => set({ score: 0 })
}));