import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const TopNavbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      {
        user && <div className="bg-green-logo py-1 lg:py-2 rounded-b">
          <p className="text-bold text-sm lg:text-xl text-white text-center ">
            Welcome back, {user?.displayName}
          </p>
        </div>
      }
    </>
  );
};

export default TopNavbar;
