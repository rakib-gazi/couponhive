import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { Link, useLoaderData } from "react-router-dom";
const TopBrands = () => {
  const result = useLoaderData();
  const allBrands = result.data.brands || [];
  return (
    <div className="py-6 lg:py-12 mt-0 lg:mt-12 px-2 md:px-3 xl:px-0" data-aos="zoom-in">
      <div className="divider text-logo divider-neutral pb-6 lg:pb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Top Brands</h2>
      </div>
      <Marquee pauseOnHover={true} speed={150}>
        <div className="flex">
          {allBrands.map((brand) => (
            <Link to={`/brands/${brand.brandName}`}
              className="bg-white p-6 rounded-3xl shadow-md mb-2 border border-logo mx-3 "
              key={brand.id}
            >
              <img
                src={brand.logo}
                alt={brand.brandName}
                className="h-32 lg:h-60 w-60 lg:w-80 rounded-2xl"
              />
            </Link>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default TopBrands;
