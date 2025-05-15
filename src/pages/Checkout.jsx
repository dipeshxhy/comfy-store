import { useSelector } from "react-redux";
import { CartTotals, CheckoutForm, SectionTitle } from "../components";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

export const loader = (store) => () => {
  const user = store.getState().userState.user;
  if (!user) {
    toast.warn("You must be logged in to checkout");
    return redirect("/login");
  }
};

const Checkout = () => {
  const cartTotal = useSelector((state) => state.cartState.cartTotal);
  if (cartTotal === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }
  return (
    <>
      <SectionTitle text="place your order" />
      <div className="grid mt-8 gap-8 md:grid-cols-2">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};
export default Checkout;
