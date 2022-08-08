import React from "react";
import "../Contact/Contact.css";

import homelogo from "../../Assets/SVG/home.svg";
import phonelogo from "../../Assets/SVG/phonelogo.svg";
import maillogo from "../../Assets/SVG/maillogo.svg";

const Contact = () => {
  return (
    <div className="ebeauty-contact-container">
      <div className="ebeauty-send-us-msg-container">
        <h4>Send us a message</h4>
        <div className="send-us-form-one">
          <div className="send-us-form-name">
            <p>NAME</p>
            <input type="text" placeholder="Enter name" />
          </div>
          <div className="send-us-form-email">
            <p>EMAIL</p>
            <input type="text" placeholder="Enter email" />
          </div>
        </div>
        <div className="send-us-form-two">
          <div className="send-us-form-phone">
            <p>PHONE</p>
            <input type="text" placeholder="Enter phone number " />
          </div>
          <div className="send-us-form-subject">
            <p>SUBJECT</p>
            <input type="text" placeholder="Enter subject" />
          </div>
        </div>
        <div className="send-us-form-three">
          <div className="send-us-form-message">
            <p>MESSAGE</p>
            <input type="text" placeholder="Enter your message" />
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
              <img src={homelogo} />
            </div>
            <div>HEAD OFFICE</div>
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
          <div>CONTACT NUMBER</div>
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
          <div>EMAIL</div>
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
    // </div>
  );
};

export default Contact;
