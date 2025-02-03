"use client";

import { FC } from "react";
import Image from "next/image";
import { type Category } from "@/types";
import { cn } from "@/lib/utils";
import { usePosts } from "@/context/posts-context";

const CategoryCard: FC<Category> = ({
  image,
  title,
  bgColor,
  textColor,
  icon,
}) => {
  const { toggleCategory } = usePosts();

  return (
    <button
      onClick={() => toggleCategory(title)}
      className={cn(
        "w-full max-w-[340px] lg:max-w-[366px] aspect-[0.8] rounded-[60px] rounded-tr-none rounded-bl-none overflow-hidden",
        textColor
      )}
    >
      <div className="relative w-full h-1/2">
        <Image src={image} alt={title} fill className="object-cover" priority />
      </div>
      <div
        className={cn(
          "flex flex-col gap-4 justify-center items-center h-1/2 text-white",
          bgColor
        )}
      >
        <span className="font-semibold lg:text-xl">{title}</span>
        <Image
          src={icon}
          alt={`${title} icon`}
          width={50}
          height={50}
          className="w-auto h-auto"
        />
      </div>
    </button>
  );
};

export default CategoryCard;
