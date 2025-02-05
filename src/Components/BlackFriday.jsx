import { Link } from "react-router-dom";

const BlackFriday = () => {
  return (
    <div className="px-2 md:px-3 xl:px-0">
      <div
        className="bg-black-friday rounded-3xl py-8 md:py-12 lg:py-16 bg-no-repeat bg-cover "
        data-aos="slide-up"
      >
        <div className=" flex flex-col justify-center items-center">
          <h1 className="text-white uppercase text-3xl md:text-4xl lg:text-5xl font-extrabold">
            Black friday
          </h1>
          <p className="text-white text-base lg:text-lg font-bold uppercase py-3">
            Save BiG on Black Friday deals!
          </p>
          <Link
            to={"/brands"}
            className="text-white px-6 md:px-8 lg:px-12  py-2 md:py-4 bg-logo text-base lg:text-xl font-bold rounded-xl mt-4"
          >
            Claim Deals
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlackFriday;
