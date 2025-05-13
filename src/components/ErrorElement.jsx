import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h2 className="text-4xl font-bold">There is error...</h2>
    </div>
  );
};
export default ErrorElement;
