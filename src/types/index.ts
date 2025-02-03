export type Post = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

export type Category = {
  image: string;
  title: string;
  icon: string;
  textColor: "white" | "black";
  bgColor: "bg-[#444E8D]" | "bg-[#FFBF42]" | "bg-[#D94F4F]" | "bg-[#82E49A]";
};

export type PostCategoryAndDate = {
  categoryName: "WIEDZA" | "INSPIRACJE" | "INTERPRETACJE" | "DOSTĘPNE";
  categoryColor:
    | "text-[#444E8D]"
    | "text-[#FFBF42]"
    | "text-[#D94F4F]"
    | "text-[#82E49A]";
  date: string;
};

export type EnhancedPost = Post & PostCategoryAndDate;

export type PostDetails = Pick<Post, "title" | "body">;
