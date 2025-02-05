import { Link, NavLink } from "react-router-dom";
import logo from '../assets/newlogo.png';
import fb from '../assets/fb.png';
import x from '../assets/x.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
const Footer = () => {
  return (
    <footer className="bg-gray-100 rounded-t-3xl">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center items-center">
        <Link to="/">
          <img src={logo} alt="" className="h-24" />
        </Link>
        </div>
        <p className="text-center text-black font-medium py-2 text-xs md:text-base w-full xl:w-[50%] mx-auto">
          CouponHive is the largest coupon and discount code website in Bangladesh. We have thousands of coupons and promo codes for Hundreds of stores & websites.
        </p>
        <div className="divider mt-0"></div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <nav className="flex flex-col items-center ">
            <h6 className=" text-lg font-bold text-logo  ">Services</h6>
            <NavLink to="/" className="link link-hover text-font-paragraph">
              Product Discount code
            </NavLink>
            <NavLink to="/" className="link link-hover text-font-paragraph">
              Coupon code
            </NavLink>
            <NavLink to="/" className="link link-hover text-font-paragraph">
              Shopping Vouchers
            </NavLink>
            <NavLink to="/" className="link link-hover text-font-paragraph">
              Promo codes
            </NavLink>
          </nav>
          <nav className="flex flex-col items-center ">
            <h6 className=" text-lg font-bold text-logo">Company</h6>
            <NavLink to="/" className="link link-hover text-font-paragraph">
              About Us
            </NavLink>
            <NavLink to="/" className="link link-hover text-font-paragraph">
              Careers
            </NavLink>
            <NavLink to="/" className="link link-hover text-font-paragraph">
              Contact
            </NavLink>
            <NavLink to="/" className="link link-hover text-font-paragraph">
              Address
            </NavLink>
          </nav>
          <nav className="flex flex-col items-center ">
            <h6 className=" text-lg font-bold text-logo">Legal</h6>
            <NavLink to="/" className="link link-hover text-font-paragraph">
              Terms of Service
            </NavLink>
            <NavLink to="/" className="link link-hover text-font-paragraph">
              Privacy Policy
            </NavLink>
            <NavLink to="/" className="link link-hover text-font-paragraph">
              Cookie Policy
            </NavLink>
            <NavLink to="/" className="link link-hover text-font-paragraph">
              Returns
            </NavLink>
          </nav>
          <nav className="flex flex-col items-center ">
            <h6 className=" text-lg font-bold text-logo">Join With Us</h6>
            <div className="flex justify-center items-center gap-4 pt-3">
            <NavLink to="https://www.facebook.com/bd.gazi97">
              <img src={fb} alt="" className="h-12"/>
            </NavLink>
            <NavLink to="https://github.com/rakib-gazi/">
              <img src={github} alt="" className="h-12"/>
            </NavLink>
            <NavLink to="/">
              <img src={x} alt="" className="h-12"/>
            </NavLink>
            <NavLink to="/">
              <img src={linkedin} alt="" className="h-12"/>
            </NavLink>
            </div>
          </nav>
        </div>
      </div>
      <div className="flex justify-center items-center bg-logo py-8">
        <p className="text-white text-center font-semibold text-xs md:text-base">
          @Copyright 2024, CouponHive. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
