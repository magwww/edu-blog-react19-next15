import { create } from "zustand";

interface FavoritesStoreTypes {
  favorites: number[];
  toggleFavorite: (postId: number) => void;
}

export const favoritesStore = create<FavoritesStoreTypes>((set, get) => ({
  favorites: [],
  toggleFavorite: (postId: number) => {
    const { favorites } = get();
    const isAlreadyFavorite = favorites.includes(postId);

    set({
      favorites: isAlreadyFavorite
        ? favorites.filter((id) => id !== postId)
        : [...favorites, postId],
    });
  },
}));
