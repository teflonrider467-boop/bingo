import React, { useState } from 'react'
import { HiOutlineArrowRight } from 'react-icons/hi'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { GiJourney } from "react-icons/gi";
import IMG from "../assets/img";
import { FaFacebookF, FaInstagram, FaRegClock, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiTargetLock } from 'react-icons/bi';
import Slider from 'react-slick';

const About = () => {

  const settings3 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          
        }
      }
    ]
  };

  return (
    <div>
      <div className="About_banner">
        <div>
          <h1>About Us</h1>
        </div>
        <div>
          <h3>About <HiOutlineArrowRight /> About Us</h3>
        </div>
      </div>

      <div className="About_go_together mb-5">
        <div className="About_go_together_images">
          <div className="About_go_together_image About_go_together_image_1">
            <img src={IMG.AboutGoTogetherIMG1} alt="" />
          </div>
          
          <div  className="About_go_together_image_evil">
            
            <div className="About_go_together_image About_go_together_image_2">
              <img src={IMG.AboutGoTogetherIMG2} alt="" />
            </div>
            <div className="About_go_together_image About_go_together_image_3">
              <img src={IMG.AboutGoTogetherIMG3} alt="" />
            </div>
          
          </div>
        </div>
        <div className="About_go_together_text">
          <h4>Let&apos;s go Together</h4>
          <h2>Plan Your Trip With Us</h2>
          <p>There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don’t look even slightly.
          </p>
          <div className="About_go_together_tabs">
            <div className="About_go_together_tabs_icon">
            <GiJourney />
            </div>
            
            <div className="About_go_together_tabs_text">
              
              <div className="About_go_together_tabs_text_head">
                <h5>Exclusive Trip</h5>
              </div>
              <div className="About_go_together_tabs_text_desc">
                <p>
                  There are many variations of passages of available but the majority.
                </p>
              </div>
            
            </div>
          </div>
          <div className="About_go_together_tabs">
            <div className="About_go_together_tabs_icon">
            <GiJourney />
            </div>
            
            <div className="About_go_together_tabs_text">
              
              <div className="About_go_together_tabs_text_head">
                <h5>Safety First Always</h5>
              </div>
              <div className="About_go_together_tabs_text_desc">
                <p>
                  There are many variations of passages of available but the majority.
                </p>
              </div>
            
            </div>
          </div>
          <div className="About_go_together_tabs">
            <div className="About_go_together_tabs_icon">
            <GiJourney />
            </div>
            
            <div className="About_go_together_tabs_text">
              
              <div className="About_go_together_tabs_text_head">
                <h5>Professional Guide</h5>
              </div>
              <div className="About_go_together_tabs_text_desc">
                <p>
                  There are many variations of passages of available but the majority.
                </p>
              </div>
            
            </div>
          </div>
          <div className="About_go_together_text_button">
            <button className="rounded-pill"> Learn More <HiOutlineArrowRight /></button>
          </div>
        </div>
      </div>

      <div className='About_services_offer mb-5'>
        
        <div className="About_services_offer_text">
              <h4>Services We Offer</h4>
              <h2>Our Amazing Services</h2>
        </div>

        <div className="slider-container About_services_offer_cards">

          <div>
            <div className="About_services_offer_card text-center">
              <div className="About_services_offer_card_image">
                <img src={IMG.RecommendPlaceIMG1} alt="" />
              </div>
              <div className='About_services_offer_description text-center'>
                <div className="About_services_offer_card_title">
                  <h3>Photo Shoot</h3>
                </div>
                <div className="About_services_offer_card_location">
                  <p>10 Listing</p>
                </div>                  
                <div className="About_services_offer_card_button text-center">
                  <button className="rounded-pill">Book Now <HiOutlineArrowRight /></button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="About_services_offer_card text-center">
              <div className="About_services_offer_card_image">
                <img src={IMG.RecommendPlaceIMG1} alt="" />
              </div>
              <div className='About_services_offer_description text-center'>
                <div className="About_services_offer_card_title">
                  <h3>Photo Shoot</h3>
                </div>
                <div className="About_services_offer_card_location">
                  <p>10 Listing</p>
                </div>                  
                <div className="About_services_offer_card_button text-center">
                  <button className="rounded-pill">Book Now <HiOutlineArrowRight /></button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="About_services_offer_card text-center">
              <div className="About_services_offer_card_image">
                <img src={IMG.RecommendPlaceIMG1} alt="" />
              </div>
              <div className='About_services_offer_description text-center'>
                <div className="About_services_offer_card_title">
                  <h3>Photo Shoot</h3>
                </div>
                <div className="About_services_offer_card_location">
                  <p>10 Listing</p>
                </div>                  
                <div className="About_services_offer_card_button text-center">
                  <button className="rounded-pill">Book Now <HiOutlineArrowRight /></button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="About_services_offer_card text-center">
              <div className="About_services_offer_card_image">
                <img src={IMG.RecommendPlaceIMG1} alt="" />
              </div>
              <div className='About_services_offer_description text-center'>
                <div className="About_services_offer_card_title">
                  <h3>Photo Shoot</h3>
                </div>
                <div className="About_services_offer_card_location">
                  <p>10 Listing</p>
                </div>                  
                <div className="About_services_offer_card_button text-center">
                  <button className="rounded-pill">Book Now <HiOutlineArrowRight /></button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="About_services_offer_card text-center">
              <div className="About_services_offer_card_image">
                <img src={IMG.RecommendPlaceIMG1} alt="" />
              </div>
              <div className='About_services_offer_description text-center'>
                <div className="About_services_offer_card_title">
                  <h3>Photo Shoot</h3>
                </div>
                <div className="About_services_offer_card_location">
                  <p>10 Listing</p>
                </div>                  
                <div className="About_services_offer_card_button text-center">
                  <button className="rounded-pill">Book Now <HiOutlineArrowRight /></button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="About_services_offer_card text-center">
              <div className="About_services_offer_card_image">
                <img src={IMG.RecommendPlaceIMG1} alt="" />
              </div>
              <div className='About_services_offer_description text-center'>
                <div className="About_services_offer_card_title">
                  <h3>Photo Shoot</h3>
                </div>
                <div className="About_services_offer_card_location">
                  <p>10 Listing</p>
                </div>                  
                <div className="About_services_offer_card_button text-center">
                  <button className="rounded-pill">Book Now <HiOutlineArrowRight /></button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div className="About_meet_guide mb-5">

          <div className="About_meet_guide_text">
              <h4>Meet with Guide</h4>
              <h2>Tour Guide</h2>
          </div>

          <div className="About_meet_guide_slider">
          <div className="slider-container About_meet_guide_cards">
            <Slider {...settings3}>

              <div>
                <div className="About_meet_guide_card text-center">

                  

                  <div className="About_meet_guide_card_image">
                    <img src={IMG.TourGuideIMG1} alt="" />
                  </div>

                  <div className="About_meet_guide_card_below_image">
                    <div className="About_meet_guide_card_name">
                      <h3>Jane Cooper</h3>
                    </div>
                    <div className="About_meet_guide_card_occupation">
                      <p>Tourist Guide</p>
                    </div>
                    <div className="About_meet_guide_card_links">
                      <button className='rounded link_button'>
                        <FaFacebookF />
                      </button>
                      <button className='rounded link_button'>
                        <FaTwitter />
                      </button>
                      <button className='rounded link_button'>
                        <FaInstagram />
                      </button>
                      <button className='rounded link_button'>
                        <FaYoutube />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="About_meet_guide_card text-center">

                  <div className="About_meet_guide_card_image">
                    <img src={IMG.TourGuideIMG2} alt="" />
                  </div>

                  <div className="About_meet_guide_card_below_image">
                    <div className="About_meet_guide_card_name">
                      <h3>Guy Hawkins</h3>
                    </div>
                    <div className="About_meet_guide_card_occupation">
                      <p>Tourist Guide</p>
                    </div>
                    <div className="About_meet_guide_card_links">
                      <button className='rounded link_button'>
                        <FaFacebookF />
                      </button>
                      <button className='rounded link_button'>
                        <FaTwitter />
                      </button>
                      <button className='rounded link_button'>
                        <FaInstagram />
                      </button>
                      <button className='rounded link_button'>
                        <FaYoutube />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="About_meet_guide_card text-center">

                  <div className="About_meet_guide_card_image">
                    <img src={IMG.TourGuideIMG3} alt="" />
                  </div>

                  <div className="About_meet_guide_card_below_image">
                    <div className="About_meet_guide_card_name">
                      <h3>Jenny Wilson</h3>
                    </div>
                    <div className="About_meet_guide_card_occupation">
                      <p>Tourist Guide</p>
                    </div>
                    <div className="About_meet_guide_card_links">
                      <button className='rounded link_button'>
                        <FaFacebookF />
                      </button>
                      <button className='rounded link_button'>
                        <FaTwitter />
                      </button>
                      <button className='rounded link_button'>
                        <FaInstagram />
                      </button>
                      <button className='rounded link_button'>
                        <FaYoutube />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="About_meet_guide_card text-center">

                  <div className="About_meet_guide_card_image">
                    <img src={IMG.TourGuideIMG4} alt="" />
                  </div>

                  <div className="About_meet_guide_card_below_image">
                    <div className="About_meet_guide_card_name">
                      <h3>Jacob Jones</h3>
                    </div>
                    <div className="About_meet_guide_card_occupation">
                      <p>Tourist Guide</p>
                    </div>
                    <div className="About_meet_guide_card_links">
                      <button className='rounded link_button'>
                        <FaFacebookF />
                      </button>
                      <button className='rounded link_button'>
                        <FaTwitter />
                      </button>
                      <button className='rounded link_button'>
                        <FaInstagram />
                      </button>
                      <button className='rounded link_button'>
                        <FaYoutube />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </Slider>
          </div>
          </div>

      </div>

      <div className="Home_marquee_container mb-5">
          
          <div className="Home_marquee">
            <img src={IMG.MarqueeIMG1} alt="" />
            <img src={IMG.MarqueeIMG2} alt="" />
            <img src={IMG.MarqueeIMG3} alt="" />
            <img src={IMG.MarqueeIMG4} alt="" />
            <img src={IMG.MarqueeIMG1} alt="" />
            <img src={IMG.MarqueeIMG2} alt="" />
            <img src={IMG.MarqueeIMG3} alt="" />
            <img src={IMG.MarqueeIMG4} alt="" />
            <img src={IMG.MarqueeIMG1} alt="" />
            <img src={IMG.MarqueeIMG2} alt="" />
            <img src={IMG.MarqueeIMG3} alt="" />
            <img src={IMG.MarqueeIMG4} alt="" />
          </div>
          
          <div className="Home_marquee">
            <img src={IMG.MarqueeIMG1} alt="" />
            <img src={IMG.MarqueeIMG2} alt="" />
            <img src={IMG.MarqueeIMG3} alt="" />
            <img src={IMG.MarqueeIMG4} alt="" />
            <img src={IMG.MarqueeIMG1} alt="" />
            <img src={IMG.MarqueeIMG2} alt="" />
            <img src={IMG.MarqueeIMG3} alt="" />
            <img src={IMG.MarqueeIMG4} alt="" />
            <img src={IMG.MarqueeIMG1} alt="" />
            <img src={IMG.MarqueeIMG2} alt="" />
            <img src={IMG.MarqueeIMG3} alt="" />
            <img src={IMG.MarqueeIMG4} alt="" />
          </div>
          
        </div>

    </div>
  )
}

export default About