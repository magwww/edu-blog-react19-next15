import { Post } from "@/types";
import { blogApi } from "./blogApi";
import { POSTS_LIMIT } from "@/app/page";

export const getPosts = async (limit = POSTS_LIMIT) => {
  return blogApi<Post[]>(`/posts?_limit=${limit}`);
};
