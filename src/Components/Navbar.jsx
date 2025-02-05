import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/newlogo.png";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoHomeOutline } from "react-icons/io5";
import { GoOrganization } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { LuServer } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import { AiOutlineLogin } from "react-icons/ai";
import { IoPersonAdd } from "react-icons/io5";
const Navbar = () => {
  const { user, setUser, LogOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    LogOutUser()
      .then(() => {
        toast.success("Logout Successfully", {
          position: "top-center",
          autoClose: 3000,
          pauseOnHover: true,
          theme: "dark",
        });
        setUser(null);
        navigate("/login");
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
  const links = [
    <NavLink
      key="/"
      to="/"
      className={({ isActive }) =>
        isActive
          ? "bg-logo hover:bg-green-logo text-white px- lg:px-2 xl:px-66 py- lg:py-1 xl:py-22 rounded font-bold flex items-center gap-2 text-base lg:text-sm xl:text-base"
          : "text-black px-4 lg:px-2 xl:px-4 py-2 lg:py-1 xl:py-2  rounded font-bold flex items-center gap-2 text-base lg:text-sm xl:text-base"
      }
    >
      <IoHomeOutline className="text-xl lg:text-base xl:text-xl" />
      Home
    </NavLink>,
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "bg-logo hover:bg-green-logo text-white px-6 lg:px-2 xl:px-6 py-2 lg:py-1 xl:py-2 rounded font-bold flex items-center gap-2 text-base lg:text-sm xl:text-base"
          : "text-black  px-4 lg:px-2 xl:px-4 py-2 lg:py-1 xl:py-2  rounded font-bold flex items-center gap-2 text-base lg:text-sm xl:text-base"
      }
      key="/brands"
      to="/brands"
    >
      <GoOrganization className="text-xl lg:text-base xl:text-xl" />
      Brands
    </NavLink>,

    user && (
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-logo hover:bg-green-logo text-white px-6 lg:px-2 xl:px-6 py-2 lg:py-1 xl:py-2 rounded font-bold flex items-center gap-2 text-base lg:text-sm xl:text-base"
            : "text-black  px-4 lg:px-2 xl:px-4 py-2 lg:py-1 xl:py-2  rounded font-bold flex items-center gap-2 text-base lg:text-sm xl:text-base"
        }
        key="/profile"
        to="/profile"
      >
        <FaRegUser className="text-xl lg:text-base xl:text-xl" />
        My Profile
      </NavLink>
    ),

    <NavLink
      className={({ isActive }) =>
        isActive
          ? "bg-logo hover:bg-green-logo text-white px-6 lg:px-2 xl:px-6 py-2 lg:py-1 xl:py-2 rounded font-bold flex items-center gap-2 text-base lg:text-sm xl:text-base"
          : "text-black  px-4 lg:px-2 xl:px-4 py-2 lg:py-1 xl:py-2  rounded font-bold flex items-center gap-2 text-base lg:text-sm xl:text-base"
      }
      key="/about"
      to="/about"
    >
      <LuServer className="text-xl lg:text-base xl:text-xl" />
      About dev
    </NavLink>,
  ];
  const filteredLinks = links.filter(Boolean);
  return (
    <>
      <div className="navbar justify-between bg-white py-3">
        <div className="navbar-start w-full lg:w-[20%] flex justify-start items-center">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className=" ps-0 btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box  mt-3 w-52 p-2 shadow z-50"
            >
              {filteredLinks.map((link) => (
                <li key={link.key}>{link}</li>
              ))}
            </ul>
          </div>
          <Link to="/">
            <img src={logo} alt="" className="h-10 md:h-16 lg:h-12 xl:h-16" />
          </Link>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="flex justify-center items-center gap-4 lg:gap-1 xl:gap-4">
            {filteredLinks.map((link) => (
              <li key={link.key}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="w-auto md:w-full lg:w-auto justify-end flex gap-1 md:gap-4 lg:gap-1 xl:gap-4">
          {user ? (
            <div className="flex justify-end items-center gap-2">
              <p className=" hidden md:block px-4 lg:px-2 xl:px-4 py-2 lg:py-1 xl:py- border-2 border-logo rounded-md text-base lg:text-sm xl:text-base">
                {user?.email}
              </p>
              <img
                src={user?.photoURL}
                alt={user.displayName}
                className="w-10 md:w-12 h-10 md:h-12 rounded-full border-2 border-logo"
              />
              <button
                onClick={handleLogOut}
                className="bg-logo hover:bg-green-logo px-2 md:px-4 lg:px-2  py-1.5 md:py-2 rounded text-white font-bold flex items-center gap-2 text-xs md:text-base lg:text-xs xl:text-base"
              >
                Logout
                <IoIosLogOut className="text-sm md:text-xl" />
              </button>
            </div>
          ) : (
            <>
              <NavLink
                to="/registration"
                className={({ isActive }) =>
                  isActive
                    ? "bg-green-logo hover:bg-logo text-white px-2 md:px-6 py-1.5 md:py-2 rounded font-bold flex items-center gap-2 text-xs md:text-base"
                    : "bg-logo hover:bg-green-logo px-2 md:px-4 py-1.5 md:py-2 rounded text-white font-bold flex items-center gap-2 text-xs md:text-base"
                }
              >
                Register <IoPersonAdd className="text-base md:text-xl" />
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "bg-green-logo hover:bg-logo text-white px-2 md:px-6 py-1.5 md:py-2 rounded font-bold flex items-center gap-2 text-xs md:text-base"
                    : "bg-logo hover:bg-green-logo px-2 md:px-4 py-1.5 md:py-2 rounded text-white font-bold flex items-center gap-2 text-xs md:text-base"
                }
              >
                Login <AiOutlineLogin className="text-base md:text-xl" />
              </NavLink>
            </>
          )}
        </div>
      </div>
      
    </>
  );
};

export default Navbar;
