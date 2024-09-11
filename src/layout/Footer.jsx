import React from 'react';
import { PiPaperPlaneTiltLight } from "react-icons/pi";
import IMG from '../assets/img';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md"; 
import { MdPhoneInTalk } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { TiLocationOutline } from "react-icons/ti";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='container-fluid'>

      <div className='footer_newsletter p-5'>

        <div className='footer_newsletter_heading'>
          <h2>Get Updated The Latest NewsLetter</h2>
        </div>

        <div className='footer_newsletter_interact'>

          <div className='footer_newsletter_input'>
            <input type="email" placeholder='Enter your Email' className='rounded-pill' />
          </div>

          <div className='footer_newsletter_subscribe'>
            <button className='rounded-pill'>Subscribe Now <PiPaperPlaneTiltLight /></button>
          </div>

        </div>

      </div>

      <div className='footer_links row mt-5 p-5'>

        <div className='col-lg-3  mt-3 footer_link_social'>
          <div>
            <img src={IMG.HeaderLogo} alt="" />
          </div>

          <div className='footer_link_social_description'>
            <p>Rapidiously myocardinate cross-platform intellectual capital model. Appropriately create interactive infrastructures</p>
          </div>

          <div className='social_icons'>
            <div className=''>
              <button className='rounded-circle social_icons_buttons'>
                <FaFacebookF />
              </button>
            </div>
            <div className=''>
              <button className='rounded-circle social_icons_buttons'>
                <FaTwitter />
              </button>
            </div>
            <div className=''>
              <button className='rounded-circle social_icons_buttons'>
                <FaLinkedinIn />
              </button>
            </div>
            <div className=''>
              <button className='rounded-circle social_icons_buttons'>
                <FaWhatsapp />
              </button>
            </div>
            <div className=''>
              <button className='rounded-circle social_icons_buttons'>
                <FaInstagram />
              </button>
              </div>
          </div>
        </div>

        <div className='col-lg-2 footer_links_quicklinks mt-3'>
          <div className='footer_links_quicklinks_heading'>
            <h3>Quick Links</h3>
          </div>
          <div className="footer_links_quicklinks_list">
            <ul>
              <li><MdOutlineKeyboardArrowRight /> Home</li>
              <li><MdOutlineKeyboardArrowRight /> About Us</li>
              <li><MdOutlineKeyboardArrowRight /> Services</li>
              <li><MdOutlineKeyboardArrowRight /> Tour guide</li>
              <li><MdOutlineKeyboardArrowRight /> Contact Us</li>
            </ul>
          </div>
        </div>

        <div className='col-lg-3 text-start  mt-3'>
          <div className='footer_links_touchlinks_heading'>
            <h3>Get In Touch</h3>
          </div>
          <ul className='ps-0 text-start footer_links_touchlinks_list'>

            <li className='d-flex justify-content-center align-items-center'>
              <div className='col-2'>
              <MdPhoneInTalk />
              </div>
              <div className='col-9'>
                +01234567890
                +01234567890
              </div>
            </li>

            <li className='d-flex justify-content-center align-items-center'>
              <div className='col-2'>
              <IoMailOutline />
              </div>
              <div className='col-9'>
                mailinfo00@tourm.com
                mailinfo00@tourm.com
              </div>
            </li>

            <li className='d-flex justify-content-center align-items-center'>
              <div className='col-2'>
              <TiLocationOutline />
              </div>
              <div className='col-9'>
                789 Inner Lane, Holy park, California, USA
              </div>
            </li>

          </ul>
        </div>
        <div className='col-lg-4 text-start mt-3'>
          <h3>Instagram Post</h3>
          <div className="row posts footer_insta">
            <div className="col-3">
              <img src={IMG.InstaBanner} alt="" />
            </div>
            <div className="col-3">
              <img src={IMG.InstaBanner} alt="" />
            </div>
            <div className="col-3">
              <img src={IMG.InstaBanner} alt="" />
            </div>
          </div>
          <div className="row posts footer_insta">
            <div className="col-3">
              <img src={IMG.InstaBanner} alt="" />
            </div>
            <div className="col-3">
              <img src={IMG.InstaBanner} alt="" />
            </div>
            <div className="col-3">
              <img src={IMG.InstaBanner} alt="" />
            </div>
          </div>
        </div>
        </div>

        <div className='footer_copyright_payment mt-5'>
          <div className='footer_copyright mt-3'>
            Copyright {currentYear} Tourm. All Rights Reserved.
          </div>
        <div className='footer_payment mt-3'>
          <div className=''>We Accept</div>
          <div className="footer_payment">
          <div className=''>
            <img src={IMG.Payment} alt="" />
          </div>
          </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer