import { render, screen } from "@testing-library/react";
import PostsSection from "../src/sections/posts-section";

jest.mock("../src/context/posts-context", () => ({
  usePosts: () => ({
    favorites: [],
    showOnlyFavorites: false,
    setShowOnlyFavorites: jest.fn(),
    selectedCategories: [],
    toggleCategory: jest.fn(),
  }),
}));

jest.mock("../src/components/post-card", () => ({
  __esModule: true,
  default: ({ id }: { id: string }) => <div data-testid="post">{id}</div>,
}));

describe("PostsSection", () => {
  it("renders 16 posts when 16 enhancedPosts are passed to it as props", () => {
    const enhancedPosts = Array.from({ length: 16 }, (_, i) => ({
      id: i,
      categoryName: "WIEDZA" as const,
      categoryColor: "text-[#444E8D]" as const,
      date: "14.02.2025",
      body: "test test",
      title: "Test",
      userId: 1,
    }));

    render(<PostsSection enhancedPosts={enhancedPosts} />);

    const posts = screen.getAllByTestId("post");
    expect(posts).toHaveLength(16);
  });
});
