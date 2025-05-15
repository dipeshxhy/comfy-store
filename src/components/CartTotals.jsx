import { useSelector } from "react-redux";
import { formatPrice } from "../utils";

const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );
  return (
    <div className="card bg-base-200">
      <div className="card-body p-6">
        <p className="flex justify-between items-center border-b border-base-300 pb-4">
          <span className="font-bold capitalize">subtotal</span>
          <span>{formatPrice(cartTotal)}</span>
        </p>
        <p className="flex justify-between items-center border-b border-base-300 pb-4">
          <span className="font-bold capitalize">shipping</span>
          <span>{formatPrice(shipping)}</span>
        </p>
        <p className="flex justify-between items-center border-b border-base-300 pb-4">
          <span className="font-bold capitalize">tax</span>
          <span>{formatPrice(tax)}</span>
        </p>
        <p className="flex justify-between mt-4 items-center  pb-4">
          <span className="font-bold capitalize">order total</span>
          <span>{formatPrice(orderTotal)}</span>
        </p>
      </div>
    </div>
  );
};
export default CartTotals;
