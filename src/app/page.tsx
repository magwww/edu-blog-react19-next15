import CategoriesSection from "@/sections/categories-section";
import PostsSection from "@/sections/posts-section";
import { type Post } from "@/types";

export default async function Home() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await data.json();

  return (
    <div className="flex flex-col p-4 lg:p-16 w-full">
      <h1 className="mb-16 font-bold text-[#363B5C] text-2xl">
        Blog Edukacyjny
      </h1>
      <CategoriesSection />
      <PostsSection />
    </div>
  );
}
