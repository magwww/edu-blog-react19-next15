import { FC } from "react";
import Image from "next/image";
import { type PostDetails } from "@/types";

const PostDetails: FC<PostDetails> = ({ title, body }) => {
  return (
    <article className="flex flex-col gap-8 py-8 lg:py-12">
      <header>
        <h1 className="font-[Cormorant-Garamond] font-bold text-[#363B5C] text-2xl">
          {title}
        </h1>
      </header>
      <p className="text-gray-700 text-sm">{body}</p>
      <div className="relative rounded-2xl w-full overflow-hidden aspect-[2/1]">
        <Image
          src="/post-details-image.jpg"
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 70vw"
          className="object-cover"
          priority
        />
      </div>
    </article>
  );
};

export default PostDetails;
