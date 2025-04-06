"use client";

import { favoritesStore } from "@/store/favoritesStore";
import { Star } from "react-feather";
import { useShallow } from "zustand/shallow";

const FavoriteButton = ({ postId }: { postId: string }) => {
  const { favorites, toggleFavorite } = favoritesStore(
    useShallow((state) => ({
      favorites: state.favorites,
      toggleFavorite: state.toggleFavorite,
    }))
  );

  const isFavorite = favorites.includes(Number(postId));

  return (
    <button
      onClick={() => toggleFavorite(Number(postId))}
      className="flex items-center gap-2"
      aria-label={isFavorite ? "usuń z ulubionych" : "dodaj do ulubionych"}
      aria-pressed={isFavorite}
    >
      <span className="font-bold text-sm">
        {isFavorite ? "usuń z ulubionych" : "dodaj do ulubionych"}
      </span>
      <Star
        className={`size-6 hover:fill-black ${
          isFavorite ? " fill-black" : "text-black"
        }`}
      />
    </button>
  );
};

export default FavoriteButton;
