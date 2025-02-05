import { Link, useLoaderData } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { motion } from "framer-motion";
import { useState } from "react";
const Brands = () => {
  const result = useLoaderData();
  const onSellBrands = result.data.brands;
  const[searchBrand, setSearchBrand]= useState('');
  const handleSearch = (e)=>{
    e.preventDefault();
    setSearchBrand(e.target.value.toLowerCase());
  }
  const newSearchBrands= onSellBrands.filter(brand =>(
    brand.brand_name.toLowerCase().includes(searchBrand)
  ))
  return (
    <div>
      <div className=" pt-16 px-3 flex justify-between items-center">
        <h1 className="text-xl md:text-3xl text-logo font-bold">All Brands</h1>
        <label className="input w-1/2   border border-logo flex items-center gap-2">
          <input onKeyUp={handleSearch} type="search" className="grow text-xs md:text-base" placeholder="Search by brand name" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-6 w-6 opacity-70 text-logo  "
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div className="divider divider-neutral px-4" />
      <div className="grid grid-cols-1 gap-6 pt-8 pb-16">
        {newSearchBrands.map((brand) => (
          <div
            className="bg-white p-4 rounded-3xl shadow-md mb-2 border border-logo mx-3 grid grid-cols-1 md:grid-cols-3  gap-6 md:gap-3 "
            key={brand._id}
          >
            <div className="flex flex-col justify-center items-center">
              <img
                src={brand.brand_logo}
                alt={brand.brandName}
                className="h-32 w-auto rounded-2xl"
              />
              <p className="text-lg font-medium pt-2">
                {" "}
                Brand : {brand.brand_name}
              </p>
              <p className="text-lg font-medium flex items-center gap-2">
                {" "}
                Rating :{" "}
                <Rating name="read-only" value={brand.rating} readOnly />
              </p>
            </div>
            <div className="flex flex-col justify-center ">
              <h2 className="text-3xl text-center pb-1 font-bold text-logo mt-4">
                {brand.brand_name}
              </h2>
              <p className="text-sm text-center font-medium flex items-center gap-2 pt-3">
                {brand.description}
              </p>
            </div>
            <div className=" flex flex-col justify-center items-center gap-2 pt-2">
              {brand.isSaleOn ? (
                <>
                  <motion.div
                    className="text-white text-sm text-center bg-green-logo  p-4 rounded-full hover:bg-logo"
                    animate={{ y: [0, -15, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut",
                    }}
                  >
                    Sales
                    <br /> is on
                  </motion.div>
                  <div className="flex justify-center items-center">
                    <Link to ={`/brands/${brand.brand_name}`} className="bg-logo hover:bg-green-logo px-4 py-2 rounded-xl text-white font-bold">
                      View Coupons
                    </Link>
                  </div>
                </>
              ) : (
                <div className="flex justify-center items-center">
                  <button disabled className="bg-gray-300  px-4 py-2 rounded-xl text-black font-bold">
                    Not Available Now
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
