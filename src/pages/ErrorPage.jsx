import { Link } from "react-router-dom";
import errorImg from "../assets/404.gif";

const ErrorPage = () => {
  return (
    <section className="grid grid-cols-1 place-items-center mt-10 h-3/5">
      <h1 className="text-5xl font-black">404</h1>

      <img className="w-1/2" src={errorImg} alt="Error" />

      <div className="">
        <h3 className="text-2xl font-bold">Look like you're lost</h3>

        <p className="capitalize my-2">
          the page you are looking for not avaible!
        </p>

        <Link
          className="w-fit bg-orange-500 p-2 rounded text-white block"
          to="/"
        >
          Go to Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
