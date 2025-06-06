import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

const ProductsGrid = () => {
  const { products } = useLoaderData();
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 pt-12 gap-4">
      {products.map((product) => {
        const { title, price, image } = product.attributes;
        const dollarAmount = formatPrice(price);
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="card w-full  shadow-xl hover:shadow-2xl transition duration-300 "
          >
            <figure className="px-4 pt-4">
              <img
                src={image}
                alt={title}
                className="rounded-xl h-64 md:h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title capitalize tracking-wider">{title}</h2>
              <span className="text-secondary">{dollarAmount}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsGrid;
