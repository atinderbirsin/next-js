function BlogPost({ post }) {
  return (
    <div>
      <h1>{post.userId}</h1>
      <h2>{post.id}</h2>
      <h3>{post.title}</h3>
      <h4>{post.body}</h4>
      <hr />
    </div>
  );
}

export default BlogPost;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
}
