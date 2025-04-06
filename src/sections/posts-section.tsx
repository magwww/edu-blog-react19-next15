"use client";

import PostCard from "@/components/post-card";
import { favoritesStore } from "@/store/favoritesStore";
import { categoriesStore } from "@/store/categoriesStore";
import { type EnhancedPost } from "@/types";
import { X } from "react-feather";
import { useShallow } from "zustand/react/shallow";
import { useState } from "react";

const PostsSection = ({ enhancedPosts }: { enhancedPosts: EnhancedPost[] }) => {
  const [showOnlyFavorites, setShowOnlyFavorites] = useState<boolean>(false);

  const { favorites } = favoritesStore(
    useShallow((state) => ({
      favorites: state.favorites,
    }))
  );

  const { selectedCategories, toggleCategory } = categoriesStore(
    useShallow((state) => ({
      selectedCategories: state.selectedCategories,
      toggleCategory: state.toggleCategory,
    }))
  );

  const filteredPosts = enhancedPosts
    .filter((post) =>
      selectedCategories.length > 0
        ? selectedCategories.includes(post.categoryName)
        : true
    )
    .filter((post) => (showOnlyFavorites ? favorites.includes(post.id) : true));

  return (
    <section className="py-10">
      <div className="flex lg:flex-row flex-col justify-between items-center mb-8">
        <div className="flex lg:flex-row flex-col items-center lg:gap-4">
          <h2 className="mb-1 lg:mb-0 font-bold text-[#363B5C] text-2xl">
            Wpisy
          </h2>
          {!!selectedCategories.length && (
            <div className="my-4 lg:my-0">
              <ul className="flex lg:flex-row flex-col items-center gap-3">
                {selectedCategories.map((category) => (
                  <li
                    key={category}
                    className="flex items-center gap-1 font-bold text-[#8E2F3F] underline"
                  >
                    <span>{category}</span>
                    <button onClick={() => toggleCategory(category)}>
                      <X className="size-4" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2 mt-1 lg:mt-1">
          <button
            className={
              showOnlyFavorites ? "text-[#8E2F3F] font-bold underline" : ""
            }
            onClick={() => setShowOnlyFavorites(true)}
          >
            ULUBIONE
          </button>
          <span>/</span>
          <button
            className={
              showOnlyFavorites ? "" : "text-[#8E2F3F] font-bold underline"
            }
            onClick={() => setShowOnlyFavorites(false)}
          >
            WSZYSTKIE
          </button>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col flex-wrap gap-10 w-full">
        {filteredPosts.length ? (
          filteredPosts.map((post) => (
            <PostCard key={post.id} {...{ ...post }} />
          ))
        ) : (
          <p>Nie znaleziono postów dla podanych filtrów</p>
        )}
      </div>
    </section>
  );
};

export default PostsSection;
