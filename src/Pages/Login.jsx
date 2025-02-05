import { useContext, useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const { LogInUser, LogInWIthGoogle, setUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    LogInUser(email, password)
      .then((result) => {
        toast.success("Login Successfully", {
          position: "top-center",
          autoClose: 3000,
          pauseOnHover: true,
          theme: "dark",
        });
        setUser(result.user);
        e.target.reset();
        navigate(location?.state? location.state : '/');
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
  const handleGoogleLogIn = () => {
    LogInWIthGoogle()
      .then((result) => {
        toast.success("Login Successfully", {
          position: "top-center",
          autoClose: 3000,
          pauseOnHover: true,
          theme: "dark",
        });
        setUser(result.user);
        navigate(location?.state? location.state : '/');
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
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  return (
    <div className="px-3">
      <div className="bg-green-logo rounded-3xl py-16 ">
        <h1 className="text-center text-white font-bold text-2xl ">
          Login Here
        </h1>
      </div>
      <div className=" pb-8">
        <div className="card w-full max-w-lg shrink-0 mx-auto ">
          <form onSubmit={handleLogIn} className="card-body pb-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your  email"
                className="input input-bordered"
                value={email} 
                onChange={handleEmail} 
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
              <div
                onClick={handleShowPassword}
                className="absolute bottom-3 right-3 cursor-pointer"
              >
                {showPassword ? (
                  <LuEyeOff className="text-2xl" />
                ) : (
                  <LuEye className="text-2xl" />
                )}
              </div>
            </div>
            <label className="label">
              <Link state={email} to="/forgetPassword" className="label-text-alt link link-hover text-base ">
                Forgot password?
              </Link>
            </label>
            <div className="form-control mt-1">
              <button
                type="submit"
                className="rounded-md py-3 bg-logo hover:bg-green-logo text-white"
              >
                Login
              </button>
            </div>
          </form>
          <div className="divider card-body py-0">OR</div>
          <div className="card-body pt-3 pb-0">
            <button
              onClick={handleGoogleLogIn}
              type="submit"
              className=" outline outline-1 outline-green-logo rounded-md py-3 bg-white  "
            >
              <div className="flex flex-row gap-4 items-center justify-center">
                <FcGoogle className="text-3xl" />
                <span className="font-semibold">Login with Google</span>
              </div>
            </button>
          </div>
          <div className="card-body">
            <p className="font-semibold text-base ">
              Don't have an account?
              {"   "}
              <Link
                to="/registration"
                className="text-logo text-base md:text-xl underline hover:text-blue-600"
              >
                Register Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
