import create from 'zustand';

const useStore = create(set => ({
  favourites: [],
  recommendations: [],
  addFavourite: (item) => set(state => ({ favourites: [...state.favourites, item] })),
  setRecommendations: (items) => set({ recommendations: items }),
}));

export default useStore;