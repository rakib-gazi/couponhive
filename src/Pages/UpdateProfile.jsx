import React, { useContext, useState } from "react";
import { AuthContext } from "../Components/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const UpdateProfile = () => {
  const navigate = useNavigate();
  const { user, updateUserProfile, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [nameError, setNameError] = useState("");
  const [photoError, setPhotoError] = useState("");
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = new FormData();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    setNameError("");
    setPhotoError("");
    let isError = false;
    if (!name) {
      setNameError("Name is required");
      isError = true;
    }
    if (!photo) {
      setPhotoError("Photo link is required");
      isError = true;
    }
    if (isError) {
      return;
    }
    updateUserProfile(name, photo).then(() => {
      toast.success("Profile Updated Successfully", {
        position: "top-center",
        autoClose: 3000,
        pauseOnHover: true,
        theme: "dark",
      });
      setUser((prevUser) => ({
        ...prevUser,
        displayName: name,
        photoURL: photo,
      }));
      navigate("/profile");
    });
  };
  return (
    <div className="px-3">
      <div className="bg-green-logo rounded-3xl py-8 md:py-12">
        <h1 className="text-center text-white font-bold text-2xl md:text-3xl pb-0 md:pb-4 ">
          Update Profile
        </h1>
        <h1 className="text-center text-white font-bold text-sm md:text-2xl ">
          Please Update Your Profile Information
        </h1>
      </div>
      <div className=" pb-8">
        <div className="card w-full max-w-lg shrink-0 mx-auto ">
          <form onSubmit={handleUpdate} className="card-body pb-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Update your name"
                className="input input-bordered"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                placeholder="Update your photo URL"
                className="input input-bordered"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
              />
            </div>
            {photoError && (
              <p className="py-1 text-red-600 text-sm ">{photoError}</p>
            )}
            <div className="form-control mt-1">
              <button
                type="submit"
                className="rounded-md py-3 bg-logo hover:bg-green-logo text-white"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
