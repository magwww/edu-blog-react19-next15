"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "react-feather";

type CarouselProps = {
  children: ReactNode[];
  loop?: boolean;
};

export default function Carousel({ children, loop = true }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="-top-6 left-1/2 absolute flex gap-2 -translate-x-1/2">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={cn(
              "w-3 h-3 rounded-full transition border border-black",
              selectedIndex === index ? "bg-black" : ""
            )}
          />
        ))}
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {children.map((child, index) => (
            <div key={index} className="flex justify-center p-4 min-w-full">
              {child}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="top-1/2 -left-4 absolute p-2 -translate-y-1/2"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={scrollNext}
        className="top-1/2 -right-4 absolute p-2 -translate-y-1/2"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
