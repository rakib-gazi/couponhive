import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../Pages/Home";
import Registration from "../Pages/Registration";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute";
import BrandOnSell from "../Components/BrandOnSell";
import Brands from "../Pages/Brands";
import BrandDetails from "../Pages/BrandDetails";
import Profile from "../Pages/Profile";
import ErrorPage from "../Pages/ErrorPage";
import ForgetPassword from "../Pages/ForgetPassword";
import UpdateProfile from "../Pages/UpdateProfile";
import AboutDev from "../Pages/AboutDev";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "*",
        element: <ErrorPage></ErrorPage>, 
      },
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/Brands.json"),
        children: [
          {
            path: "/",
            element: <BrandOnSell></BrandOnSell>,
            loader: () => fetch("/Coupon.json"),
          },
        ],
      },
      {
        path: "/brands",
        element: <Brands></Brands>,
        loader: () => fetch("/Coupon.json"),
      },
      {
        path: "/brands/:brand",
        element: (
          <PrivateRoute>
            <BrandDetails></BrandDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/Coupon.json"),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateProfile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/about",
        element: <AboutDev></AboutDev>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/forgetPassword",
        element:<ForgetPassword></ForgetPassword> ,
      },
    ],
  },
]);
export default router;
