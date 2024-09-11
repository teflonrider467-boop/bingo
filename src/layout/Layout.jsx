// contains header or Navigation, Non Changeable Part of our website
import React, { useState } from 'react'
import {Link, Outlet} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
    // alert(isOpen);
    
  }
  return (
    <>
        <Sidebar isOpen = {isOpen} toggleOpen = {toggleOpen} />
        <Header toggleOpen ={toggleOpen} />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout