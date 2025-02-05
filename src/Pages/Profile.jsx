import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="px-3">
      <div className="bg-green-logo rounded-3xl py-8 md:py-12">
        <h1 className="text-center text-white font-bold text-2xl md:text-3xl pb-0 md:pb-4 ">
          Profile
        </h1>
        <h1 className="text-center text-white font-bold text-xl md:text-2xl ">
          Welcome back, {user?.displayName}.
        </h1>
      </div>
      <div className="max-w-lg mx-auto p-4 md:p-8 rounded-3xl shadow-lg bg-white my-12">
        <div className="flex flex-col items-start">
          <div className="flex justify-center items-center">
            <img
              src={user?.photoURL}
              alt="profile"
              className="w-60 md:w-72 h-60 md:h-72 rounded-2xl"
            />
          </div>

          <div className="mt-4 flex flex-col justify-start">
            <h3 className="text-base md:text-lg font-semibold">
              <span className="text-logo font-bold text-xl md:text-2xl">Name:</span>{" "}
              {user?.displayName}
            </h3>
            <h3 className="text-base md:text-lg font-semibold flex justify-start items-center gap-3">
              <span className="text-logo font-bold text-xl md:text-2xl">Email:</span>{" "}
              {user?.email}
            </h3>
          </div>
          <div className="mt-6">
            <Link to='/updateProfile' className="px-6 py-2 bg-logo text-white hover:bg-green-logo rounded-xl text-xl font-bold">Update Profile</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
