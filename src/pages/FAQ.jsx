import React, { useState } from 'react'
import { HiOutlineArrowRight } from 'react-icons/hi';
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

const FAQ = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () =>{
        setIsOpen(!isOpen);
    }
  return (
    <div>
        <div className="FAQ_banner">
        <div>
          <h1>FAQ</h1>
        </div>
        <div>
          <h3>Home <HiOutlineArrowRight /> faq</h3>
        </div>
        </div>

        <div className="FAQ_questions">
        <div className='FAQ_message'>
          <div className='FAQ_faq'>
            <h4>FAQ</h4>
          </div>
          <div className='FAQ_information'>
            <h2>frequently Ask Questions</h2>
            <p>Have Questions you want answers to ?</p>
          </div>

          </div>
          <div className="FAQ_cards">

            <div className='FAQ_card'>
            {/* <div className={`FAQ_card ${isOpen ? "open" : ""}`}> */}

              <div className='FAQ_card_info'>

                <div className='FAQ_Questionaire'>
                    <div className='FAQ_card_info_head'>
                      Q1. How do I start the process of buying a home ?
                    </div>

                    <div className={`FAQ_card_info_desc ${isOpen ? "open" : ""}`}>
                    The open-concept layout seamlessly connects the living room with the fully equipped kitchen, boasting top-of-the-line appliances and all the essentials for preparing delicious meals
                    </div>
                </div>
                
                <div className="FAQ_toggle">
                    <button onClick={toggleOpen}>
                        {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                    </button>
                </div>

              </div>

            </div>

          </div>
        </div>
        
        <div className="FAQ_form"></div>

    </div>
  )
}

export default FAQ;