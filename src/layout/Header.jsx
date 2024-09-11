import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { FiClock } from "react-icons/fi";
import IMG from "../assets/img";
import { HiOutlineArrowRight } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = ({toggleOpen}) => {

  return (
    <div>
      <header className="container-fluid">
      <div className="header_address">
        <div className="header_address_content header_address_left">
          <IoLocationOutline />
          <div>45 New Eskaton Road, Austria</div>
          <div>|</div>
          <div>
            <FiClock />
          </div>
          <div>Sun to Friday: 8.00 am - 7.00 pm, Austria</div>
        </div>
        <div className="header_address_content header_address_right pe-4">
          <div><Link to="/faq">FAQ</Link></div> |<div><Link to="/contact">Support</Link></div>
        </div>
      </div>

      <div className="header_navigation">

        <div className="header_navigation_logo">
          <img src={IMG.HeaderLogo} alt="" />
        </div>

        <div className="header_navigation_links">
          <Link to={"/"}><div>Home</div></Link>
          <Link to={"/about"}><div>About Us</div></Link>
          <Link to={"/tour-packages"}><div>Tour Packages</div></Link>
          <Link to={"/corporate-booking"}><div>Corporate Booking</div></Link>
          <Link to={"/blogs"}><div>Blogs</div></Link>
          <Link to={"/contact"}><div>Contact Us</div></Link>
        </div>

        <div className="header_navigation_qoute">
          <button>Request A Quote <HiOutlineArrowRight /></button>
        </div>

        <div className="header_navigation_button">
          <button onClick={toggleOpen}><RxHamburgerMenu /></button>
        </div>
      </div>
      </header>
    </div>
  );
};

export default Header;
