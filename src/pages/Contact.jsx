import React from 'react'
import { HiOutlineArrowRight } from 'react-icons/hi';
import { TiLocation } from "react-icons/ti";

const Contact = () => {
  return (
    <div>

      <div className='contact_banner'>
        <div>
          <h1>Contact Us</h1>
        </div>
        <div>
          <h3>Home <HiOutlineArrowRight /> Contact Us</h3>
        </div>
      </div>

      <div className="contact_get_in_touch">
        <div className='contact_touch_message'>
          <div className='contact_get_in'>
            <h4>Get In Touch</h4>
          </div>
          <div className='contact_information'>
            <h2>Our Contact Information</h2>
          </div>

          </div>
          <div className="contact_cards">

            <div className='contact_card'>
              <div className='contact_card_icon'>
                <TiLocation />
              </div>
              <div className='contact_card_info'>

                <div className='contact_card_info_head'>
                  Our Address
                </div>

                <div className='contact_card_info_desc'>
                  2690 Hiltona Street Victoria Road, New York, Canada
                </div>
              </div>
            </div>

            <div className='contact_card'>
              <div className='contact_card_icon'>
                <TiLocation />
              </div>
              <div className='contact_card_info'>

                <div className='contact_card_info_head'>
                  Our Address
                </div>

                <div className='contact_card_info_desc'>
                  2690 Hiltona Street Victoria Road, New York, Canada
                </div>
              </div>
            </div>

            <div className='contact_card'>
              <div className='contact_card_icon'>
                <TiLocation />
              </div>
              <div className='contact_card_info'>

                <div className='contact_card_info_head'>
                  Our Address
                </div>

                <div className='contact_card_info_desc'>
                  2690 Hiltona Street Victoria Road, New York, Canada
                </div>
              </div>
            </div>

          </div>
      </div>

      <div className="contact_form"></div>
      
      <div className="contact_map">
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209990.24341602362!2d135.32122766432724!3d34.677487293042475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e6553406e2e1%3A0xc55bc16ee46a2fe7!2sOsaka%2C%20Japan!5e0!3m2!1sen!2sin!4v1725273501425!5m2!1sen!2sin"
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="auto"
      >
      </iframe>
      </div>
    </div>
  )
}

export default Contact