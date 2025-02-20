import { Link } from "react-router-dom";
import error from "../assets/error.jpg";
const ErrorPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-8 mb-12">
        <img
          src={error}
          alt="404 Error , Page not found"
          className="h-96 w-96 rounded-3xl pt-12"
        />
        <Link
          to="/"
          className="text-xl text-white bg-logo rounded-full px-8 py-2 font-semibold"
        >
          Go Back
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
