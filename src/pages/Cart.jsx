import { useSelector } from "react-redux";
import { CartItemsList, CartTotals, SectionTitle } from "../components";
import { Link } from "react-router-dom";

const Cart = () => {
  const { user } = useSelector((state) => state.userState);
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);
  if (numItemsInCart === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }
  return (
    <>
      <SectionTitle text="shopping cart" />
      <div className="mt-8 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:ml-4">
          <CartTotals />
          {user ? (
            <Link to="/checkout" className="btn btn-primary btn-block mt-4">
              proceed to checkout
            </Link>
          ) : (
            <Link to="/login" className="btn btn-primary btn-block mt-4">
              please login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
export default Cart;
