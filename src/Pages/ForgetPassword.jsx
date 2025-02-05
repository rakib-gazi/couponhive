import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ForgetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { passwordReset,LogOutUser,setUser } = useContext(AuthContext);
  const forgetPasswordEmail = location?.state ? location.state : "";
  const [email, setEmail] = useState(forgetPasswordEmail);
  const handleForget = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const resetEmail = form.get("email");
    passwordReset(resetEmail)
      .then(() => {
        LogOutUser()
        .then(()=>{
          setUser(null);
        })
        toast.success("A Reset Link Sent to Your Email Successfully", {
          position: "top-center",
          autoClose: 3000,
          pauseOnHover: true,
          theme: "dark",
        });
        
        navigate("/");
        window.open("https://mail.google.com/", "_blank");
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error(errorCode, {
          position: "top-center",
          autoClose: 3000,
          pauseOnHover: true,
          theme: "dark",
        });
      });
  };
  return (
    <div className="px-3">
      <div className="bg-green-logo rounded-3xl py-8 md:py-12">
        <h1 className="text-center text-white font-bold text-sm md:text-2xl ">
          Forgotten your password? Don't worry, we've got you covered.
        </h1>
      </div>
      <div className=" pb-8">
        <div className="card w-full max-w-lg shrink-0 mx-auto ">
          <form onSubmit={handleForget} className="card-body pb-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your  email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-1">
              <button
                type="submit"
                className="rounded-md py-3 bg-logo  text-white"
              >
                Reset Password
              </button>
            </div>
          </form>
          <div className="card-body mt-3 pt-0">
            <Link
              to={-1}
              className="rounded-md py-3  bg-green-logo text-white text-center"
            >
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
