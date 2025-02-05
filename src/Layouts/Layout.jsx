import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import TopNavbar from "../Components/TopNavbar";

const Layout = () => {
  return (
    <div className="container mx-auto">
      <TopNavbar></TopNavbar>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Layout;
