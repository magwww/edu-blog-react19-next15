"use client";

import { FC } from "react";
import Image from "next/image";
import { type Category } from "@/types";
import { cn } from "@/lib/utils";
import { categoriesStore } from "@/store/categoriesStore";
import { useShallow } from "zustand/shallow";

const CategoryCard: FC<Category> = ({
  image,
  title,
  bgColor,
  textColor,
  icon,
}) => {
  const { selectedCategories, toggleCategory } = categoriesStore(
    useShallow((state) => ({
      selectedCategories: state.selectedCategories,
      toggleCategory: state.toggleCategory,
    }))
  );

  const isActive = selectedCategories.includes(title);

  return (
    <button
      onClick={() => toggleCategory(title)}
      className={cn(
        "w-full max-w-[340px] lg:max-w-[366px] aspect-[0.8] rounded-[60px] rounded-tr-none rounded-bl-none overflow-hidden",
        textColor
      )}
      aria-pressed={isActive}
      aria-label={`Filtruj po kategorii ${title}`}
    >
      <div className="relative w-full h-1/2">
        <Image
          src={image}
          alt={`Obrazek kategorii ${title}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 25vw"
          className="object-cover"
          priority
        />
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
          alt=""
          width={50}
          height={50}
          className="w-auto h-auto"
          aria-hidden="true"
        />
      </div>
    </button>
  );
};

export default CategoryCard;
