import React from "react";
import "../Bestsellers/Bestsellers.css";

import Like from "../../Assets/SVG/like.svg"
import Cardpic from "../../Assets/SVG/cardpic.svg"

const Bestsellers = () => {


  return (
    <div className="bestsellers-main-container">
    {/* Center Tag Data */}
      <div className="bestsellers-text-data">
        <h3 className="bestsellers-tag-line">Best Sellers</h3>
        <p className="bestsellers-tag-line-para">
          The line of Women's sprays Cosmetics in 2019 was replenished with a
          <br /> new masterpiece
        </p>
      </div>
      {/* Product Cards */}
      <div className="bestsellers-main-container-of-products">
      <div className="bestseller-product-card-blank"></div>

      {/* Card 1 */}
        <div className="bestseller-product-card-one">
          <div className="bestseller-product-card-one-for-image">
          <img className="bestseller-product-card-one-for-image-product-one-like" alt="like" src={Like}/>
            <img className="bestseller-product-card-one-for-image-product-one" alt="prod" src={Cardpic}/>
          </div>
          <div className="bestseller-product-card-one-for-details">
            <div>
            <h4>Mayparis</h4>
            <p className="bestseller-product-price-details">$150</p>
            </div>
            <button className="bestseller-product-card-one-for-details-button">Buy Now</button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bestseller-product-card-two">
          <div className="bestseller-product-card-two-for-image">
          <img className="bestseller-product-card-two-for-image-product-two-like" alt="like" src={Like}/>
            <img className="bestseller-product-card-two-for-image-product-two" alt="product" src={Cardpic}/>
          </div>
          <div className="bestseller-product-card-one-for-details">
            <div>
            <h4>Mayparis</h4>
            <p className="bestseller-product-price-details">$150</p>
            </div>
            <button className="bestseller-product-card-two-for-details-button">Buy Now</button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bestseller-product-card-one">
          <div className="bestseller-product-card-one-for-image">
          <img className="bestseller-product-card-one-for-image-product-one-like" alt="like" src={Like}/>
            <img className="bestseller-product-card-one-for-image-product-one" alt="product" src={Cardpic}/>
          </div>
          <div className="bestseller-product-card-one-for-details">
            <div>
            <h4>Mayparis</h4>
            <p className="bestseller-product-price-details">$150</p>
            </div>
            <button className="bestseller-product-card-one-for-details-button">Buy Now</button>
          </div>
        </div>


        {/* Card 4 */}
        <div className="bestseller-product-card-two">
          <div className="bestseller-product-card-two-for-image">
          <img className="bestseller-product-card-two-for-image-product-two-like" alt="like" src={Like}/>
            <img className="bestseller-product-card-two-for-image-product-two" alt="product" src={Cardpic}/>
          </div>
          <div className="bestseller-product-card-one-for-details">
            <div>
            <h4>Mayparis</h4>
            <p className="bestseller-product-price-details">$150</p>
            </div>
            <button className="bestseller-product-card-two-for-details-button">Buy Now</button>
          </div>
        </div>
        <div className="bestseller-product-card-blank"></div>
      </div>
    </div>
  );
};

export default Bestsellers;
