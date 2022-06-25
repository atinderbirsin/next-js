import Link from 'next/link';

function Product() {
  const createLink = (id) => {
    return (
      <Link href={`/product/${id}`}>
        <a>Product {id}</a>
      </Link>
    );
  };

  return (
    <>
      <h2>
        <Link href="/product/1">
          <a>Product 1</a>
        </Link>
      </h2>
      <h2>
        <Link href="/product/2">
          <a>Product 2</a>
        </Link>
      </h2>
      <h2>
        <Link href="/product/3">
          <a>Product 3</a>
        </Link>
      </h2>
      <h2>{createLink(100)}</h2>
      <h2>{createLink(55)}</h2>
    </>
  );
}

export default Product;
