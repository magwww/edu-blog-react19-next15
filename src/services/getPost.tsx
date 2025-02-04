import { Post } from "@/types";
import { blogApi } from "./blogApi";

export const getPost = async (id: number) => {
  return blogApi<Post>(`/posts/${id}`);
};
