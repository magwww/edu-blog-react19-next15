"use client";

import PostCard from "@/components/post-card";
import { usePosts } from "@/context/posts-context";
import { type EnhancedPost } from "@/types";
import { X } from "react-feather";

const PostsSection = ({ enhancedPosts }: { enhancedPosts: EnhancedPost[] }) => {
  const {
    favorites,
    showOnlyFavorites,
    setShowOnlyFavorites,
    selectedCategories,
    toggleCategory,
  } = usePosts();

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
        <div className="flex lg:flex-row flex-col items-center">
          <h2 className="mb-1 lg:mb-1 font-bold text-[#363B5C] text-2xl">
            Wpisy
          </h2>
          {!!selectedCategories.length && (
            <div className="my-4 lg:mb-0">
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
        {filteredPosts.map((post) => (
          <PostCard key={post.id} {...{ ...post }} />
        ))}
      </div>
    </section>
  );
};

export default PostsSection;
