import create from 'zustand';

interface LikeCount {
  count: number;
  increment: () => void;
  reset: () => void;
}
const useStore = create<LikeCount>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  reset: () => set(() => ({ count: 0 })),
}));

export default useStore;
