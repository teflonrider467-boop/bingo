import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IMG from "../assets/img";
import { HiOutlineArrowRight } from "react-icons/hi";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { GiJourney } from "react-icons/gi";
import { BiTargetLock } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaRegClock, FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
  // import {EffectCoverFlow, Navigation} from 'swiper/modules';

  const Home = () => {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      waitForAnimate: false,
      autoplay: true,
      autoplaySpeed: 90000,
    };

    const settings2 = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    const settings3 = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
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

    const settings4 = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 500,
      variableWidth: true, // If you want exact control over slidesToShow, consider removing this
      responsive: [
        {
          breakpoint: 1024,
          settings: {  // Corrected 'settings4' to 'settings'
            slidesToShow: 1,
            infinite: true,
            dots: true,
            centerPadding: "40px"
          }
        },
        {
          breakpoint: 600,
          settings: {  // Corrected 'settings4' to 'settings'
            slidesToShow: 1,
            infinite: true,
            dots: true,
            centerPadding: "20px"
          }
        },
        {
          breakpoint: 480,
          settings: {  // Corrected 'settings4' to 'settings'
            slidesToShow: 1,
            infinite: true,
            dots: true
          }
        }
      ]
    };
    return (
      <div className="container-fluid">

        <div className="Home_banners mb-5">
          <div className="slider-container">
            <Slider {...settings}>
              <div
                // style={{ backgroundImage: `url(${IMG.BackgroundBanner})` }}
                className="Home_banner Home_banner_1"
              >
                <h4>Get unforgettable pleasure with us</h4>
                <h2>Let&apos;s Make Your Best Trip With Us</h2>
                <div className="Home_banner_buttons">
                  <button className="Home_banner_button_1 rounded-pill">
                    Explore Tours <HiOutlineArrowRight />
                  </button>
                  <button className="Home_banner_button_2 rounded-pill">
                    Our Services <HiOutlineArrowRight />
                  </button>
                </div>
              </div>
              <div
                // style={{ backgroundImage: `url(${IMG.BreadCrumbBG})` }}
                className="Home_banner Home_banner_2"
              >
                <h4>Get unforgettable pleasure with us</h4>
                <h2>Let&apos;s Make Your Best Trip With Us</h2>
                <div className="Home_banner_buttons">
                  <button className="Home_banner_button_1 rounded-pill">
                    Explore Tours <HiOutlineArrowRight />
                  </button>
                  <button className="Home_banner_button_2 rounded-pill">
                    Our Services <HiOutlineArrowRight />
                  </button>
                </div>
              </div>
              <div
              //   style={{ 
              //     backgroundImage: `url(${IMG.BackgroundBanner})`
              // }}
                className="Home_banner Home_banner_3"
              >
                <h4>Get unforgettable pleasure with us</h4>
                <h2>Let&apos;s Make Your Best Trip With Us</h2>
                <div className="Home_banner_buttons">
                  <button className="Home_banner_button_1 rounded-pill">
                    Explore Tours <HiOutlineArrowRight />
                  </button>
                  <button className="Home_banner_button_2 rounded-pill">
                    Our Services <HiOutlineArrowRight />
                  </button>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        <div className="Home_wonderful_place mb-5">
          <div className="Home_wonderful_text">
            <h4>Wonderful Place For You</h4>
            <h2>Tour Categories</h2>
          </div>
          <div className="Home_wonderful_slider">
          <div className="slider-container">
            <Slider {...settings2}>

              <div className="Home_wonderful_card">
                <div className="Home_wonderful_slider_item Home_wonderful_slider_item_1">
                </div>
                <h3>Wildlife</h3>
                <p>See More</p>
              </div>

              <div className="Home_wonderful_card">
                <div className="Home_wonderful_slider_item Home_wonderful_slider_item_2">
                </div>
                <h3>Walking</h3>
                <p>See More</p>
              </div>
              
              <div className="Home_wonderful_card">
                <div className="Home_wonderful_slider_item Home_wonderful_slider_item_3">
                </div>
                <h3>Cruise</h3>
                <p>See More</p>
              </div>

              <div className="Home_wonderful_card">
                <div className="Home_wonderful_slider_item Home_wonderful_slider_item_4">
                </div>
                <h3>Hiking</h3>
                <p>See More</p>
              </div>

              <div className="Home_wonderful_card">
                <div className="Home_wonderful_slider_item Home_wonderful_slider_item_5">
                </div>
                <h3>Airbirds</h3>
                <p>See More</p>
              </div>
              
            </Slider>
          </div>
          </div>
        </div>

        {/*slider not responsive as it is swiper */}
        <div className="Home_destination mb-5">
          <div className="Home_destination_text">
            <h4>Top Destination</h4>
            <h2>Popular Destination</h2>
          </div>
          <div className="Home_destination_slider">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
              >     
              <div className="swiper_image_div">
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" className="swiper_image" />
                </SwiperSlide>
              </div>

              <div className="swiper_image_div">
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" className="swiper_image" />
                </SwiperSlide>
              </div>
              <div  className="swiper_image_div">
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" className="swiper_image" />
                </SwiperSlide>
              </div>
              <div className="swiper_image_div">
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" className="swiper_image" />
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
          


        </div>

        
        <div className="Home_go_together mb-5">

          <div className="Home_go_together_images">

            <div className="Home_go_together_image Home_go_together_image_1">
              <img src={IMG.GoTogetherIMG1} alt="" />
            </div>
            
            <div  className="Home_go_together_image_evil">
              
              <div className="Home_go_together_image Home_go_together_image_2">
                <img src={IMG.GoTogetherIMG2} alt="" />
              </div>

              <div className="Home_go_together_image Home_go_together_image_3">
                <img src={IMG.GoTogetherIMG3} alt="" />
              </div>
            
            </div>
          </div>

          <div className="Home_go_together_text">
            <h4>Let&apos;s go Together</h4>
            <h2>Plan Your Trip With Us</h2>
            <p>There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don’t look even slightly.
            </p>
            <div className="Home_go_together_tabs">

              <div className="Home_go_together_tabs_icon">
              <GiJourney />
              </div>
              
              <div className="Home_go_together_tabs_text">
                
                <div className="Home_go_together_tabs_text_head">
                  <h5>Exclusive Trip</h5>
                </div>

                <div className="Home_go_together_tabs_text_desc">
                  <p>
                    There are many variations of passages of available but the majority.
                  </p>
                </div>
              
              </div>
            </div>

            <div className="Home_go_together_tabs">

              <div className="Home_go_together_tabs_icon">
              <GiJourney />
              </div>
              
              <div className="Home_go_together_tabs_text">
                
                <div className="Home_go_together_tabs_text_head">
                  <h5>Professional Guide</h5>
                </div>

                <div className="Home_go_together_tabs_text_desc">
                  <p>
                    There are many variations of passages of available but the majority.
                  </p>
                </div>
              
              </div>
            </div>

            <div className="Home_go_together_text_button">
              <button className="rounded-pill"> Learn More <HiOutlineArrowRight /></button>
            </div>

          </div>
        </div>

        <div className="Home_recommended_places mb-5">
          <div className="Home_recommended_places_text">
            <h4>Best Recommended Places</h4>
            <h2>Popular Destination we offer for all</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, repudiandae, eaque voluptatum qui eius distinctio tempore autem voluptatem, ipsa tempora eos optio saepe aliquid soluta!
            </p>
          </div>

          <div className="slider-container Home_recommended_places_cards">
            <Slider {...settings3}>

              <div>
                <div className="Home_recommended_places_card">

                  <div className="Home_recommended_places_card_image">
                    <img src={IMG.RecommendPlaceIMG1} alt="" />
                  </div>

                  <div className="Home_recommended_places_card_title">
                    <h3>Island Peak Climbing</h3>
                  </div>

                  <div className="Home_recommended_places_card_location">
                    <p><BiTargetLock />Nepal, Pokhara, Tibet</p>
                  </div>

                  <div className="Home_recommended_places_card_rate mb-3">
                    <p><span className="Home_recommended_places_card_rate_price">$600.00</span>/Person</p>
                  </div>

                  <div className="Home_recommended_places_card_interact">
                    
                    <div className="Home_recommended_places_card_duration">
                      <p><FaRegClock /><span> 6</span> days</p>
                    </div>
                    <div className="Home_recommended_places_card_button">
                      <button className="rounded-pill">Book Now <HiOutlineArrowRight /></button>
                    </div>

                  </div>
                </div>
              </div>

              <div>
                <div className="Home_recommended_places_card">

                  <div className="Home_recommended_places_card_image">
                    <img src={IMG.RecommendPlaceIMG2} alt="" />
                  </div>

                  <div className="Home_recommended_places_card_title">
                    <h3>Ghorepani Pool Hill Trek</h3>
                  </div>

                  <div className="Home_recommended_places_card_location">
                    <p><BiTargetLock />Bhutan, Pokhara</p>
                  </div>

                  <div className="Home_recommended_places_card_rate mb-3">
                    <p><span className="Home_recommended_places_card_rate_price">$569.00</span>/Person</p>
                  </div>

                  <div className="Home_recommended_places_card_interact">
                    
                    <div className="Home_recommended_places_card_duration">
                      <p><FaRegClock /><span> 5</span> days</p>
                    </div>
                    <div className="Home_recommended_places_card_button">
                      <button className="rounded-pill">Book Now <HiOutlineArrowRight /></button>
                    </div>

                  </div>
                </div>
              </div>

              <div>
                <div className="Home_recommended_places_card">

                  <div className="Home_recommended_places_card_image">
                    <img src={IMG.RecommendPlaceIMG3} alt="" />
                  </div>

                  <div className="Home_recommended_places_card_title">
                    <h3>Langtang Valley Treking</h3>
                  </div>

                  <div className="Home_recommended_places_card_location">
                    <p><BiTargetLock />Bhutan, India, Pokhara</p>
                  </div>

                  <div className="Home_recommended_places_card_rate mb-3">
                    <p><span className="Home_recommended_places_card_rate_price">$600.00</span>/Person</p>
                  </div>

                  <div className="Home_recommended_places_card_interact">
                    
                    <div className="Home_recommended_places_card_duration">
                      <p><FaRegClock /><span> 6</span> days</p>
                    </div>
                    <div className="Home_recommended_places_card_button">
                      <button className="rounded-pill">Book Now <HiOutlineArrowRight /></button>
                    </div>

                  </div>
                </div>
              </div>

              <div>
                <div className="Home_recommended_places_card">

                  <div className="Home_recommended_places_card_image">
                    <img src={IMG.RecommendPlaceIMG4} alt="" />
                  </div>

                  <div className="Home_recommended_places_card_title">
                    <h3>Short Trek around Pokhara</h3>
                  </div>

                  <div className="Home_recommended_places_card_location">
                    <p><BiTargetLock />Bhutan, India, Tibet</p>
                  </div>

                  <div className="Home_recommended_places_card_rate mb-3">
                    <p><span className="Home_recommended_places_card_rate_price">$250.00</span>/Person</p>
                  </div>

                  <div className="Home_recommended_places_card_interact">
                    
                    <div className="Home_recommended_places_card_duration">
                      <p><FaRegClock /><span> 6</span> days</p>
                    </div>
                    <div className="Home_recommended_places_card_button">
                      <button className="rounded-pill">Book Now <HiOutlineArrowRight /></button>
                    </div>

                  </div>
                </div>
              </div>

            </Slider>
          </div>
        </div>

        <div className="Home_pleasure_tour mb-5">

          <div className="Home_pleasure_tour_text">
              <h4>Make Your Tour More Pleasure</h4>
              <h2>Recent Gallery</h2>
          </div>

          <div className="Home_pleasure_tour_images">
              <div className=" Home_pleasure_tour_image Home_pleasure_tour_image_1">
                <img src={IMG.PleasureTourIMG1} alt="" />
              </div>
              <div className="Home_pleasure_tour_image Home_pleasure_tour_image_2">
                <div className="Home_pleasure_tour_image">
                  <img src={IMG.PleasureTourIMG2} alt="" />
                </div>
                <div className="Home_pleasure_tour_image">
                  <img src={IMG.PleasureTourIMG3} alt="" />
                </div>
              </div>
              <div className="Home_pleasure_tour_image Home_pleasure_tour_image_3">
                <img src={IMG.PleasureTourIMG4} alt="" />
              </div>
              <div className="Home_pleasure_tour_image Home_pleasure_tour_image_2">
                <div className="Home_pleasure_tour_image">
                  <img src={IMG.PleasureTourIMG5} alt="" />
                </div>
                <div className="Home_pleasure_tour_image">
                  <img src={IMG.PleasureTourIMG6} alt="" />
                </div>
              </div>
              <div className="Home_pleasure_tour_image Home_pleasure_tour_image_1">
                <img src={IMG.PleasureTourIMG7} alt="" />
              </div>
          </div>

        </div>

        <div className="Home_circles mb-5">
          
          <div className="Home_circle Home_circle_1">
            
            <div className="Home_circle_dot"></div>

            <div className="Home_circle_content">
              <div className="Home_circle_number">12</div>
              <div className="Home_circle_text">Years Experience</div>
            </div>

          </div>

          <div className="Home_circle Home_circle_1">
            
            <div className="Home_circle_dot"></div>

            <div className="Home_circle_content">
              <div className="Home_circle_number">97%</div>
              <div className="Home_circle_text">Retention Rate</div>
            </div>

          </div>

          <div className="Home_circle Home_circle_1">
            
            <div className="Home_circle_dot"></div>

            <div className="Home_circle_content">
              <div className="Home_circle_number">8K</div>
              <div className="Home_circle_text">Tours Completed</div>
            </div>

          </div>

          <div className="Home_circle Home_circle_1">
            
            <div className="Home_circle_dot"></div>

            <div className="Home_circle_content">
              <div className="Home_circle_number">19K</div>
              <div className="Home_circle_text">Happy Travellers</div>
            </div>

          </div>

        </div>

        <div className="Home_meet_guide mb-5">

          <div className="Home_meet_guide_text">
              <h4>Meet with Guide</h4>
              <h2>Tour Guide</h2>
          </div>

          <div className="Home_meet_guide_slider">
          <div className="slider-container Home_meet_guide_cards">
            <Slider {...settings3}>

              <div>
                <div className="Home_meet_guide_card text-center">

                  <div className="Home_meet_guide_card_image">
                    <img src={IMG.TourGuideIMG1} alt="" />
                  </div>

                  <div className="Home_meet_guide_card_below_image">
                    <div className="Home_meet_guide_card_name">
                      <h3>Jane Cooper</h3>
                    </div>
                    <div className="Home_meet_guide_card_occupation">
                      <p>Tourist Guide</p>
                    </div>
                    <div className="Home_meet_guide_card_links">
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
                <div className="Home_meet_guide_card text-center">

                  <div className="Home_meet_guide_card_image">
                    <img src={IMG.TourGuideIMG2} alt="" />
                  </div>

                  <div className="Home_meet_guide_card_below_image">
                    <div className="Home_meet_guide_card_name">
                      <h3>Guy Hawkins</h3>
                    </div>
                    <div className="Home_meet_guide_card_occupation">
                      <p>Tourist Guide</p>
                    </div>
                    <div className="Home_meet_guide_card_links">
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
                <div className="Home_meet_guide_card text-center">

                  <div className="Home_meet_guide_card_image">
                    <img src={IMG.TourGuideIMG3} alt="" />
                  </div>

                  <div className="Home_meet_guide_card_below_image">
                    <div className="Home_meet_guide_card_name">
                      <h3>Jenny Wilson</h3>
                    </div>
                    <div className="Home_meet_guide_card_occupation">
                      <p>Tourist Guide</p>
                    </div>
                    <div className="Home_meet_guide_card_links">
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
                <div className="Home_meet_guide_card text-center">

                  <div className="Home_meet_guide_card_image">
                    <img src={IMG.TourGuideIMG4} alt="" />
                  </div>

                  <div className="Home_meet_guide_card_below_image">
                    <div className="Home_meet_guide_card_name">
                      <h3>Jacob Jones</h3>
                    </div>
                    <div className="Home_meet_guide_card_occupation">
                      <p>Tourist Guide</p>
                    </div>
                    <div className="Home_meet_guide_card_links">
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

        {/* slick not responsive */}
        <div className="Home_testimonials mb-5">

          <div className="Home_testimonials_text">
              <h4>Testimonial</h4>
              <h2>What Client Say About us</h2>
          </div>

          <div className="Home_testimonials_slider">
            <div className="slider-container">
              <Slider {...settings4}>
                
                <div>
                  <div className="Home_testimonial_slide">
                  
                    <div className="Home_testimonial_slide_person">

                      <div className="Home_testimonial_slide_personInfo">
                        <div className="Home_testimonial_slide_person_image">
                          <img src={IMG.BreadCrumbBG} alt="" />
                        </div>
                        <div className="Home_testimonial_slide_person_about">
                          <div className="Home_testimonial_slide_person_name">
                            <h3>Angelina Rose</h3>
                          </div>
                          <div className="Home_testimonial_slide_person_occupation">
                            <p>Traveller</p>
                          </div>
                        </div>
                      </div>

                      <div className="Home_testimonial_slide_rating">
                      ⭐⭐⭐⭐⭐
                      </div>

                    </div>

                    <div className="Home_testimonial_slide_description">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor amet minus, nam esse sunt incidunt dicta ducimus repellat voluptatem odit sint. Facere dicta ab fuga animi laudantium dolore sit reprehenderit.
                    </div>
                  
                  </div>
                </div>
                
                <div>
                  <div className="Home_testimonial_slide">
                  
                    <div className="Home_testimonial_slide_person">

                      <div className="Home_testimonial_slide_personInfo">
                        <div className="Home_testimonial_slide_person_image">
                          <img src={IMG.BreadCrumbBG} alt="" />
                        </div>
                        <div className="Home_testimonial_slide_person_about">
                          <div className="Home_testimonial_slide_person_name">
                            <h3>Angelina Rose</h3>
                          </div>
                          <div className="Home_testimonial_slide_person_occupation">
                            <p>Traveller</p>
                          </div>
                        </div>
                      </div>

                      <div className="Home_testimonial_slide_rating">
                      ⭐⭐⭐⭐⭐
                      </div>

                    </div>

                    <div className="Home_testimonial_slide_description">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor amet minus, nam esse sunt incidunt dicta ducimus repellat voluptatem odit sint. Facere dicta ab fuga animi laudantium dolore sit reprehenderit.
                    </div>
                  
                  </div>
                </div>
                
                
                <div>
                  <div className="Home_testimonial_slide">
                  
                    <div className="Home_testimonial_slide_person">

                      <div className="Home_testimonial_slide_personInfo">
                        <div className="Home_testimonial_slide_person_image">
                          <img src={IMG.BreadCrumbBG} alt="" />
                        </div>
                        <div className="Home_testimonial_slide_person_about">
                          <div className="Home_testimonial_slide_person_name">
                            <h3>Angelina Rose</h3>
                          </div>
                          <div className="Home_testimonial_slide_person_occupation">
                            <p>Traveller</p>
                          </div>
                        </div>
                      </div>

                      <div className="Home_testimonial_slide_rating">
                      ⭐⭐⭐⭐⭐
                      </div>

                    </div>

                    <div className="Home_testimonial_slide_description">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor amet minus, nam esse sunt incidunt dicta ducimus repellat voluptatem odit sint. Facere dicta ab fuga animi laudantium dolore sit reprehenderit.
                    </div>
                  
                  </div>
                </div>
                
                
                <div>
                  <div className="Home_testimonial_slide">
                  
                    <div className="Home_testimonial_slide_person">

                      <div className="Home_testimonial_slide_personInfo">
                        <div className="Home_testimonial_slide_person_image">
                          <img src={IMG.BreadCrumbBG} alt="" />
                        </div>
                        <div className="Home_testimonial_slide_person_about">
                          <div className="Home_testimonial_slide_person_name">
                            <h3>Angelina Rose</h3>
                          </div>
                          <div className="Home_testimonial_slide_person_occupation">
                            <p>Traveller</p>
                          </div>
                        </div>
                      </div>

                      <div className="Home_testimonial_slide_rating">
                      ⭐⭐⭐⭐⭐
                      </div>

                    </div>

                    <div className="Home_testimonial_slide_description">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor amet minus, nam esse sunt incidunt dicta ducimus repellat voluptatem odit sint. Facere dicta ab fuga animi laudantium dolore sit reprehenderit.
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

        {/* slick not responsive */}
        <div className="Home_news mb-5">
          <div className="Home_news_head">
            <div className="Home_news_text">
              <h4>About Us Restaurant</h4>
              <h2>News and Articles From Tourm</h2>
            </div>
            <div className="Home_news_button">
              <button className="rounded-pill article_button" >See More Articles <HiOutlineArrowRight /></button>
            </div>
          </div>

          <div className="Home_news_cards">

            <div className="Home_news_card">
            <div className="Home_news_card_image">
              <img src={IMG.NewsIMG1} alt="" />
            </div>
            <div className="Home_news_card_date">
              Jul 10, 2024 | 3 Min Read
            </div>
            <div className="Home_news_card_title">
              <h5>
                Enrich Your Mind Envision Your Future Education for Success
              </h5>
            </div>
            <div className="Home_news_card_button">
              <button className="rounded-pill">
                Read More <HiOutlineArrowRight />
              </button>
            </div>
            </div>          

            <div className="Home_news_card">
            <div className="Home_news_card_image">
              <img src={IMG.NewsIMG2} alt="" />
            </div>
            <div className="Home_news_card_date">
              Jul 10, 2024 | 3 Min Read
            </div>
            <div className="Home_news_card_title">
              <h5>
                Exploring The Green Spaces Of Realar Residence Harmony with
              </h5>
            </div>
            <div className="Home_news_card_button">
              <button className="rounded-pill">
                Read More <HiOutlineArrowRight />
              </button>
            </div>
            </div>

            <div className="Home_news_card">
            <div className="Home_news_card_image">
              <img src={IMG.NewsIMG3} alt="" />
            </div>
            <div className="Home_news_card_date">
              Jul 09, 2024 | 3 Min Read
            </div>
            <div className="Home_news_card_title">
              <h5>
                Living sustainablity: A day in the life atrealar residence
              </h5>
            </div>
            <div className="Home_news_card_button">
              <button className="rounded-pill">
                Read More <HiOutlineArrowRight />
              </button>
            </div>
            </div>

          </div>
        </div>
      </div>
    );
  };

  export default Home;
  // alternate background image
  // colours
  // actual images