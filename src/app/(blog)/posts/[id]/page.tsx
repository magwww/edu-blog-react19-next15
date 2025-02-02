import Link from "next/link";
import { ArrowLeft } from "react-feather";
import { type Post } from "@/types";
import FavoriteButton from "@/components/favorite-button";
import PostDetails from "@/components/post-details";

export async function generateStaticParams() {
  const posts: Post[] = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=16"
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

  const { title, body } = post;

  return (
    <div className="flex flex-col lg:px-24 lg:py-16 p-4 w-[85%]">
      <div className="flex lg:flex-row flex-col justify-between gap-8 lg:gap-0 w-full">
        <Link href="/" className="group flex items-center gap-2">
          <ArrowLeft className="transition group-hover:-translate-x-2 duration-300 delay-50 ease-in-out size-6" />
          <span className="font-bold text-[#363B5C] text-2xl">
            Blog edukacyjny
          </span>
        </Link>
        <FavoriteButton postId={id} />
      </div>
      <PostDetails {...{ title, body }} />
    </div>
  );
}
