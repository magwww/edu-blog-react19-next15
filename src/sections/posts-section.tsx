import PostCard from "@/components/post-card";

// TODO: get real data

const posts = [
  {
    id: 1,
    userId: 1,
    title: "Recusandae consequuntur expedita et cum",
    category: { name: "WIEDZA", color: "textt-[#444E8D]" },
    date: "14.02.2012",
    body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    id: 2,
    userId: 1,
    title: "Expedita et cum reprehenderit molestiae",
    category: { name: "WIEDZA", color: "text-[#A98D40]" },
    date: "14.02.2012",
    body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
  },
];

const PostsSection = () => {
  return (
    <section className="py-10">
      <h2 className="mb-8 font-bold text-[#363B5C] text-2xl">Wpisy</h2>
      <div className="flex lg:flex-row flex-col gap-10 w-full">
        {posts.map((post) => (
          <PostCard key={post.id} {...{ post }} />
        ))}
      </div>
    </section>
  );
};

export default PostsSection;
