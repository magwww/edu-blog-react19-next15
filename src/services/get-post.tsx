import { Post } from "@/types";
import { blogApi } from "./blog-api";

export const getPost = async (id: number) => {
  return blogApi<Post>(`/posts/${id}`);
};
