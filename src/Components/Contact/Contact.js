import React from "react";
import "../Contact/Contact.css";

import homelogo from "../../Assets/SVG/home.svg";
import phonelogo from "../../Assets/SVG/phonelogo.svg";
import maillogo from "../../Assets/SVG/maillogo.svg";
import Enavbar from "../Enavbar/Enavbar";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <>
    <Enavbar/>
    <div className="ebeauty-contact-container">
      <div className="ebeauty-send-us-msg-container">
        <h4>Send us message</h4>
        <div className="send-us-form-one">
          <div className="send-us-form-name">
            <p>NAME</p>
            <input type="text" placeholder="Enter name" /><hr/>
          </div>
          <div className="send-us-form-email">
            <p>EMAIL</p>
            <input type="text" placeholder="Enter email" /><hr/>
          </div>
        </div>
        <div className="send-us-form-two">
          <div className="send-us-form-phone">
            <p>PHONE</p>
            <input type="text" placeholder="Enter phone number " /><hr/>
          </div>
          <div className="send-us-form-subject">
            <p>SUBJECT</p>
            <input type="text" placeholder="Enter subject" /><hr/>
          </div>
        </div>
        <div className="send-us-form-three">
          <div className="send-us-form-message">
            <p>MESSAGE</p>
            <input type="text" placeholder="Enter your message" />
            <hr/>
          </div>
        </div>
        <div className="send-us-form-button">
          <div className="send-us-form-button-reset">
            <button>RESET</button>
          </div>
          <div className="send-us-form-button-submit">
            <button>SUBMIT</button>
          </div>
        </div>
      </div>
      <div className="ebeauty-contact-us-container">
        <h4>Contact Us</h4>
        <div className="">
          <div className="head-office-css">
            <div>
              <img src={homelogo} alt=''/>
            </div>
            <div>
              <p>HEAD OFFICE</p>
            </div>
          </div>
          <p>
            Mountain Trail Foods Pvt Ltd,
            <br /> Umiya Emporium, #102, 2nd Floor,
            <br /> Hosur Main Road,
            <br /> Kaveri Layout, Adugodi, Bangalore – 560 029.
            <br /> Phone: 8880141000
            <br />
            Landmark:- Opp to Indian oil petrol bunk
          </p>
        </div>
        <div className="contact-number-css">
          <div>
            <img src={phonelogo} alt="" />
          </div>
          <div>
            <p>CONTACT NUMBER</p>
          </div>
        </div>
        <p>
          Stores/ Retail : +91 8880141000
          <br />
          Vending Machines : +91 9513759535
          <br />
          The Online Store : +91 6366857694
          <br />
        </p>
        <div className="email-section-css">
          <div>
            <img src={maillogo} alt="" />
          </div>
          <div>
            <p>EMAIL</p>
          </div>
        </div>
        <p>
          Stores/ Retail : feedback@chaipoint.com
          <br />
          Vending Machines : vaas@chaipoint.com
          <br />
          The Online Store : customercare@chaipoint.com
          <br />
        </p>
      </div>
    </div>
    <Footer/>
    </>
    // </div>
  );
};

export default Contact;
