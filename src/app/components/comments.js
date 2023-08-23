export default async function Comments({commentsPromise}) {
  const comments = await commentsPromise;
  return (
    <div>
      <div className="mt-10">
        <h2 className="font-bold">Posts Comments</h2>
      </div>
      <div className="mt-4">
        {comments.map((comment) => (
          <p className="pb-3" key={comment.id}>
            {comment.id}-{comment.body}
          </p>
        ))}
      </div>
    </div>
  );
}
