import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="w-96 card shadow-lg bg-base-100 flex flex-col gap-y-4 p-8"
      >
        <h4 className="text-3xl font-bold text-center">Register</h4>
        <FormInput type="text" label="username" name="username" />
        <FormInput type="email" label="email" name="email" />
        <FormInput type="password" label="password" name="password" />
        <div className="mt-4">
          <SubmitBtn text="Register" />
        </div>
        <p className="text-center">
          Already a member?{" "}
          <Link
            to="/login"
            className="text-primary  capitalize link duration-200 link-hover"
          >
            Login
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Register;
