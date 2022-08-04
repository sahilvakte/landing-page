import React from "react";
import "../Homescreen/Homescreen.css";


import Homepic from "../../Assets/SVG/homescreen-pic.svg";
import Naturaloil from "../../Assets/SVG/natural-oil.svg"
import Enavbar from "../../Components/Enavbar/Enavbar";
import Discover from "../../Components/Discover/Discover";
import Bestsellers from "../../Components/Bestsellers/Bestsellers";
import ProdDescription from "../../Components/ProdDescription/ProdDescription";
import Arrival from "../../Components/Arrival/Arrival";
import Review from "../../Components/Review/Review";
import Footer from "../../Components/Footer/Footer";

const Homescreen = () => {
  return (
    <>    <Enavbar/>
    <div>
      <div className="ebeauty-grid-container">
        <div className="ebeauty-grid-item">
        {/* Text Container */}
          <h2 className="tagline-of-ebeauty">
            Reveal Your
            <br /> Natural Beauty
            <br /> Scene
          </h2>
          {/* Buttons */}
          <div className="ebeauty-grid-item-button">
            <button className="get-started-button">GET STARTED</button>
            <button className="learn-more-button">LEARN MORE</button>
          </div>

          {/* Product Card */}
          <div className="product-add-at-homepage">
            <div className="product-add-at-homepage-one">
                <div><b>Natural Oil</b><br/><p className="product-add-at-homepage-price">$150</p></div>
                <div><img className="product-add-at-homepage-image" src={Naturaloil}/></div>
            </div>
            
            <div className="product-add-at-homepage-two">
                <div><b>Natural Oil</b><br/><p className="product-add-at-homepage-price">$150</p></div>
                <div><img className="product-add-at-homepage-image" src={Naturaloil}/></div>
            </div>
        
          </div>
        </div>

        {/* Side Image */}
        <div className="ebeauty-grid-product">
          <div className="ebeauty-grid-product-bg">
            <img
              className="ebeauty-grid-product-image-one"
              src={Homepic}
              // src="https://svgsilh.com/svg/1073869-e91e63.svg"
            />
          </div>
          <div>

          {/* Star Rating  */}
            <div class="rate">
              <input type="radio" id="star5" name="rate" value="5" />
              <label for="star5" title="text">
                5 stars
              </label>
              <input type="radio" id="star4" name="rate" value="4" />
              <label for="star4" title="text">
                4 stars
              </label>
              <input type="radio" id="star3" name="rate" value="3" />
              <label for="star3" title="text">
                3 stars
              </label>
              <input type="radio" id="star2" name="rate" value="2" />
              <label for="star2" title="text">
                2 stars
              </label>
              <input type="radio" id="star1" name="rate" value="1" />
              <label for="star1" title="text">
                1 star
              </label>
              <p className="reviews-tagline">2K+ Reviews</p>
            </div>
          
          </div>
        </div>
      </div>
    </div>

    <Discover/>
    <Bestsellers/>
    <ProdDescription/>
    <Arrival/>
    <Review/>
    <Footer/>
    </>

  );
};

export default Homescreen;
