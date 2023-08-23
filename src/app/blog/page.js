import delay from "@/lib/delay";
import getAllPost from "@/lib/getAllPost";
import Link from "next/link";

export default async function Blog() {
  // await delay(2000);
  const posts = await getAllPost();
  console.log(posts);

  return (
    <div>
      <section>
        <h1 className="font-bold text-lg pb-5">Blog Posts</h1>
        {posts.map((post) => {
          return (
            <Link href={`/blog/${post.id}`}>
              <p key={post.id} className="pb-5">
                {post.id}: {post.title}
              </p>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
