import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="flex flex-1 flex-col justify-center items-center">
      <h1 className="text-secondary-500 font-bold text-[68px]">404</h1>
      <p className="text-primary-700">
        Whoops! Looks like that page doesn't exist.
      </p>
      <Link to={`/`}>
        <p className="mt-[50px] text-secondary-500 underline underline-offset-2 hover:text-secondary-800">
          Go to Home
        </p>
      </Link>
    </div>
  );
};

export default Page404;
