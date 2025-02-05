import { Link, useLoaderData, useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
const BrandDetails = () => {
  const { brand } = useParams();
  const result = useLoaderData();
  const allBrands = result.data.brands || [];
  const item = allBrands.find((item) => item.brand_name === brand);
  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
  };
  const handleCopyCode = (code) => {
    toast.success(`"${code}" copied successfully!`, {
      position: "top-center",
      autoClose: 2000,
      pauseOnHover: true,
    });
  };
  return (
    <div className="px-3">
      {" "}
      <div className=" pt-16">
        <div className="flex flex-col md:flex-row justify-center md:justify-normal items-center gap-4">
          <div className="relative">
            <div className="p-4 rounded-3xl shadow-xl ">
              <img src={item?.brand_logo} alt="" className="h-40 rounded-xl" />
            </div>
            <div className="absolute -top-2 -right-2">
              <p className=" animate__animated animate__heartBeat animate__infinite	infinite animate__slower text-white text-xs text-center hover:bg-green-logo p-2 rounded-full bg-pink-600">
                Sales
                <br /> is on
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-end gap-3 px-4">
            <h1 className="text-xl font-bold">{item.brand_name}</h1>
            <p className="text-gray-800 text-sm">Category: {item.category}</p>
            <Rating name="read-only" value={item.rating} readOnly />
            <div>
              <a
                className="hover:bg-green-logo bg-logo text-white font-bold px-4 py-2 rounded-xl text-center "
                href={item.shop_Link}
                target="_blank"
              >
                Visit Website
              </a>
            </div>
            <p className="text-gray-800 text-sm">{item.description}</p>
          </div>
        </div>
      </div>
      <div className="divider text-logo divider-neutral pt-12">
        <h2 className="text-3xl font-bold text-center">Available Coupon</h2>
      </div>
      <div className="pb-12  p-0 md:p-4 rounded-xl">
        <p className="text-logo pb-4">
          Total available Coupons: 0{item.coupons.length}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {item.coupons.map((coupon) => (
            <div
              key={coupon.coupon_code}
              className="px-6 py-6 rounded-3xl shadow-xl mb-4 bg-white flex gap-2"
            >
              <div className="w-[70%]">
                <p className="text-xs md:text-sm font-bold">{coupon.description}</p>

                <h1 className="text-xl md:text-2xl py-2">DISCOUNT </h1>
                <h1 className="text-2xl md:text-4xl font-extrabold text-logo pb-2">
                  COUPON
                </h1>
                <p className="text-sm md:text-base text-black font-semibold">
                  Coupon Type : {coupon.coupon_type}
                </p>
                <p className="text-xs md:text-sm text-green-700 font-semibold">
                  {coupon.condition}
                </p>
                <p className="text-xs text-logo font-bold">
                  Valid Untill: {formatDate(coupon.expiry_date)}
                </p>
              </div>
              <div className="w-[30%]">
                <div className="relative inline-block w-full h-[80%] md:h-[92%]">
                  <div className="bg-logo text-white text-center font-bold text-xl flex flex-col items-center justify-center h-3/4 rounded-t-md">
                    <p className=" animate__animated animate__heartBeat animate__infinite	infinite animate__slower text-xs md:text-sm font-bold">{coupon.coupon_code}</p>
                    <CopyToClipboard
                      text={coupon.coupon_code}
                      onCopy={() => handleCopyCode(coupon.coupon_code)}
                    >
                      <button title="Click to Copy in Clipboard" className="bg-white text-logo px-2 py-1 rounded shadow text-xs md:text-sm mt-2">
                        Copy Code
                      </button>
                    </CopyToClipboard>
                  </div>

                  <div className="w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-t-[30px] border-t-logo mx-auto"></div>
                </div>
                <div>
                  <a
                    className="bg-green-logo hover:bg-logo text-white font-bold px-4 py-2 rounded-t-xl w-full text-center block text-xs md:text-base"
                    href={item.shop_Link}
                    target="_blank"
                  >
                    USE NOW
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandDetails;
