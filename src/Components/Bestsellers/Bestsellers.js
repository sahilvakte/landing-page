import React from "react";
import "../Bestsellers/Bestsellers.css";

const Bestsellers = () => {
  return (
    <div className="bestsellers-main-container">
      <div className="bestsellers-text-data">
        <h3 className="bestsellers-tag-line">Best Sellers</h3>
        <p className="bestsellers-tag-line-para">
          The line of Women's sprays Cosmetics in 2019 was replenished with a
          <br /> new masterpiece
        </p>
      </div>
      <div className="bestsellers-main-container-of-products">
        <div className="bestseller-product-card-one">
          <div className="bestseller-product-card-one-for-image">
          <img className="bestseller-product-card-one-for-image-product-one-like" src="https://svgsilh.com/svg/2055208-ff5722.svg"/>
            <img className="bestseller-product-card-one-for-image-product-one" src="https://svgsilh.com/svg/1299422-f9b8ce.svg"/>
          </div>
          <div className="bestseller-product-card-one-for-details">
            <div>
            <h4>Mayparis</h4>
            <p className="bestseller-product-price-details">$150</p>
            </div>
            <button className="bestseller-product-card-one-for-details-button">Buy Now</button>
          </div>
        </div>

        <div className="bestseller-product-card-two">
          <div className="bestseller-product-card-two-for-image">
          <img className="bestseller-product-card-two-for-image-product-two-like" src="https://svgsilh.com/svg/2055208-ff5722.svg"/>
            <img className="bestseller-product-card-two-for-image-product-two" src="https://svgsilh.com/svg/1299422-f9b8ce.svg"/>
          </div>
          <div className="bestseller-product-card-one-for-details">
            <div>
            <h4>Mayparis</h4>
            <p className="bestseller-product-price-details">$150</p>
            </div>
            <button className="bestseller-product-card-two-for-details-button">Buy Now</button>
          </div>
        </div>

        <div className="bestseller-product-card-one">
          <div className="bestseller-product-card-one-for-image">
          <img className="bestseller-product-card-one-for-image-product-one-like" src="https://svgsilh.com/svg/2055208-ff5722.svg"/>
            <img className="bestseller-product-card-one-for-image-product-one" src="https://svgsilh.com/svg/1299422-f9b8ce.svg"/>
          </div>
          <div className="bestseller-product-card-one-for-details">
            <div>
            <h4>Mayparis</h4>
            <p className="bestseller-product-price-details">$150</p>
            </div>
            <button className="bestseller-product-card-one-for-details-button">Buy Now</button>
          </div>
        </div>

        <div className="bestseller-product-card-two">
          <div className="bestseller-product-card-two-for-image">
          <img className="bestseller-product-card-two-for-image-product-two-like" src="https://svgsilh.com/svg/2055208-ff5722.svg"/>
            <img className="bestseller-product-card-two-for-image-product-two" src="https://svgsilh.com/svg/1299422-f9b8ce.svg"/>
          </div>
          <div className="bestseller-product-card-one-for-details">
            <div>
            <h4>Mayparis</h4>
            <p className="bestseller-product-price-details">$150</p>
            </div>
            <button className="bestseller-product-card-two-for-details-button">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestsellers;
