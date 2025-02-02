import { FC } from "react";
import Link from "next/link";
import { ArrowRight } from "react-feather";
import { EnhancedPost } from "@/types";

const PostCard: FC<EnhancedPost> = ({
  categoryName,
  categoryColor,
  title,
  id,
  date,
  body,
}) => {
  return (
    <article className="bg-gray-100 px-8 py-12 rounded-[60px] rounded-tr-none rounded-bl-none max-w-xs shrink-0">
      <header>
        <span className={`font-bold ${categoryColor} text-sm underline italic`}>
          {categoryName}
        </span>
        <h3 className="mt-4 font-[Cormorant-Garamond] font-bold text-xl">
          {title}
        </h3>
        <p className="block my-6 font-[Cormorant-Garamond] font-semibold text-gray-600 text-sm">
          {date}
        </p>
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
