import Comments from "@/app/components/comments";

import getAllPost from "@/lib/getAllPost";
import getPostComments from "@/lib/getPostComments";
import getSinglePost from "@/lib/getSinglePost";
import {Suspense} from "react";

// export const dynamicParams = false
export default async function SingleBlog({params}) {
  const id = params.id;
  // console.log(id);
  const postPromise = getSinglePost(id);
  const commentsPromise = getPostComments(id);

  // await delay(2000);
  // request in parallel
  // const [singlePost, comments] = await Promise.all([
  //   postPromise,
  //   commentsPromise,
  // ]);

  // incremental data fetching
  const singlePost = await postPromise;
  return (
    <div>
      <section>
        <h1 className="font-bold text-lg pb-5">Single Blog Posts</h1>
        <h2>{singlePost.title}</h2>
        <div>{singlePost.body}</div>

        <div className="mt-6">
          <Suspense fallback={<h3> Loaidng comments...</h3>}>
            <Comments commentsPromise={commentsPromise} />
          </Suspense>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPost();

  return posts.map((post) => ({
    id: "" + post.id,
  }));
}
