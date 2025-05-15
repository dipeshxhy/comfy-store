import { toast } from "react-toastify";
import { FormInput, SubmitBtn } from "../components";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { customFetch } from "../utils";
import { loginUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const resp = await customFetch.post("/auth/local", data);
      console.log(resp);
      store.dispatch(loginUser(resp.data));
      toast.success("Login successful");
      return redirect("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "please double check your credentials";
      toast.error(errorMessage);
      return errorMessage;
    }
  };

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginAsGuest = async () => {
    try {
      const resp = await customFetch.post("/auth/local", {
        identifier: "test@test.com",
        password: "secret",
      });
      dispatch(loginUser(resp.data));
      toast.success("welcome guest user!");
      navigate("/");
    } catch (error) {
      toast.error("something went wrong");
      console.log(error);
    }
  };
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="p-8 card w-96 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h1 className="text-2xl text-center font-bold">Login</h1>
        <FormInput
          label="Email"
          type="email"
          name="identifier"
          defaultValue="test@test.com"
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          defaultValue="password"
        />
        <div className="mt-4 flex flex-col gap-y-4">
          <SubmitBtn text="Login" />
          <button
            type="button"
            className="btn  btn-secondary capitalize "
            onClick={loginAsGuest}
          >
            guest user
          </button>
          <p className="text-center">
            Not a member yet?{" "}
            <Link
              to="/register"
              className="link link-hover link-primary duration-200 text-primary   "
            >
              Signup
            </Link>
          </p>
        </div>
      </Form>
    </section>
  );
};
export default Login;
