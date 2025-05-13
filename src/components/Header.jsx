import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-neutral py-3 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
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
      </div>
    </header>
  );
};
export default Header;
