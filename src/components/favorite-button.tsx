"use client";

import { usePosts } from "@/context/posts-context";
import { Star } from "react-feather";

const FavoriteButton = ({ postId }: { postId: string }) => {
  const { favorites, toggleFavorite } = usePosts();
  const isFavorite = favorites.includes(Number(postId));

  return (
    <button
      onClick={() => toggleFavorite(Number(postId))}
      className="flex items-center gap-2"
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
