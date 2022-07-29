import React from "react";
import "../Homescreen/Homescreen.css";

const Homescreen = () => {
  return (
    <div>
      <div className="ebeauty-grid-container">
        <div className="ebeauty-grid-item">
          <h2 className="tagline-of-ebeauty">
            Reveal Your
            <br /> Natural Beauty
            <br /> Scene
          </h2>
          <div className="ebeauty-grid-item-button">
            <button className="get-started-button">GET STARTED</button>
            <button className="learn-more-button">LEARN MORE</button>
          </div>
          <div className="product-add-at-homepage">
            <div className="product-add-at-homepage-one">
                <div><b>Natural Oil</b><br/><p className="product-add-at-homepage-price">$150</p></div>
                <div><img className="product-add-at-homepage-image" src="https://svgsilh.com/svg/23672.svg"/></div>
            </div>
            
            <div className="product-add-at-homepage-two">
                <div><b>Natural Oil</b><br/><p className="product-add-at-homepage-price">$150</p></div>
                <div><img className="product-add-at-homepage-image" src="https://svgsilh.com/svg/23672.svg"/></div>
            </div>
        
          </div>
        </div>
        <div className="ebeauty-grid-product">
          <div className="ebeauty-grid-product-bg">
            <img
              className="ebeauty-grid-product-image-one"
              src="https://svgsilh.com/svg/1073869-e91e63.svg"
            />
          </div>
          <div>
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
  );
};

export default Homescreen;
