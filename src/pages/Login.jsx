import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";
const Login = () => {
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
          <button type="button" className="btn  btn-secondary capitalize ">
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
