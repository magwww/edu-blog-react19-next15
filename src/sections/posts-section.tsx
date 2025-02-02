import PostCard from "@/components/post-card";
import { type EnhancedPost } from "@/types";

const PostsSection = ({ enhancedPosts }: { enhancedPosts: EnhancedPost[] }) => {
  return (
    <section className="py-10">
      <h2 className="mb-8 font-bold text-[#363B5C] text-2xl">Wpisy</h2>
      <div className="flex lg:flex-row flex-col flex-wrap gap-10 w-full">
        {enhancedPosts.map((post) => (
          <PostCard key={post.id} {...{ ...post }} />
        ))}
      </div>
    </section>
  );
};

export default PostsSection;
