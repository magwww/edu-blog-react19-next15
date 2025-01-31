import Link from "next/link";
import { ArrowLeft } from "react-feather";
import { type Post } from "@/app/types";

export async function generateStaticParams() {
  const posts: Post[] = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((res) => res.json());

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function Post({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post: Post = await data.json();

  return (
    <main className="flex flex-col gap-8 row-start-2 p-8">
      <Link href="/" className="group flex items-center gap-2">
        <ArrowLeft className="transition group-hover:-translate-x-2 duration-300 delay-50 ease-in-out size-4" />
        <span>Wróć do listy postów</span>
      </Link>
      <h1>{post.title}</h1>
      <p>Post id: {id}</p>
      <p>post body: {post.body}</p>
    </main>
  );
}
