import { FeaturedProducts, Hero } from "../components";
import { customFetch } from "../utils";
const url = "/products?featured=true";

export const loader = async () => {
  const response = await customFetch.get(url);
  const products = await response.data.data;
  console.log(products);
  return {
    products,
  };
};
const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};
export default Landing;
