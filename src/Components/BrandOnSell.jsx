import { Link, useLoaderData } from "react-router-dom";

const BrandOnSell = () => {
  const result = useLoaderData();
  const onSellBrands = result.data.brands;

  return (
    <div className="py-6 md:py-12 px-2 md:px-3 xl:px-0" data-aos="slide-up">
      <div className="divider text-logo divider-neutral pb-6 lg:pb-12">
        <h2 className="text-xl md:text-3xl font-bold text-center">Brands on sell</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-6 pt-8">
        {onSellBrands.map(
          (brand) =>
            brand.isSaleOn && (
              <Link
                to={`/brands/${brand.brand_name}`}
                className="bg-white p-6 rounded-3xl shadow-md mb-2 border border-logo mx-3 "
                key={brand._id}
                data-aos="flip-left"
              >
                <div className="flex justify-center items-center">
                  <img
                    src={brand.brand_logo}
                    alt={brand.brandName}
                    className="h-32 md:h-44 w-full rounded-2xl"
                  />
                </div>
                <div className="flex flex-col pt-2">
                  <h2 className="text-3xl text-center pb-1 font-bold text-logo mt-4">
                    {brand.brand_name}
                  </h2>
                  <div className="divider pb-4" />
                  <div className="flex justify-between items-center pb-3">
                    <p className="text-lg font-semibold text-black">Category</p>
                    <p className="text-gray-700 font-semibold">
                      {brand.category}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold text-black">
                      Total Coupon
                    </p>
                    <p className="text-text-gray-700 font-semibold">
                      0{brand.coupons.length}
                    </p>
                  </div>
                </div>
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export default BrandOnSell;
