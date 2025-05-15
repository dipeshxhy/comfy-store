import { useLoaderData } from "react-router-dom";
import { Filters, ProductsContainer, PaginationContainer } from "../components";
import { customFetch } from "../utils";

const productsQuery = (params) => {
  const { search, company, price, shipping, page, sort } = params;
  return {
    queryKey: [
      "products",
      search ?? "",
      company ?? "all",
      price ?? 100000,
      shipping ?? "all",
      page ?? 1,
      sort ?? "a-z",
    ],
    queryFn: () => customFetch("/products", { params }),
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    const response = await queryClient.ensureQueryData(productsQuery(params));
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
