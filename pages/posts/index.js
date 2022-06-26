import Posts from "../../components/posts";

function BlogPage({ posts }) {
  return (
    <>
      <h1>Blog Post Page</h1>
      <Posts posts={posts} />
    </>
  );
}

export default BlogPage;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data.slice(0, 3),
    },
  };
}
