import React from 'react';
import IMG from "../assets/img";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { RxCross1 } from "react-icons/rx";



const Sidebar = ({isOpen, toggleOpen}) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""} sticky-top`}>
        <button onClick={toggleOpen} className='sidebar_close rounded_circle'><RxCross1 /></button>
        <div className='sidebar_logo'>
            <img src={IMG.HeaderLogo} alt="" />
        </div>
        <div className='sidebar_nav'>
        <ul onClick={toggleOpen}>
            <Link to={"/"}><li><MdOutlineKeyboardArrowRight /> Home</li></Link>
            <Link to={"/"}><li><MdOutlineKeyboardArrowRight /> About Us</li></Link>
            <Link to={"/"}><li><MdOutlineKeyboardArrowRight /> Services</li></Link>
            <Link to={"/"}><li><MdOutlineKeyboardArrowRight /> Tour guide</li></Link>
            <Link to={"/contact"}><li><MdOutlineKeyboardArrowRight /> Contact Us</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar