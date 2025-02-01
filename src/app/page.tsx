import PostsSection from "@/sections/PostsSection";
import { type Post } from "@/types";

export default async function Home() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await data.json();

  return (
    <main className="flex flex-col p-4 lg:p-10 w-full">
      <PostsSection />
    </main>
  );
}
