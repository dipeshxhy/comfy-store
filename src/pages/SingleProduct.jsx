import { useLoaderData } from "react-router-dom";
import { formatPrice, customFetch, generateAmountOptions } from "../utils";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

export const loader = async ({ params }) => {
  const resp = await customFetch(`/products/${params.id}`);

  return { product: resp.data.data };
};

const SingleProduct = () => {
  const { product } = useLoaderData();

  console.log(product);
  const { title, price, image, description, company, colors, category } =
    product.attributes;
  const dollarAmount = formatPrice(price);

  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const cartProduct = {
    cartID: product.id + mainColor,
    productID: product.id,
    title,
    price,
    image,
    company,
    amount,
    productColor: mainColor,
  };
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      <div className="mt-6 grid lg:grid-cols-2 gap-y-8 lg:gap-x-16">
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover lg:w-full rounded-lg"
        />
        <div>
          <h1 className="text-3xl font-bold capitalize">{title}</h1>
          <span className="text-neutral-content text-lg font-bold mt-2">
            {company}
          </span>
          <p className="mt-3 text-xl ">{dollarAmount}</p>

          <p className="mt-6 leading-8">{description}</p>
          <div className="mt-6">
            <h2 className="text-xl font-bold capitalize tracking-wider">
              Colors
            </h2>
            {/* BUTTON */}
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    className={`h-6 w-6 mr-2 badge rounded-full ${
                      mainColor === color ? "border-2 border-secondary" : ""
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setMainColor(color)}
                  ></button>
                );
              })}
            </div>
            {/* AMOUNT */}
            <div className="form-control mt-2 w-full max-w-xs">
              <label className="label">
                <h4 className="text-md font-medium tracking-wider capitalize">
                  amount
                </h4>
              </label>
              <select
                className="select select-secondary select-bordered select-md"
                value={amount}
                onChange={handleAmount}
              >
                {generateAmountOptions(10)}
              </select>
            </div>
          </div>
          {/* CART BUTTON */}
          <div className="mt-6">
            <button
              className="btn btn-primary btn-md"
              onClick={handleAddToCart}
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;
