export default async function getAllPost() {
  console.log("Fetching Posts...");
  
  const res = await fetch(
    "https://jsonplaceholder.typicodes.com/posts?_limit=5",{
      next: {
        revalidate: 3600,
      }
    }
  );
  if (!res.ok) {
    throw new Error("Error Fetching Posts");
  }
  return res.json();
}
