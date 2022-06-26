import Link from "next/link";

function Posts({ posts }) {
  return (
    <>
      {posts.map((post) => {
        return (
          <>
            <Link href={`/posts/${post.id}`} passHref>
              <a>
                Post Number {post.id} about {post.title}
              </a>
            </Link>
            <br />
          </>
        );
      })}
    </>
  );
}

export default Posts;
