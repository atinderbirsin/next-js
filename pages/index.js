import Link from "next/link";

function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Link href="/blog">
        <a>blog</a>
      </Link>
      <Link href="/product">
        <a>product</a>
      </Link>
    </>
  );
}

export default Home;
