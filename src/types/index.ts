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
