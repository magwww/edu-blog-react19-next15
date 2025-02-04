import Link from "next/link";
import { ArrowLeft } from "react-feather";
import { type Post } from "@/types";
import FavoriteButton from "@/components/favorite-button";
import PostDetails from "@/components/post-details";
import { notFound } from "next/navigation";
import { POSTS_LIMIT } from "@/app/page";
import { getPost } from "@/services/getPost";
import { getPosts } from "@/services/getPosts";

export async function generateStaticParams() {
  const posts: Post[] = await getPosts();

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

  const post: Post = await getPost(Number(id));

  //16 is a number of posts we are rendering
  if (Number(id) > POSTS_LIMIT) {
    notFound();
  }

  const { title, body } = post;

  return (
    <div className="flex flex-col lg:px-24 lg:py-16 p-4 lg:w-[70%]">
      <div className="flex lg:flex-row flex-col justify-between gap-8 lg:gap-0 w-full">
        <Link href="/" className="group flex items-center gap-2">
          <ArrowLeft className="transition group-hover:-translate-x-2 duration-300 delay-50 ease-in-out size-6" />
          <span className="font-bold text-[#363B5C] text-3xl lg:text-4xl">
            Blog edukacyjny
          </span>
        </Link>
        <FavoriteButton postId={id} />
      </div>
      <PostDetails {...{ title, body }} />
    </div>
  );
}
