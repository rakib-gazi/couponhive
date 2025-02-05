import { useContext, useState } from "react";
import PageHeader from "../Components/PageHeader";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { AuthContext } from "../Components/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
const Registration = () => {
  const { createUser, LogInWIthGoogle, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [nameError, setNameError] = useState("");
  const [photoError, setPhotoError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    setNameError("");
    setPhotoError("");
    setEmailError("");
    setPassError("");
    const passwordRegx = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    let isError = false;
    if (!name) {
      setNameError("Name is required");
      isError = true;
    }
    if (!photo) {
      setPhotoError("Photo link is required");
      isError = true;
    }
    if (!email) {
      setEmailError("Email is required");
      isError = true;
    }
    if (!password) {
      setPassError("Password is required");
      isError = true;
    } else if (password.length < 6) {
      setPassError("Password must be 6 character long");
      isError = true;
    } else if (!passwordRegx.test(password)) {
      setPassError(
        "Password must include at least one uppercase & one lowercase letter."
      );
      isError = true;
    }
    if (isError) {
      return;
    }
    createUser(email, password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        }).then(() => {
          setUser((prevUser) => ({
            ...prevUser,
            displayName: name,
            photoURL: photo,
          }));
          toast.success("Registration Successfully", {
            position: "top-center",
            autoClose: 3000,
            pauseOnHover: true,
            theme: "dark",
          });
        });
        navigate("/");
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
    e.target.reset();
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
        navigate("/");
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
      <PageHeader registration={"Registration Now"}></PageHeader>
      <div className=" pb-8">
        <div className="card w-full max-w-lg shrink-0 mx-auto ">
          <form onSubmit={handleRegister} className="card-body pb-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered"
              />
            </div>
            {nameError && (
              <p className="py-1 text-red-600 text-sm ">{nameError}</p>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="photo"
                name="photo"
                placeholder="Enter your photo URL"
                className="input input-bordered"
              />
            </div>
            {photoError && (
              <p className="py-1 text-red-600 text-sm ">{photoError}</p>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your  email"
                className="input input-bordered"
              />
            </div>
            {emailError && (
              <p className="py-1 text-red-600 text-sm ">{emailError}</p>
            )}
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered"
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
            {passError && (
              <p className="py-1 text-red-600 text-sm ">{passError}</p>
            )}
            <div className="form-control mt-1">
              <button
                type="submit"
                className="rounded-md py-3 bg-logo hover:bg-green-logo text-white"
              >
                Register
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
          <div className="card-body pt-4">
            <p className="font-semibold">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-logo text-xl underline hover:text-blue-600"
              >
                Login Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
