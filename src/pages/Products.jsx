import { useLoaderData } from "react-router-dom";
import { Filters, ProductsContainer, PaginationContainer } from "../components";
import { customFetch } from "../utils";

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const response = await customFetch("/products", { params });
  const products = response.data.data;
  const meta = response.data.meta;

  return { products, meta, params };
};

const Products = () => {
  const { products, meta } = useLoaderData();
  console.log(products, meta);
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};
export default Products;
