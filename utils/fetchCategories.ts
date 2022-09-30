export const fetchCategories = async () => {
  const res = await fetch(
    `https://ecommerce-app-with-nextjs-typescript-redux-srtipe-sanity.vercel.app/api/getCategories`
  );

  const data = await res.json();
  const categories: Category[] = data.categories;

  return categories;
};
