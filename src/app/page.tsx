import postCategoriesAndDate from "@/data/post-categories-and-date";
import CategoriesSection from "@/sections/categories-section";
import PostsSection from "@/sections/posts-section";
import { type EnhancedPost, type Post } from "@/types";

export function enhancePosts(posts: Post[]): EnhancedPost[] {
  return posts.map((post, index) => {
    const category =
      postCategoriesAndDate[index % postCategoriesAndDate.length];

    return {
      ...post,
      ...category,
    };
  });
}

export default async function Home() {
  //TODO: errors handling
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=16"
  );
  const posts: Post[] = await data.json();

  const enhancedPosts = enhancePosts(posts);

  return (
    <div className="flex flex-col p-4 lg:p-24 w-full">
      <h1 className="mb-8 font-bold text-[#363B5C] text-2xl">
        Blog Edukacyjny
      </h1>
      <CategoriesSection />
      <PostsSection {...{ enhancedPosts }} />
    </div>
  );
}
