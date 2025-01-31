import Link from "next/link";
import { type Post } from "@/app/types";

export default async function Home() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await data.json();

  return (
    <main className="flex flex-col gap-8 row-start-2 p-8">
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <p>id: {post.id}</p>
            <p>title: {post.title}</p>
            <p>body:{post.body.substring(0, 60)}...</p>
            <Link href={`/posts/${post.id.toString()}`}>Zobacz więcej</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
