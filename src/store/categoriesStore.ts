import { create } from "zustand";

interface CategoriesStoreTypes {
  selectedCategories: string[];
  toggleCategory: (category: string) => void;
}

export const categoriesStore = create<CategoriesStoreTypes>((set, get) => ({
  selectedCategories: [],
  toggleCategory: (category: string) => {
    const { selectedCategories } = get();
    const isAlreadySelected = selectedCategories.includes(category);

    set({
      selectedCategories: isAlreadySelected
        ? selectedCategories.filter((selected) => selected !== category)
        : [...selectedCategories, category],
    });
  },
}));
