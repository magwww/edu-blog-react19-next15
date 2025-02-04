import postCategoriesAndDate from "@/data/post-categories-and-date";
import CategoriesSection from "@/sections/categories-section";
import PostsSection from "@/sections/posts-section";
import { type EnhancedPost, type Post } from "@/types";
import { getPosts } from "@/services/getPosts";

export const POSTS_LIMIT = 16;

function enhancePosts(posts: Post[]): EnhancedPost[] {
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
  const posts: Post[] = await getPosts();
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
