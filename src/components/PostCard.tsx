import { type Post } from "@/types";
import { FC } from "react";
import Link from "next/link";
import { ArrowRight } from "react-feather";

type PostCardProps = {
  post: Post & {
    category: { name: string; color: string };
    date: string;
  };
};

const PostCard: FC<PostCardProps> = ({ post }) => {
  const { category, title, id, date, body } = post;
  return (
    <article className="bg-gray-100 shadow-sm px-8 py-12 rounded-3xl rounded-tr-none rounded-bl-none max-w-xs">
      <header>
        <span
          className={`font-bold ${category.color} text-sm underline italic`}
        >
          {category.name}
        </span>
        <h3 className="mt-4 font-[Cormorant-Garamond] font-bold text-xl">
          {title}
        </h3>
        <time
          dateTime={date}
          className="block my-6 font-[Cormorant-Garamond] font-semibold text-gray-600 text-sm"
        >
          {date}
        </time>
      </header>
      <p className="text-gray-700 text-sm">{body}</p>
      <footer className="mt-8">
        <Link
          href={`/posts/${id.toString()}`}
          className="group flex items-center gap-1 font-semibold text-sm hover:underline"
        >
          <span>zobacz więcej</span>
          <ArrowRight className="transition group-hover:translate-x-1 duration-300 delay-50 ease-in-out size-4" />
        </Link>
      </footer>
    </article>
  );
};

export default PostCard;
