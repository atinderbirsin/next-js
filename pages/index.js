import Link from "next/link";

function Home() {
  return (
    <>
      <h1>HomePage</h1>
      <Link href="/users">
        <a>Users</a>
      </Link>
    </>
  );
}

export default Home;
