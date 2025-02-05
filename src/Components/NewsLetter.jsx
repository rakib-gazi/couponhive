
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const NewsLetter = () => {
  const handleNewsLetter = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    toast.success(`Successfully subscribed Newsletter for ${email} `, {
        position: "top-center",
        autoClose: 3000,
        pauseOnHover: true,
        theme: "dark",
      });
  };
  return (
    <div className="px-4 xl:px-0">
      <div className="container mx-auto p-4 rounded-3xl border shadow  my-20">
        <div className="py-20 px-4 flex flex-col items-center gap-6 bg-logo bg-news bg-cover rounded-3xl">
          <h1 className="text-lg lg:text-3xl font-bold text-white text-center ">
            Subscribe To Our Newsletter
          </h1>
          <p className="text-sm lg:text-xl text-center font-semibold text-white ">
            Get the latest updates and Discount Alert in your inbox!
          </p>
          <form
            onSubmit={handleNewsLetter}
            className="flex flex-col lg:flex-row  items-center gap-2 lg:gap-6"
          >
            <input
              className="px-6 py-3 w-60 lg:w-96 rounded-xl border border-gray-300 text-font shadow-md "
              name="email"
              type="email"
              placeholder="Enter your email address"
            />
            <button className="bg-white px-6 py-3 hover:bg-green-logo hover:text-white rounded-xl text-black font-bold">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
