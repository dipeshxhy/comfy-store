import { Form, useLoaderData, Link } from "react-router-dom";
import FormInput from "./FormInput";
import { FormCheckbox, FormRange, FormSelect } from "./index";

const Filters = () => {
  const { meta, params } = useLoaderData();
  const { search, category, price, company, order, shipping } = params;
  return (
    <Form
      className="bg-base-200 rounded-md p-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8"
      method="get"
      action="/products"
    >
      {/* Form Inputs */}
      <FormInput
        label="Search product"
        type="search"
        name="search"
        size="input-sm"
        defaultValue={search}
      />
      {/* Category */}
      <FormSelect
        label=" select category"
        name="category"
        list={meta.categories}
        size="select-sm"
        defaultValue={category}
      />
      {/* COMPANY */}
      <FormSelect
        label=" select company"
        name="company"
        list={meta.companies}
        size="select-sm"
        defaultValue={company}
      />
      {/* ORDER */}
      <FormSelect
        label="order by"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
        defaultValue={order}
      />
      {/* PRICE */}
      <FormRange
        label="select price"
        name="price"
        size="range-sm"
        price={price}
      />
      {/* FREE SHIPPING */}
      <FormCheckbox
        label="free shipping"
        name="shipping"
        size="checkbox-sm"
        defaultValue={shipping}
      />

      {/* Form Buttons */}
      <button type="submit" className="btn btn-primary btn-sm">
        Search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  );
};

export default Filters;
