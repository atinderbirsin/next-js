import { useRouter } from 'next/router';
import Link from 'next/link';

function Home() {
  const router = useRouter();

  const onButtonClick = (link) => {
    router.push(link);
  };

  return (
    <>
      <h1>Home Page</h1>
      <Link href="/blog">
        <a>blog</a>
      </Link>
      <Link href="/product">
        <a>product</a>
      </Link>
      <button onClick={() => onButtonClick('/about')}>Place Order</button>

      <button onClick={() => onButtonClick('/product/44')}>Place Order</button>
    </>
  );
}

export default Home;
