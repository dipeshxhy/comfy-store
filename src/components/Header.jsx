import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../features/user/userSlice";
import { clearCart } from "../features/cart/cartSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userState);
  const handleLogout = () => {
    navigate("/");
    dispatch(clearCart());
    dispatch(logoutUser());
  };

  return (
    <header className="bg-neutral py-3 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
        {/* USER */}
        {user ? (
          <div className="flex GAP-X-2 sm:gap-x-4 items-center">
            <p className="text-xs sm:text-sm">Hello, {user.username}</p>
            <button
              className="btn btn-sm btn-primary btn-outline"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-x-4 justify-center items-center">
            <Link to="/login" className="text-xs sm:text-sm link link-hover ">
              Sign in / Guest
            </Link>
            <Link
              to="/register"
              className="text-xs sm:text-sm  link link-hover  "
            >
              create an account
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
