import Link from "next/link";

function Home() {
  return (
    <>
      <h1>Homepage</h1>
      <Link href="/posts">
        <a>Blog Page</a>
      </Link>
    </>
  );
}

export default Home;
