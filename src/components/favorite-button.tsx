"use client";

import { useState, useEffect, useRef } from "react";
import { Star } from "react-feather";

const FavoriteButton = ({ postId }: { postId: string }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.includes(postId));
  }, []);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  // Debounce saving to local storage
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

      if (isFavorite && !favorites.includes(postId)) {
        favorites.push(postId);
      } else if (!isFavorite) {
        const newFavorites = favorites.filter((id: string) => id !== postId);
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
        return;
      }

      localStorage.setItem("favorites", JSON.stringify(favorites));
    }, 300);
  }, [isFavorite]);

  return (
    <button onClick={toggleFavorite} className="flex items-center gap-2">
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
