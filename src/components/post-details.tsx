import { FC } from "react";
import Image from "next/image";
import { type PostDetails } from "@/types";

const PostDetails: FC<PostDetails> = ({ title, body }) => {
  return (
    <div className="flex flex-col gap-8 py-8 lg:py-12">
      <h1 className="font-[Cormorant-Garamond] font-bold text-[#363B5C] text-2xl">
        {title}
      </h1>
      <p className="text-gray-700 text-sm">{body}</p>
      <Image
        src="/post-details-image.jpg"
        alt={title}
        width={1000}
        height={500}
        priority
      />
    </div>
  );
};

export default PostDetails;
