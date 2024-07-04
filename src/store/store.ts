import {create} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persist} from 'zustand/middleware';

const useFavoriteStore = create(
  persist(
    set => ({
      favorites: [],
      addFavorite: item =>
        set(state => ({favorites: [...state.favorites, item]})),
      removeFavorite: item =>
        set(state => ({
          favorites: state.favorites.filter(
            favorite => favorite.id !== item.id,
          ),
        })),
    }),
    {
      name: 'favorites-storage',
      storage: {
        getItem: async key => {
          const value = await AsyncStorage.getItem(key);
          return value !== null ? JSON.parse(value) : null;
        },
        setItem: async (key, value) => {
          await AsyncStorage.setItem(key, JSON.stringify(value));
        },
        removeItem: async key => {
          await AsyncStorage.removeItem(key);
        },
      },
    },
  ),
);

export default useFavoriteStore;
