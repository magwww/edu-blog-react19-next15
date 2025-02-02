import Carousel from "@/components/carousel";
import CategoryCard from "@/components/category-card";
import categories from "@/data/categories";

const CategoriesSection = () => {
  return (
    <section className="bg-[#F4F4F4] -mx-4 lg:-mx-24 px-4 lg:px-24 py-8 lg:pt-12 lg:pb-20">
      <h2 className="mb-10 lg:mb-8 font-bold text-[#363B5C] text-2xl">
        Kategorie
      </h2>
      {/* MOBILE */}
      <div className="lg:hidden">
        <Carousel>
          {categories.map((category) => (
            <CategoryCard key={category.title} {...{ ...category }} />
          ))}
        </Carousel>
      </div>

      {/* DESKTOP */}
      <div className="lg:flex lg:justify-between lg:gap-10 hidden w-full lg:visible">
        {categories.map((category) => (
          <CategoryCard key={category.title} {...{ ...category }} />
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
