import delay from "./delay";

export default async function getPostComments(id) {
  //   await delay(2000);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  if (!res.ok) {
    throw new Error("Error Fetching Comments");
  }
  return res.json();
}
