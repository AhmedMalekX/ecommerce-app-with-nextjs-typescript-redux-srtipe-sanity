export const fetchProducts = async () => {
  const res = await fetch(
    `https://ecommerce-app-with-nextjs-typescript-redux-srtipe-sanity.vercel.app/api/getProducts`
  );

  const data = await res.json();
  const products: Product[] = data.products;

  return products;
};
