import { render, screen } from "@testing-library/react";
import PostDetails from "../src/components/post-details";

describe("PostDetails", () => {
  it("renders title and body passed as props", () => {
    const mockTitle = "Testowy tytuł";
    const mockBody = "Testowa treść posta.";

    render(<PostDetails title={mockTitle} body={mockBody} />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      mockTitle
    );
    expect(screen.getByText(mockBody)).toBeInTheDocument();
  });

  it('renders element with text "dodaj do ulubionych"', () => {
    render(<PostDetails title="Test" body="Test" />);

    const favoriteElement = screen.getByText("dodaj do ulubionych");
    expect(favoriteElement).toBeInTheDocument();
  });
});
