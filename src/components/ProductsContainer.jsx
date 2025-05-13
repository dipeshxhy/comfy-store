import { useLoaderData } from "react-router-dom";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { useState } from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
const ProductsContainer = () => {
  const { meta } = useLoaderData();
  const totalProducts = meta.pagination.total;
  const [layout, setLayout] = useState("grid");
  const activestyles = (pattern) => {
    return `btn text-xl btn-circle btn-md ${
      pattern === layout
        ? ` btn-primary text-primary-content`
        : `btn-ghost text-neutral-content`
    }`;
  };

  return (
    <div className="py-4">
      {/* HEADER */}
      <div className="border-b border-base-300 pb-4 flex justify-between items-center">
        {totalProducts} product{totalProducts > 1 && "s"}
        <div className="flex ">
          <button
            className={activestyles("grid")}
            onClick={() => setLayout("grid")}
          >
            <BsFillGridFill />
          </button>
          <button
            className={activestyles("list")}
            onClick={() => setLayout("list")}
          >
            <BsList />
          </button>
        </div>
      </div>

      {/* PRODUCTS */}
      {totalProducts === 0 ? (
        <h2 className="text-2xl font-bold">No products found</h2>
      ) : layout === "grid" ? (
        <ProductsGrid />
      ) : (
        <ProductsList />
      )}
      {/* <ProductsGrid /> */}
    </div>
  );
};
export default ProductsContainer;
