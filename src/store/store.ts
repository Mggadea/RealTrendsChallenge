import create from 'zustand';

const useFavoriteStore = create(set => ({
  favorites: [],
  addFavorite: item => set(state => ({favorites: [...state.favorites, item]})),
  removeFavorite: item =>
    set(state => ({
      favorites: state.favorites.filter(favorite => favorite !== item),
    })),
}));

export default useFavoriteStore;
