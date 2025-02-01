import { FC } from "react";

import Image from "next/image";
import { type Category } from "@/types";
import { cn } from "@/lib/utils";

const CategoryCard: FC<Category> = ({
  image,
  title,
  bgColor,
  textColor,
  icon,
}) => {
  return (
    <button
      className={`rounded-[60px] rounded-tr-none rounded-bl-none w-[340px] h-[433px] lg:w-[366px] lg:h-[457px] text-${textColor}`}
    >
      <div className="relative h-1/2">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-2xl"
          priority
        />
      </div>
      <div
        className={cn(
          "flex flex-col gap-4 justify-center items-center rounded-b-2xl h-1/2 text-white",
          bgColor
        )}
      >
        <span className="font-semibold text-xl">{title}</span>
        <Image src={icon} alt={`${title} icon`} width={50} height={50} />
      </div>
    </button>
  );
};

export default CategoryCard;
